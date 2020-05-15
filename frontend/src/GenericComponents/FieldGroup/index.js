import style from './style.css';
import React from 'react';

export default function FieldGroup({ type, label, name, placeholder }) {
  return (
    <div className={style.fieldGroup}>
      <label htmlFor='' className={style.label}>
        Field Label
      </label>
      <input type='text' className={style.input} />
      <small className={style.error}>Put error here</small>
    </div>
  );
}
