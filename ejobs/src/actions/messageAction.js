import axios from 'axios';

import {
  GET_MESSAGES,
  MESSAGE_LOADING,
  GET_MESSAGE_ROOMS,
  CLEAR_MESSAGE,
  GET_ROOM_NAME,
  CLEAR_MESSAGE_ROOMS
} from '../actions/types';



export const makeChat = (otherPerson, history) => async dispatch  => {
 await  axios.post('http://localhost:5000/makeChat', { otherPerson })
  .then(res=> history.push('/allprojects/message')
    //  dispatch({
    //         // type : GET_MESSAGES,
    //         // payload:res.data
    //     }))
  )
   .catch(err => 
    dispatch({
    }))
    dispatch(setMessageEmpty({}));
    dispatch(setMessageRoomEmpty({}));
};



export const sendMessage = (newMessage) =>  dispatch => {
  axios.post("http://localhost:5000/sendMessage" ,newMessage)
  .then(res=>  dispatch({
      type : GET_MESSAGES,
      payload:res.data
    }))
   .catch(err => 
    dispatch({

    }))
};


export const getAllMessages = () =>  dispatch => {
   dispatch(setMessageEmpty());
   dispatch(setMessageLoading());
  axios.get("http://localhost:5000/getAllMessages")
  .then(res=> 
    dispatch({
        type: GET_MESSAGES,
        payload:res.data
    }))
    .catch(err => 
        dispatch({
        }));
};



export const getUserRooms = () =>  dispatch => {
  dispatch(setMessageLoading());
  axios.get('http://localhost:5000/getUserRooms')
  .then(res=> 
    dispatch({
        type: GET_MESSAGE_ROOMS,
        payload:res.data
    }))
    .catch(err => 
        dispatch({
        }));
};
export const setMessageLoading = () =>{
     return{
         type: MESSAGE_LOADING
     }
}
export const getRoomName = (id) => dispatch =>{
     dispatch({
        type: GET_ROOM_NAME,
        payload: id
    })
}

export const setMessageEmpty= () =>{
     return{
         type: CLEAR_MESSAGE
     }
}
export const setMessageRoomEmpty= () =>{
     return{
         type: CLEAR_MESSAGE_ROOMS
     }
}