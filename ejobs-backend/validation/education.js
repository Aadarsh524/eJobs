import  validator from 'validator';
import  isEmpty from './isEmpty.js';


 function validateEducationInput(data){
    let errors = {};

 data.institute = !isEmpty(data.institute) ? data.institute : '';
  data.degree = !isEmpty(data.degree) ? data.degree : '';
  data.from = !isEmpty(data.from) ? data.from : '';

  if (validator.isEmpty(data.institute)) {
    errors.institute = 'Institute field is required';
  }

  if (validator.isEmpty(data.degree)) {
    errors.degree = 'Degree field is required';
  }

  if (validator.isEmpty(data.from)) {
    errors.from = 'From date field is required';
  }
   
    return { 
        errors,
         isValid: isEmpty(errors)
        };
};
export default validateEducationInput;