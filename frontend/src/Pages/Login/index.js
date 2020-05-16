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

  const clearForm = () => {
    setForm({
      // All field names go here
      firstName: {
        input: null,
        error: null,
      },
      lastName: {
        input: null,
        error: null,
      },
      email: {
        input: null,
        error: null,
      },
      password: {
        input: null,
        error: null,
      },
      passwordConfirmation: {
        input: null,
        error: null,
      },
    });
  };

  const authenticateUser = () => {
    API.authenticate(newUser).then((res) => {
      if (res.status === 200) {
        setUser({ ...user, isAuthenticated: true });
        setUserAuthenticated(true);
        clearForm();
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
      </div>
    </div>
  );
}
