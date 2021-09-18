import  validator from 'validator';
import  isEmpty from './isEmpty.js';


 function validateProjectPosting(data){
    let errors = {};
    
    
    data.projectTitle = !isEmpty(data.projectTitle) ? data.projectTitle:'';
    data.projectDescription = !isEmpty(data.projectDescription) ? data.projectDescription:'';
     data.projectSkills = !isEmpty(data.projectSkills) ? data.projectSkills:'';
    data.projectBudget = !isEmpty(data.projectBudget) ? data.projectBudget:'';


    if(validator.isEmpty(data.projectTitle)){
         errors.projectTitle = 'Project Title Field is empty';
    }
     if(validator.isEmpty(data.projectDescription)){
         errors.projectDescription = 'Project Description Field is empty';
    }
     if(validator.isEmpty(data.projectSkills)){
         errors.projectSkills = 'Project Skills Field is empty';
    }
   
    if(validator.isEmpty(data.projectBudget)){
         errors.projectBudget = 'Project Budget Field is empty';
    }
   
    return { 
        errors,
         isValid: isEmpty(errors)
        };
};
export default validateProjectPosting;