import mongoose  from 'mongoose';

const userSchema = mongoose.Schema(
	{
  email: {
    type: String, 
    required: true,
    unique: true
  },
  password: {
    type: String, 
    required: true,
  },
  date: {
    type: Date, 
    default: Date.now,
  },
  });

   
const User  = mongoose.model('user', userSchema);

 export default  User;

