import React from 'react';
import './input.scss'; 

const CustomInput = ({ type, name, value, onChange, placeholder, ...props }) => {
  return (
    <>
      {type === 'checkbox' ? (
        <div className="checkboxContainer">
          <input
            type={type}
            name={name}
            checked={value}
            onChange={onChange}
            {...props}
          />
          <label htmlFor={name}>{placeholder}</label>
        </div>
      ) : (
        <input
          type={type}
          name={name}
          value={type === 'file' ? undefined : value}
          onChange={onChange}
          placeholder={placeholder}
          {...props}
        />
      )}
    </>
  );
};

export default CustomInput;
