import style from './style.css';
import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';
import useForm from '../../Hooks/useForm';

//Form Components
import Form from '../../GenericComponents/Form';
import FormFooter from '../../GenericComponents/FormFooter';
import SubmitButton from '../../GenericComponents/SubmitButton';
import FieldGroup from '../../GenericComponents/FieldGroup';

export default function Register() {
  const { user } = useContext(UserContext);

  if (user.isCreated) {
    return <Redirect to='/login' />;
  }

  const fieldGroups = [
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
    <SubmitButton text='Submit' />,
    <small className={style.option}>
      <Link to='/login' data-test='register-to-login'>
        Already have an account?
      </Link>
    </small>,
  ];

  const footer = <FormFooter formFooterItems={formFooterItems} />;

  return (
    <div className={style.gridContainer}>
      <div className={style.container}>
        <Form
          title='Register With Us'
          submitFunction='registerUser'
          fieldGroups={fieldGroups}
          footer={footer}
        />
      </div>
    </div>
  );
}
