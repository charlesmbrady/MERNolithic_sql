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

export default function Login() {
  const { user } = useContext(UserContext);
  const { authenticateUser } = useForm();

  if (user.isAuthenticated) {
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
    <SubmitButton text='Submit' submitFunction={authenticateUser} />,
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
