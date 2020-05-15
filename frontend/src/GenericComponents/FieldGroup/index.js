import style from './style.css';
import React, { useContext } from 'react';
import { FormContext } from '../../Contexts/FormContext';

export default function FieldGroup({ type, label, name, placeholder }) {
  const { form, setForm } = useContext(FormContext);

  const formUpdate = (fieldName, value) => {
    let tempForm = { ...form };
    tempForm[fieldName].input = value;
    setForm(tempForm);
  };

  return (
    <div className={style.fieldGroup}>
      <label className={style.label}>{label}</label>
      <input
        type={type}
        name={name}
        className={style.input}
        value={form[name].input}
        onChange={(e) => formUpdate(e.target.name, e.target.value)}
      />
      <small className={style.error}>Put error here</small>
    </div>
  );
}
