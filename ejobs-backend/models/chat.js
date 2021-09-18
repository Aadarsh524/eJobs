import mongoose  from 'mongoose';

const messageSchema = new mongoose.Schema({
  fromPerson: {
    type: String,
    required: true,
  },
  otherPerson: {
    type: String,
    required: true,
  },
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "messages",
    },
  ],
});


const Message = mongoose.model('chat', messageSchema);



 export default  Message  ;