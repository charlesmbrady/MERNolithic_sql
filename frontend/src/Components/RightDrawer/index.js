import style from './style.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';
import { GlobalContext } from '../../Contexts/GlobalContext';
import API from '../../Utilities/API';

export default function RightDrawer() {
  return (
    <div className={style.track}>
      <li>i</li>
    </div>
  );
}
