import './style.css';
import React from 'react';
import useForm from '../../Hooks/useForm';

export default function FieldGroup({
  children,
  type,
  label,
  name,
  placeholder,
}) {
  const { handleChange, formValues, formErrors } = useForm();

  return (
    <div className='fieldGroup'>
      {children}
      <label className='label' data-test={`${name}-label`}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={formErrors[name] ? 'invalidInput' : 'input'}
        value={formValues[name]}
        onChange={handleChange}
        data-test={`${name}-input`}
      />
      <small className='error' data-test={`${name}-error`}>
        {formErrors[name]}
      </small>
    </div>
  );
}
