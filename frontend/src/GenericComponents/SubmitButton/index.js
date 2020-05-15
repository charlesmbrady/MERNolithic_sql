import style from './style.css';
import React from 'react';

export default function SubmitButton({ text, submitFunction }) {
  return (
    <button
      type='submit'
      className={style.submitButton}
      onClick={submitFunction}
    >
      {text}
    </button>
  );
}
