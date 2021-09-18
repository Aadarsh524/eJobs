import axios from 'axios';
import {
  GET_PROJECT,
  PROJECT_LOADING,
  GET_CLIENT_PROJECT,
  GET_ERRORS,
  DELETE_PROJECT,
  GET_APPLIED_PROJECT,
  GET_APPLICANT_LIST
} from './types';



export const postProject = (newProject, history) =>  dispatch => {
  axios.post('http://localhost:5000/project', newProject)
  .then(res=> history.push("/dashboard"))
   .catch(err => 
    dispatch({
      type: GET_ERRORS,
      payload:err.response.data
    }))
};


export const showAllProject = () =>  dispatch => {
  dispatch(setProjectLoading());
  axios.get('http://localhost:5000/project')
  .then(res=> 
    dispatch({
        type: GET_PROJECT,
        payload:res.data
    }))
    .catch(err => 
        dispatch({
          type: GET_ERRORS,
        payload:err.res
        }));
};

export const getClientProject = () =>  dispatch => {
  axios.get('http://localhost:5000/clientProject')
  .then(res=> 
    dispatch({
        type: GET_CLIENT_PROJECT,
        payload:res.data
    }))
    .catch(err => 
        dispatch({}));
};
export const getAppliedProject = () =>  dispatch => {
  axios.get('http://localhost:5000/appliedProject')
  .then(res=> 
    dispatch({
        type: GET_APPLIED_PROJECT,
        payload: res.data
    }))
    .catch(err => 
        dispatch({
        type: GET_ERRORS,
        payload: err.response
      }));
};

export const setProjectLoading = () =>{
     return{
         type: PROJECT_LOADING
     }
}

export const deleteProject = (id) => dispatch => {
  axios
     .delete(`http://localhost:5000/deleteProject/${id}`)
     .then(res => 
      dispatch({
        type: DELETE_PROJECT,
        payload: id
      }),
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const applyProject = (id,newApplicant,history) => dispatch => {
  axios
     .post(`http://localhost:5000/applyProject/${id}`,newApplicant)
     .then(res =>history.push("/allprojects/asFreelancer"),
     alert("Applied sucessfully")
    )
    .catch(err =>
      dispatch({
      })
    );
};




export const applicantList = (id) => dispatch => {
      dispatch({
        type: GET_APPLICANT_LIST,
        payload: id
      })
};