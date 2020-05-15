import style from './style.css';
import React from 'react';

export default function UnevenHTrack({ items }) {
  return (
    <div className={style.track}>
      {items &&
        items.length > 0 &&
        items.map((item, i) => (
          <div className={style.trackItemContainer} key={i}>
            {item}
          </div>
        ))}
    </div>
  );
}
