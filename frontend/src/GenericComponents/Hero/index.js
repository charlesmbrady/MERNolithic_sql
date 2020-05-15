import style from './style.css';
import React from 'react';

export default function Hero({ mainItem, subItem }) {
  return (
    <div className={style.hero}>
      {mainItem}
      {subItem}
    </div>
  );
}
