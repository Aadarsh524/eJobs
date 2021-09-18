import {
   GET_PROJECT,
  PROJECT_LOADING,
  GET_CLIENT_PROJECT,
  DELETE_PROJECT,
  GET_APPLIED_PROJECT,
  GET_APPLICANT_LIST
} from '../actions/types';

const initialState = {
  project: null,
  clientProject: null,
  appliedProject: null,
  ProjectID:null,
  loading: false
};



function profileReducer(state = initialState, action) {

  switch (action.type) {
     case PROJECT_LOADING:
      return {
        ...state,
        loading: true
        
      };
      case GET_PROJECT:
      return {
        ...state,
        project: action.payload,
        loading:false
      };
      
      case GET_CLIENT_PROJECT:
      return {
        ...state,
        clientProject: action.payload,
        loading:false
      };
      case GET_APPLIED_PROJECT:
      return {
        ...state,
        appliedProject: action.payload,
        loading:false
      };
       case GET_APPLICANT_LIST:
      return {
        ...state,
        ProjectID: action.payload,
      };
    case DELETE_PROJECT:
      return {
        ...state,
        project: state.project.filter(project => project._id !== action.payload),
      };
    default:
      return state;
  }
}

export default profileReducer;