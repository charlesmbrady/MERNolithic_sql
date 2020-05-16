import style from './style.css';
import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import API from '../../Utilities/API';
import { FormContext } from '../../Contexts/FormContext';

//Form Components
import Form from '../../GenericComponents/Form';
import FormFooter from '../../GenericComponents/FormFooter';
import SubmitButton from '../../GenericComponents/SubmitButton';
import FieldGroup from '../../GenericComponents/FieldGroup';

export default function Register() {
  const [userCreated, setUserCreated] = useState(false);

  const { form, setForm } = useContext(FormContext);
  const newUser = {
    firstName: form.firstName.input,
    lastName: form.lastName.input,
    email: form.email.input,
    password: form.password.input,
    passwordConfirmation: form.passwordConfirmation.input,
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

  const submitNewUser = () => {
    API.createUser(newUser).then((res) => {
      if (res.status === 200) {
        setUserCreated(true);
        clearForm();
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
      name='passwordConfirmation'
      placeholder='Confirm password'
    />,
  ];

  const formFooterItems = [
    <SubmitButton text='Submit' submitFunction={() => submitNewUser()} />,
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
      </div>
    </div>
  );
}
