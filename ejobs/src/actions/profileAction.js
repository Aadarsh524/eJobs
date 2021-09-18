import axios from 'axios';

import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  GET_INDIVIDUAL_PROFILE,
  CLEAR_INDIVIDUAL_PROFILE
} from './types';



export const getCurrentProfile = () =>  dispatch => {
  dispatch(setProfileLoading());
  axios.get('http://localhost:5000/profile')
  .then(res=> 
    dispatch({
        type: GET_PROFILE,
        payload:res.data
    }))
    .catch(err => 
        dispatch({
        type: GET_PROFILE,
        payload:{}
    }));
};

export const getAllProfile = () =>  dispatch => {
  dispatch(setProfileLoading());
  axios.get('http://localhost:5000/allProfiles')
  .then(res=> 
    dispatch({
        type: GET_PROFILES,
        payload:res.data
    }))
    .catch(err => 
        dispatch({
        type: GET_ERRORS,
        payload:{}
    }));
};


export const getIndividualProfile = (id) =>   dispatch => {
  axios
     .post(`http://localhost:5000/freelancerProfile/${id}`)
     .then(res =>
       dispatch({
          type: GET_INDIVIDUAL_PROFILE,
           payload: res.data
       })
     )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload:{}
    })
    );
};


export const setProfileLoading = () =>{
     return{
         type: PROFILE_LOADING
     }
}

export const clearCurrentProfile = () =>{
     return{
         type: CLEAR_CURRENT_PROFILE
     }
}
export const clearIndividualProfile = () =>{
     return{
         type: CLEAR_INDIVIDUAL_PROFILE
     }
}

export const setProfileData = (userPhoto, editProfile , history) =>  async dispatch => {
   if(userPhoto){
     await imageUpload(userPhoto);
    }

 await axios.post('http://localhost:5000/profile', editProfile )
  .then(res=> history.push("/profile"))
   .catch(err => 
    dispatch({
    }))
};

export const imageUpload = async (userPhoto) => {
  console.log(userPhoto);
        const formData = new FormData();
        formData.append("userPhoto", userPhoto);
          await axios.post('http://localhost:5000/profile',formData )
  .then(res=> {})

  }

export const addExperience =  (expData) =>  dispatch => {
  axios
    .post('http://localhost:5000/addExperience', expData)
    .then(res => alert("Data Added"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
export const addEducation =  (eduData) =>  dispatch => {
  axios
    .post('http://localhost:5000/addEducation', eduData)
    .then(res => alert("Data Added"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
