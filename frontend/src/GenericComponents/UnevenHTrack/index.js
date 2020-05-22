import './style.css';
import React from 'react';

export default function UnevenHTrack({ children, items }) {
  return (
    <div className='track'>
      {children}
      {items &&
        items.length > 0 &&
        items.map((item, i) => (
          <div className='trackItemContainer' key={i}>
            {item}
          </div>
        ))}
    </div>
  );
}
