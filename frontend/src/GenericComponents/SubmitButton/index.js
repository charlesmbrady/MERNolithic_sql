import './style.css';
import React from 'react';

export default function SubmitButton({ children, text, submitFunction }) {
  return (
    <button
      type='submit'
      data-test='submit-button'
      className='submitButton'
      onClick={submitFunction}
    >
      {children}
      {text}
    </button>
  );
}
