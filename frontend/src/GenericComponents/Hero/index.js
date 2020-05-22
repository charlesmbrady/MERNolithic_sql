import './style.css';
import React from 'react';

export default function Hero({ children, mainItem, subItem }) {
  return (
    <div className='hero'>
      {children}
      {mainItem}
      {subItem}
    </div>
  );
}
