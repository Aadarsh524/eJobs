import {
  REGISTER_USER,
  SET_CURRENT_USER,
  GET_ALL_USERS
} from '../actions/types';
import isEmpty from '../validation/isEmpty.js'

const initialState = {
  isAuthenticated: false,
  allUsers: null,
  user: null
};



function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
     case REGISTER_USER:
      return {
        ...state,
        payload
        
      };
      case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty (action.payload),
        user:action.payload
      };
        case GET_ALL_USERS:
      return {
        ...state,
        allUsers:action.payload
      };
    
    default:
      return state;
  }
}

export default authReducer;