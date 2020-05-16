import style from './style.css';
import React from 'react';
import FormHeader from '../FormHeader';
import useForm from '../../Hooks/useForm';

export default function Form({ title, fieldGroups, footer }) {
  const { handleSubmit } = useForm();
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <FormHeader title={title} />

      {/* Form Fields will be inserted here by passing an array of <FieldGroup /> components to the fieldGroups prop*/}
      {fieldGroups}

      {/* Footer */}
      {footer}
    </form>
  );
}
