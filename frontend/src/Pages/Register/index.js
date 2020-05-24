import './style.css';
import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';

//Form Components
import Form from '../../GenericComponents/Form';
import SubmitButton from '../../GenericComponents/SubmitButton';
import FieldGroup from '../../GenericComponents/FieldGroup';

export default function Register() {
  const { user } = useContext(UserContext);

  if (user.isCreated) {
    return <Redirect to='/login' />;
  }

  return (
    <div className='register'>
      <Form title='Register With Us' submitFunction='registerUser'>
        <h2 className='register-header'>Register With Us</h2>
        <FieldGroup
          type='text'
          label='First Name'
          name='firstName'
          placeholder='Enter first name'
        />

        <FieldGroup
          type='text'
          label='Last Name'
          name='lastName'
          placeholder='Enter last name'
        />

        <FieldGroup
          type='text'
          label='Email'
          name='email'
          placeholder='Enter email address'
        />

        <FieldGroup
          type='password'
          label='Password'
          name='password'
          placeholder='Enter password'
        />

        <FieldGroup
          type='password'
          label='Confirm Password'
          name='passwordConfirmation'
          placeholder='Confirm password'
        />

        <SubmitButton className='register-footer'>Submit</SubmitButton>
        <small className='register-footer'>
          <Link to='/login' data-test='register-to-login'>
            Already have an account?
          </Link>
        </small>
      </Form>
    </div>
  );
}
