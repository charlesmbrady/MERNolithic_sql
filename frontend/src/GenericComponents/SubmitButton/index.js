import style from './style.css';
import React from 'react';

export default function SubmitButton({ text, submitFunction }) {
  return (
    <button className={style.submitButton} onClick={submitFunction}>
      {text}
    </button>
  );
}
