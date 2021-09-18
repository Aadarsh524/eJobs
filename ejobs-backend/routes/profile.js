import express from 'express';
import auth from './auth.js';

import Profile from '../models/profile.js'
import validateEducationInput from '../validation/education.js';
import validateExperienceInput from '../validation/workExperience.js';
import multer from 'multer';


const ProfileRouter = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    cb(null,file.originalname )
  }
})

const upload = multer({ storage: storage })



ProfileRouter.get('/profile', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    }).populate('users', ['email']);

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}); 



ProfileRouter.post('/profile', upload.single('userPhoto'), auth, async (req, res) => {
  const profileFields = {};

profileFields.user = req.user.id;
const obj = Object.assign({},req.file);
console.log(obj.originalname);
  if(req.body.username)profileFields.username = req.body.username;
  if(obj.originalname)profileFields.userPhoto = obj.originalname;
  if(req.body.phone)profileFields.phone = req.body.phone;
  if(req.body.cv)profileFields.cv = req.body.cv;
  if(req.body.certificates)profileFields.certificates = req.body.certificates;

  if(req.body.profession)profileFields.profession = req.body.profession;
  if(req.body.portfolio)profileFields.portfolio = req.body.portfolio;
  if(req.body.hourlyRate)profileFields.hourlyRate = req.body.hourlyRate;
  if(req.body.availibilty)profileFields.availibilty = req.body.availibilty;
  if(req.body.experience)profileFields.experience = req.body.experience;
  if(req.body.age)profileFields.age = req.body.age;
  if(req.body.address)profileFields.address = req.body.address;
  if(req.body.description)profileFields.description = req.body.description;
  if(typeof req.body.skills != undefined){
    profileFields.skills = req.body.skills.split(',');
  }
   if(typeof req.body.languages != undefined){
    profileFields.languages = req.body.languages.split(',');
  }
 profileFields.social = {};
   if(req.body.github)profileFields.social.github = req.body.github;
  if(req.body.behance)profileFields.social.behance = req.body.behance;
  if(req.body.facebook)profileFields.social.facebook = req.body.facebook;
  if(req.body.linkedin)profileFields.social.linkedin = req.body.linkedin;
  if(req.body.instagram)profileFields.social.instagram = req.body.instagram;

  Profile.findOne({user: req.user.id}).then(profile => {
    if(profile){
     
      Profile.findOneAndUpdate({
        user: req.user.id
      },
      {
        $set:profileFields
      }, { new: true} ).then(profile => res.json(profile));
    }
    else{
      new Profile(profileFields).save().then(profile => res.json(profile));
    }
  })

});



ProfileRouter.post(
  '/addExperience',
 auth,
  (req, res) => {
    const { errors, isValid } = validateExperienceInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    Profile.findOne({ user: req.user.id }).then(profile => {
      const newExp = {
        company: req.body.company,
        job: req.body.job,
        location: req.body.location,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
      };
      // Add to edu array
      profile.workexperience.unshift(newExp);

      profile.save().then(profile => res.json(profile));
    });
  }
);



ProfileRouter.post(
  '/addEducation',
 auth,
  (req, res) => {
    const { errors, isValid } = validateEducationInput(req.body);
  console.log(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    Profile.findOne({ user: req.user.id }).then(profile => {
      const newEdu = {
        institute: req.body.institute,
        location:req.body.location,
        degree: req.body.degree,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
      };
      profile.education.unshift(newEdu);
      profile.save().then(profile => res.json(profile));
    });
  }
);

ProfileRouter.get('/allProfiles', (req, res) => {

  Profile.find()
  .populate('users', ['email'])
    .then(profiles => {
      if (!profiles) {
        errors.noprofile = 'There are no profiles';
        return res.status(404).json(errors);
      }

      res.json(profiles);
    })
    .catch(err => res.status(404).json({ profile: 'There are no profiles' }));
});



ProfileRouter.post(
  '/freelancerProfile/:id',
  auth,
  (req, res) => {
    var profileId = req.params.id;
    console.log(profileId);
    Profile.findOne({ user: profileId }).then(profile => {
          if (!profile) {
            res.status(404).json("There in no profile for this user");
          }
           res.json(profile);
        })
        .catch(err => res.status(404).json({ msg: 'Server Error' }));
    });


export default ProfileRouter;
