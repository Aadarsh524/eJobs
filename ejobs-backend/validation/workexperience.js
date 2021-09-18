import  validator from 'validator';
import  isEmpty from './isEmpty.js';


 function validateExperienceInput(data){
    let errors = {};

 data.company = !isEmpty(data.company) ? data.company : '';
  data.job = !isEmpty(data.job) ? data.job : '';
  data.from = !isEmpty(data.from) ? data.from : '';

  if (validator.isEmpty(data.company)) {
    errors.company = 'Company field is required';
  }

  if (validator.isEmpty(data.job)) {
    errors.job = 'Job field is required';
  }

  if (validator.isEmpty(data.from)) {
    errors.from = 'From date field is required';
  }
   
    return { 
        errors,
         isValid: isEmpty(errors)
        };
};
export default validateExperienceInput;