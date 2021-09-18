import User from '../models/user.js'
import express from 'express';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import validateRegister from '../validation/register.js';
import validateLogin from '../validation/login.js';
import auth from './auth.js';


const UserRouter = express.Router();

const JWT_SECRET="secret";


UserRouter.post("/register", async (req, res) =>{  
  try{
  const  { errors, isValid } = validateRegister(req.body);
  if(!isValid){
    return res.status(400).json(errors);
  }
    const { email, password} = req.body;
     const existingUser = await User.findOne({ email: email });
    if (existingUser){
      errors.email = "Email Already Exists";
      return res
        .status(400)
        .json(errors);
    }
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new User({
      email,
      password: passwordHash,
    });
    const savedUser = await newUser.save();
    res.json("Email Registered.");
  }
  catch (err) {
      res.status(500).send("Server Error");
    }
});

UserRouter.post("/login", async (req, res) =>{  
   const  { errors, isValid } = validateLogin(req.body);

  if(!isValid){
    return res.status(400).json(errors);
  } 
  
    const { email, password } = req.body;
    try {
    const user = await User.findOne({ email: email });
    if (!user){
      errors.email = 'Email Not Found.';
          return res
           .status(400)
            .json(errors);
    }
      

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      errors.password = 'Invalid Password..';
      return res.status(400).json(errors);
    }
    const payload = {
      user: {
        id: user.id,
        email: user.email,
      }
    }
    const token = jwt.sign(payload, JWT_SECRET);
    res.json({
      token
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
  
});



UserRouter.get('/authenticate', auth, async (req, res) => {
 
   try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

UserRouter.get('/getAllUsers', async (req, res) => {
 
   try {
    const user = await User.find().select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



export default UserRouter;