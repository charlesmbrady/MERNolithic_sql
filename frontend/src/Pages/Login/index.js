import style from './style.css';
import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';
import { FormContext } from '../../Contexts/FormContext';
import API from '../../Utilities/API';

//Form Components
import Form from '../../GenericComponents/Form';
import FormFooter from '../../GenericComponents/FormFooter';
import SubmitButton from '../../GenericComponents/SubmitButton';
import FieldGroup from '../../GenericComponents/FieldGroup';

export default function Login() {
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  const { user, setUser } = useContext(UserContext);

  const { form, setForm } = useContext(FormContext);
  const newUser = {
    email: form.email.input,
    password: form.password.input,
  };

  const authenticateUser = () => {
    API.authenticate(newUser).then((res) => {
      if (res.status === 200) {
        setUser({ ...user, isAuthenticated: true });
        setUserAuthenticated(true);
      }
    });
  };

  if (userAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  const fields = [
    <FieldGroup
      type='text'
      label='Email'
      name='email'
      placeholder='Enter email address'
    />,
    <FieldGroup
      type='password'
      label='Password'
      name='password'
      placeholder='Enter password'
    />,
  ];

  const formFooterItems = [
    <SubmitButton text='Submit' submitFunction={() => authenticateUser()} />,
    <small className={style.option}>
      <Link to='/register' data-test='login-to-register'>
        Don't have an account yet?
      </Link>
    </small>,
  ];

  return (
    <div className={style.gridContainer}>
      <div className={style.container}>
        <Form title='Login' />
        {fields}
        <FormFooter formFooterItems={formFooterItems} />
        {/* <form
          id='form'
          className={style.form}
          onSubmit={(e) => e.preventDefault()}
        >
          <h2 data-test='header' className={style.title}>
            Login
          </h2>
          <div className={style.control}>
            <label className={style.label} for='email' data-test='label-email'>
              Email
            </label>
            <input
              className={style.input}
              type='text'
              id='email'
              data-test='login-input-email'
              placeholder='Enter email'
              name='email'
              value={newUser.email}
              onChange={(e) => formUpdate(e.target.name, e.target.value)}
            />
            <small className={style.error} data-test='error-email'>
              Error message
            </small>
          </div>
          <div className={style.control}>
            <label
              className={style.label}
              for='password'
              data-test='label-password'
            >
              Password
            </label>
            <input
              className={style.input}
              type='password'
              id='password'
              data-test='login-input-password'
              placeholder='Enter password'
              name='password'
              value={newUser.password}
              onChange={(e) => formUpdate(e.target.name, e.target.value)}
            />
            <small className={style.error} data-test='error-password'>
              Error message
            </small>
          </div>
          <button
            type='submit'
            data-test='login-submit-button'
            onClick={() => authenticateUser(newUser)}
          >
            Submit
          </button>
          <small className={style.option}>
            <Link to='/register' data-test='login-to-register'>
              Don't have an account yet?
            </Link>
          </small>
        </form> */}
      </div>
    </div>
  );
}
