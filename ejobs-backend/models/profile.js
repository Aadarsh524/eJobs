import mongoose  from 'mongoose';

    
const profileSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'users'
    },
    
    username: {
        type: String,
    },
    phone: {
        type: String,
    },
    profession: {
        type: String,
    },
    hourlyRate: {
        type: String,
    },
    availibilty: {
        type: String,
    },
    experience: {
        type: String,
    
    },
    age: {
        type: String,
    },
    address: {
        type: String,
    },
    description: {
        type: String,
    },
    portfolio: {
        type: String,
    },
    userPhoto: {
        type: String
    },
    cv: {
       data: Buffer, 
       contentType: String
    },
    certificates: {
        data: Buffer, 
        contentType: String
    },  
    skills: {
        type: [String],
        max: 8
    },
    languages: {
        type: [String],
        max: 4
    },
    workexperience: [
    {
      
      company: {
        type: String,
        required: true
      },
      job: {
        type: String,
        required: true
      },
      location: {
        type: String
      },
      from: {
        type: Date,
        required: true
      },
       current: {
        type: Boolean,
        default: false
      },
      to: {
        type: Date
      },
    }
  ],
  education: [
    {
      institute: {
        type: String,
        required: true
      },
      degree: {
        type: String,
        required: true
      },
      location: {
        type: String,
        required: true
      },
      from: {
        type: Date,
        required: true
      },
       current: {
        type: Boolean,
        default: false
      },
      to: {
        type: Date
      },
    }
  ],
    social: {
        github: {
         type: String
        },
        behance: {
           type: String
        },
        facebook: {
            type: String
        },
        linkedin: {
           type: String
        },
        instagram: {
           type: String
        }
  },
  date: {
      type: Date,
      default: Date.now,
  }
        
});

const Profile= mongoose.model('profile', profileSchema);


 export default  Profile ;

