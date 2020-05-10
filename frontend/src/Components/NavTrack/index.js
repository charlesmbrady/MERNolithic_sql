import style from './style.css';
import React from 'react';
import { Link } from 'react-router-dom';
import API from '../../Utilities/API';

export default function NavTrack() {
  const title = 'MERN Starter';

  const login = (
    <Link className={style.navLink} to='/login'>
      Login
    </Link>
  );
  const register = (
    <Link className={style.navLink} to='/register'>
      Register
    </Link>
  );
  const dashboard = (
    <Link className={style.navLink} to='/dashboard'>
      Dashboard
    </Link>
  );

  const items = [login, register, dashboard];

  return (
    <div className={style.track}>
      <h2 className={style.trackTitle}>{title}</h2>

      {items &&
        items.length > 0 &&
        items.map((item, i) => (
          <div className={style.trackItemContainer} key={i}>
            <li className={style.trackItem}>{item}</li>
          </div>
        ))}
    </div>
  );
}
