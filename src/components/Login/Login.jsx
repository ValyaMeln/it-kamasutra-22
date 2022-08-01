import React from 'react';  // React з папки node_modules
import { NavLink } from 'react-router-dom';
import s from './Login.module.css';
// import LoginForm from './LoginForm';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

const validateLoginForm = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required 1 Обов\'язкове поле 1';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const validationSchemaLoginForm = Yup.object().shape({
  password: Yup.string()
    .min(2, "Must be longer than 2 characters Повинен бути довшим за 2 символи")
    .max(5, "Must be shorter than 5 characters Має бути менше 5 символів")
    .required("Required 2 Обов\'язкове поле 2")
});

const LoginForm = (props) => {
  console.log("RERENDER");
  // debugger;
  return (
    <div>
      <h1 className={s.header}>
        LOGIN PAGE
      </h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false
        }}
        validate={validateLoginForm}
        validationSchema={validationSchemaLoginForm}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {() => (
          <Form>
            <div>
              <Field
                name={'email'}
                type={'text'}
                placeholder={'E-mail'} />
            </div>
            <ErrorMessage name="email" component="div" />

            <div>
              <Field
                name={'password'}
                type={'password'}
                placeholder={'Password'} />
            </div>
            <ErrorMessage name="password" component="div" />

            <div>
              <Field
                type={'checkbox'}
                name={'rememberMe'}
                id='rememberMe' />
              <label htmlFor={'rememberMe'}> remember me Запам'ятати мене </label>
            </div>

            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
      

    </div>
  );
}

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  }
  return (
    <div>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}

export default Login;    