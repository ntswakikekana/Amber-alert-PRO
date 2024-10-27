import React from 'react';

const Form = ({ children, onSubmit }) => {
  return (
    <form data-testid="form-element" onSubmit={onSubmit}>
      {children}
	  <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
