import style from './style.css';
import React from 'react';
import FormHeader from '../FormHeader';

export default function Form({ title, fieldGroups, footer }) {
  return (
    <form className={style.form}>
      <FormHeader title={title} />

      {/* Form Fields will be inserted here by passing an array of <FieldGroup /> components to the fieldGroups prop*/}
      {fieldGroups}

      {/* Footer */}
      {footer}
    </form>
  );
}
