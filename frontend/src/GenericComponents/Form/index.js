import './style.css';
import React from 'react';
import FormHeader from '../FormHeader';
import useForm from '../../Hooks/useForm';

export default function Form({
  children,
  title,
  fieldGroups,
  footer,
  submitFunction,
}) {
  const { handleSubmit } = useForm(submitFunction);

  return (
    <form className='form' onSubmit={handleSubmit} noValidate>
      <FormHeader title={title} />
      {children}

      {/* Form Fields will be inserted here by passing an array of <FieldGroup /> components to the fieldGroups prop*/}
      {fieldGroups}

      {/* Footer */}
      {footer}
    </form>
  );
}
