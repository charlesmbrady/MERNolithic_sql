import style from './style.css';
import React, { useEffect, useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import API from '../../Utilities/API';

//Form Components
import Form from '../../GenericComponents/Form';
import FormFooter from '../../GenericComponents/FormFooter';
import SubmitButton from '../../GenericComponents/SubmitButton';
import FieldGroup from '../../GenericComponents/FieldGroup';

export default function Register() {
  const [userCreated, setUserCreated] = useState(false);
  const [user, setUser] = useState({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    passwordConfirmation: null,
  });

  const formUpdate = (fieldName, value) => {
    let tempUser = { ...user };
    tempUser[fieldName] = value;

    setUser(tempUser);
  };

  const submitNewUser = (user) => {
    API.createUser(user).then((res) => {
      if (res.status === 200) {
        setUserCreated(true);
      }
    });
  };

  if (userCreated) {
    return <Redirect to='/login' />;
  }

  const fields = [
    <FieldGroup
      type='text'
      label='First Name'
      name='firstName'
      placeholder='Enter first name'
    />,
    <FieldGroup
      type='text'
      label='Last Name'
      name='lastName'
      placeholder='Enter last name'
    />,
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
    <FieldGroup
      type='password'
      label='Confirm Password'
      name='confirmPassword'
      placeholder='Confirm password'
    />,
  ];

  const formFooterItems = [
    <SubmitButton text='Submit' submitFunction={() => authenticateUser()} />,
    <small className={style.option}>
      <Link to='/login' data-test='register-to-login'>
        Already have an account?
      </Link>
    </small>,
  ];

  return (
    <div className={style.gridContainer}>
      <div className={style.container}>
        <Form title='Register With Us' />
        {fields}
        <FormFooter formFooterItems={formFooterItems} />
        {/* <form
          id='form'
          className={style.form}
          onSubmit={(e) => e.preventDefault()}
        >
          <h2 data-test='header' className={style.title}>
            Register With Us
          </h2>
          <div className={style.control}>
            <label
              className={style.label}
              for='first-name'
              data-test='registration-label-first-name'
            >
              First Name
            </label>
            <input
              className={style.input}
              type='text'
              id='first-name'
              data-test='registration-input-first-name'
              placeholder='Enter first name'
              name='firstName'
              value={user.firstName}
              onChange={(e) => formUpdate(e.target.name, e.target.value)}
            />
            <small
              className={style.error}
              data-test='registration-error-first-name'
            >
              Error message
            </small>
          </div>
          <div className={style.control}>
            <label
              className={style.label}
              for='last-name'
              data-test='registration-label-last-name'
            >
              Last Name
            </label>
            <input
              className={style.input}
              type='text'
              id='last-name'
              data-test='registration-input-last-name'
              placeholder='Enter last name'
              name='lastName'
              value={user.lastName}
              onChange={(e) => formUpdate(e.target.name, e.target.value)}
            />
            <small
              className={style.error}
              data-test='registration-error-last-name'
            >
              Error message
            </small>
          </div>
          <div className={style.control}>
            <label
              className={style.label}
              for='email'
              data-test='registration-label-email'
            >
              Email
            </label>
            <input
              className={style.input}
              type='text'
              id='email'
              data-test='registration-input-email'
              placeholder='Enter email'
              name='email'
              value={user.email}
              onChange={(e) => formUpdate(e.target.name, e.target.value)}
            />
            <small className={style.error} data-test='registration-error-email'>
              Error message
            </small>
          </div>
          <div className={style.control}>
            <label
              className={style.label}
              for='password'
              data-test='registration-label-password'
            >
              Password
            </label>
            <input
              className={style.input}
              type='password'
              id='password'
              data-test='registration-input-password'
              placeholder='Enter password'
              name='password'
              value={user.password}
              onChange={(e) => formUpdate(e.target.name, e.target.value)}
            />
            <small
              className={style.error}
              data-test='registration-error-password'
            >
              Error message
            </small>
          </div>
          <div className={style.control}>
            <label
              className={style.label}
              for='password-confirmation'
              data-test='registration-label-password-confirmation'
            >
              Confirm Password
            </label>
            <input
              className={style.input}
              type='password'
              id='password-confirmation'
              placeholder='Enter password again'
              data-test='registration-input-password-confirmation'
              name='passwordConfirmation'
              value={user.passwordConfirmation}
              onChange={(e) => formUpdate(e.target.name, e.target.value)}
            />
            <small
              className={style.error}
              data-test='registration-error-password-confirmation'
            >
              Error message
            </small>
          </div>
          <button
            type='submit'
            onClick={() => submitNewUser(user)}
            data-test='registration-submit-button'
          >
            Submit
          </button>
          <small className={style.option}>
            <Link to='/login' data-test='register-to-login'>
              Already have an account?
            </Link>
          </small>
        </form> */}
      </div>
    </div>
  );
}
