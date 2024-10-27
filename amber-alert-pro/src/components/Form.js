import React from 'react';

const Form = ({ children, onSubmit }) => {
  return (
    <form data-testid="form-elemnt" onSubmit={onSubmit}>
      {children}
	  <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
