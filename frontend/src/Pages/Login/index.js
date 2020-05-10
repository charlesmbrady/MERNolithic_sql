import style from './style.css';
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import API from '../../Utilities/API';

export default function Login() {
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [user, setUser] = useState({
    email: null,
    password: null,
  });

  const formUpdate = (fieldName, value) => {
    let tempUser = { ...user };
    tempUser[fieldName] = value;

    setUser(tempUser);
  };

  const authenticateUser = (user) => {
    API.authenticate(user).then((res) => {
      if (res.status === 200) {
        setUserAuthenticated(true);
      }
    });
  };

  if (userAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div className={style.gridContainer}>
      <div className={style.container}>
        <form
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
              value={user.email}
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
              value={user.password}
              onChange={(e) => formUpdate(e.target.name, e.target.value)}
            />
            <small className={style.error} data-test='error-password'>
              Error message
            </small>
          </div>
          <button
            type='submit'
            data-test='login-submit-button'
            onClick={() => authenticateUser(user)}
          >
            Submit
          </button>
          <small className={style.option}>
            <Link to='/register' data-test='login-to-register'>
              Don't have an account yet?
            </Link>
          </small>
        </form>
      </div>
    </div>
  );
}
