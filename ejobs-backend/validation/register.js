import  validator from 'validator';
import  isEmpty from './isEmpty.js';


 function validateRegister(data){
    let errors = {};
    
    data.email = !isEmpty(data.email) ? data.email:'';
    data.password = !isEmpty(data.password) ? data.password:'';

    if(validator.isEmpty(data.email)){
         errors.email = 'Email Field is empty';
    }
     if(!validator.isLength(data.password, {min:5,max:30})){
        errors.password = 'Password must more than 5 character'
    }
    if(validator.isEmpty(data.password)){
         errors.password = 'Password Field is empty';
    }
   
    return { 
        errors,
         isValid : isEmpty(errors)
        };
};
export default validateRegister;