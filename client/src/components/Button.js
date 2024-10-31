import React from 'react';

const Button = ({ type, label }) => {
  return (
    <button type={type}>
      {label}
    </button>
  );
};

export default Button;
