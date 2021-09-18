import mongoose  from 'mongoose';

const projectSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'users'
    },
    projectTitle: {
        type: String
    },
    projectDescription: {
        type: String
    },
    projectSkills: {
        type: [String],
        max: 8
    },
    projectBudget: {
        type: String
    },
   applicants: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
      },
      email: {
          type: String
      },
       projectId: {
          type: String
      }
    }
      
      
]
    },
    {timestamps:true});

   
const Project = mongoose.model('project', projectSchema);



 export default  Project  ;