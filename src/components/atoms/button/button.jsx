import React from 'react';
import './button.scss'; 

const AppButton = ({ children, onClick, type  }) => {
   
  return (
    <button
      type={type}
      onClick={onClick}
      className="custom-button"
    >
      {children}
    </button>
  );
};

export default AppButton;
