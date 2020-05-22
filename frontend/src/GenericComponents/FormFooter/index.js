import './style.css';
import React from 'react';

export default function FormFooter({ children, formFooterItems }) {
  return (
    <div className='formFooter'>
      {children}
      {formFooterItems}
    </div>
  );
}
