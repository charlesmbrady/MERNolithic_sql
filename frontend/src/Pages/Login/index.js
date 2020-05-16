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

  if (user.isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  const fieldGroups = [
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
    <SubmitButton text='Submit' />,
    <small className={style.option}>
      <Link to='/register' data-test='login-to-register'>
        Don't have an account yet?
      </Link>
    </small>,
  ];

  const footer = <FormFooter formFooterItems={formFooterItems} />;

  return (
    <div className={style.gridContainer}>
      <div className={style.container}>
        <Form
          title='Login'
          submitFunction='authenticateUser'
          fieldGroups={fieldGroups}
          footer={footer}
        />
      </div>
    </div>
  );
}
