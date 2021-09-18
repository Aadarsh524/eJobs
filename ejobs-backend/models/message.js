import mongoose  from 'mongoose';

const messageSchema =  mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  fromPerson: {
    type: String,
    required: true,
  },
  otherPerson: {
    type: String,
    required: true,
  },
  timestamp: {
    type: String,
    required: true,
  },
});


const Message = mongoose.model('message', messageSchema);


 export default  Message  ;