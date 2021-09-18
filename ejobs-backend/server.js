import express from 'express';
import mongoose from 'mongoose';
import cors  from 'cors';
import UserRouter from './routes/user.js';
import ProfileRouter from './routes/profile.js';
import ProjectRouter from './routes/project.js';
import ChatRouter from './routes/chat.js';
import path from 'path';





//App config
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}))
const port = process.env.PORT || 5000;
app.use(express.static('public'));
//DB config
const connection_url = `mongodb+srv://eJobs:eJobs@cluster0.vxhim.mongodb.net/myDB?retryWrites=true&w=majority`;

mongoose.connect(connection_url, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
}).then(() => app.listen(port, () => console.log(`Connection is established and running on port : ${port}`)))
.catch((err) => console.log(err.message));



//API Endpoints or Routes
app.use('/', UserRouter);
app.use('/', ProfileRouter);
app.use('/', ProjectRouter);
app.use('/', ChatRouter);




