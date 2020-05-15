import style from './style.css';
import React from 'react';

export default function FormFooter({ formFooterItems }) {
  return <div className={style.formFooter}>{formFooterItems}</div>;
}
