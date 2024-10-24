import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormComponent = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    age: Yup.number()
      .min(18, 'You must be at least 18 years old')
      .required('Age is required'),
  });

  return (
    <div>
      <h1>Simple Form with Formik</h1>
      <Formik
        initialValues={{ name: '', email: '', age: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label>Name:</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" />
            </div>

            <div>
              <label>Email:</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>

            <div>
              <label>Age:</label>
              <Field type="number" name="age" />
              <ErrorMessage name="age" component="div" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormComponent;
