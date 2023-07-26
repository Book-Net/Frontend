import React from "react";

const Button = ({ children, onClick, className, type }) => {
  return (
    <button
      className={`py-2 px-4 rounded-md ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
