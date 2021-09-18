import express from 'express';
import Project from '../models/project.js'
import User from '../models/user.js';
import auth from './auth.js';
import validateProjectPosting from '../validation/project.js';
import Profile from '../models/profile.js'

const ProjectRouter = express.Router();

ProjectRouter.get("/project", async (req, res) =>{ 
   
    try {
        const allProject  =  await Project.find().sort('-createdAt');

        res.status(200).json(allProject)

 
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
        
    }
 });

ProjectRouter.get("/clientProject",auth, async (req, res) =>{  

   Project.find({user:req.user.id})
    .then(project => {
      res.json(project);
    })
    .catch(err => res.status(404).json({ project: 'There are no project posted by  this user' }));
});



ProjectRouter.get("/appliedProject",auth, async (req, res) =>{  
  
  Project.find({"applicants.user": req.user.id})
    .then(project => {
     
          res.json(project);
      
    })
    .catch(err => res.status(404).json({ msg: 'server error' }));
});
     
 

ProjectRouter.post("/project",auth, async (req, res) =>{  
try {
  const  { errors, isValid } = validateProjectPosting(req.body);
  if(!isValid){
    return res.status(400).json(errors);
  } 
    
      const user = await User.findById(req.user.id).select('-password');

      const newProject = new Project({
        projectTitle: req.body.projectTitle,
        projectDescription: req.body.projectDescription,
        projectSkills: req.body.projectSkills.split(','),
        projectBudget: req.body.projectBudget,
        user: req.user.id
      });

      const project = await newProject.save();

      res.json(project);
    } catch (err) {
      res.status(500).send('Server Error');
    }
});


ProjectRouter.delete(
  '/deleteProject/:id',
 auth,
  (req, res) => {
    var projectId = req.params.id;
    console.log(projectId)
    Profile.findOne({ user: req.user.id }).then(profile => {
      Project.findById(req.params.id)
        .then(project => {
          // Check for post owner
          if (project.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: 'User not authorized' });
          }

          // Delete
          project.remove().then(() => res.json({ success: true }));
        })
        .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
    });
  }
);

ProjectRouter.post(
  '/applyProject/:id',
 auth,
  (req, res) => {
    var projectId = req.params.id;
    console.log(projectId)
    Profile.findOne({ user: req.user.id }).then(profile => {
      Project.findById(req.params.id)
        .then(project => {
          // Check for post owner
          if (
            project.applicants.filter(applicant => applicant.user.toString() === req.user.id)
              .length > 0
          ) {
            return res
              .status(400)
              .json({ AlreadyApplied: 'You already applied to this project' });
          }
          // Delete
          project.applicants.unshift({ user: req.user.id , email: req.body.email, projectId:req.params.id});

          project.save().then(project => res.json(project));
        })
        .catch(err => res.status(404).json({ notFound: 'No project found' }));
    });
  }
);






export default ProjectRouter;