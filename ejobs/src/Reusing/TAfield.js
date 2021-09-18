import React from 'react';
import "../Css/InputField.css";


function TAField({name,
  fieldName,
  placeholder,
  value,
  type,
  onChange,}) {
    return (
        <div className='inputField' >
              <h4>{fieldName}</h4>
            <textarea
                autoComplete='off'
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
    </div>
    )
}

export default TAField
