import { combineReducers } from 'redux';
import authReducer from './authReducer.js';
import errorReducer from './errorReducer.js';
import profileReducer from './profileReducer.js';
import projectReducer from './projectReducer.js';
import messageReducer from './messageReducer.js';




const rootReducer = combineReducers({
  auth:authReducer,
  project:projectReducer,
  profile:profileReducer,
  message:messageReducer,
  error:errorReducer
})

export default rootReducer;