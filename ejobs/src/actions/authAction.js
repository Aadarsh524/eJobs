import axios from 'axios';
import setAuthToken from '../utils/setAuthToken.js';
import jwt_decode from 'jwt-decode';
import {
  GET_ERRORS,
  SET_CURRENT_USER,
   GET_ALL_USERS
} from './types';
import { clearErrors } from "./error.js"
import { setMessageEmpty, setMessageRoomEmpty } from "./messageAction.js"



export const getAllUsers = () =>  dispatch => {
   axios
   .get('http://localhost:5000/getAllUsers')
   .then(res=>  dispatch({
      type: GET_ALL_USERS,
      payload:res.data
    }))
   .catch(err => 
    dispatch({
      type: GET_ERRORS,
      payload:err.response.data
    }))
};


// Register User

export const register = (userData, history) =>  dispatch => {
   axios
   .post('http://localhost:5000/register', userData)
   .then(res=> history.push("/login"))
   .catch(err => 
    dispatch({
      type: GET_ERRORS,
      payload:err.response.data
    }))
};

export const login = (userData) =>  dispatch => {
   axios
   .post('http://localhost:5000/login', userData)
   .then(res=> {
    const { token } = res.data;
    //Set token to local storage
    localStorage.setItem('jwtToken',token);
    //set token to auth header
    setAuthToken(token);
    //Decode token to get user data
    const decoded = jwt_decode(token);
    //Set current user
    dispatch(setCurrentUser(decoded));
   })
   .catch(err => 
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
};

//SET login user
 const setCurrentUser =  decoded =>{
  return{
    type: SET_CURRENT_USER,
    payload: decoded

  }
}

export default setCurrentUser;


export const logout =  () => dispatch => {
 
  localStorage.removeItem('jwtToken');
  //remove auth header  for future request
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  dispatch(clearErrors({}));
  dispatch(setMessageEmpty({}));
  dispatch(setMessageRoomEmpty({}));


}
;
