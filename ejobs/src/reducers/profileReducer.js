import {
   GET_PROFILE,
   PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  CLEAR_INDIVIDUAL_PROFILE,

  GET_INDIVIDUAL_PROFILE,

} from '../actions/types';

const initialState = {
  profile: null,
  individualProfile: null,
  loading: false
};



function profileReducer(state = initialState, action) {

  switch (action.type) {
     case PROFILE_LOADING:
      return {
        ...state,
        loading: true
        
      };
      case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading:false
      };
       case GET_INDIVIDUAL_PROFILE:
      return {
        ...state,
        individualProfile: action.payload,
        loading:false
      };
        case CLEAR_INDIVIDUAL_PROFILE:
      return {
        ...state,
        individualProfile: null,
      };
      case  CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        profile: null,
        individualProfile: null,
        
      };
    default:
      return state;
  }
}

export default profileReducer;