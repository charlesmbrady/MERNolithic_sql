import './style.css';
import React from 'react';

export default function CancelButton({ children, text, cancelFunction }) {
  return (
    <button
      className='cancelButton'
      data-test='cancel-button'
      onClick={cancelFunction}
    >
      {text}
      {children}
    </button>
  );
}
