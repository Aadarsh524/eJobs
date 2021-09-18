import React from 'react';
import "../Css/InputField.css";


function InputField({name,
  fieldName,
  placeholder,
  value,
  type,
  onChange,
  disabled}) {
    return (
        <div className='inputField' >
              <h4>{fieldName}</h4>
            <input
                autoComplete='off'
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
    </div>
    )
}



export default InputField
