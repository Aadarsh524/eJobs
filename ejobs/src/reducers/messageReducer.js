import {
  GET_MESSAGES,
  MESSAGE_LOADING,
  GET_MESSAGE_ROOMS,
  CLEAR_MESSAGE,
GET_ROOM_NAME,
CLEAR_MESSAGE_ROOMS


} from '../actions/types';

const initialState = {
  messages: null,
  messageRooms: null,
  loading: false,
  roomname: null
};

function messageReducer(state = initialState, action) {

  switch (action.type) {
     case MESSAGE_LOADING:
      return {
        ...state,
        loading: true
        
      };
      case GET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
        loading:false
      };
      case GET_MESSAGE_ROOMS:
      return {
        ...state,
        messageRooms: action.payload,
        loading:false
      };
      case GET_ROOM_NAME:
      return {
        ...state,
        roomname: action.payload,
        
      };
      case CLEAR_MESSAGE:
      return {
      ...state,
      messages : null
      };
      case CLEAR_MESSAGE_ROOMS:
      return {
      ...state,
      messageRooms : null
      };
    default:
      return state;
  }
}

export default messageReducer;