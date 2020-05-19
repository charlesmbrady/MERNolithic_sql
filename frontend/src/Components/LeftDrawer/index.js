import style from './style.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';
import { GlobalContext } from '../../Contexts/GlobalContext';
import API from '../../Utilities/API';
import { TiThMenu } from 'react-icons/ti';

export default function LeftDrawer() {
  const { global, setGlobal } = useContext(GlobalContext);

  const toggleLeftDrawer = () => {
    setGlobal({ ...global, leftDrawerOpen: !global.leftDrawerOpen });
  };

  return (
    <div className={style.track}>
      <div className={style.menuIconContainer}>
        <TiThMenu
          className={style.menuIcon}
          onClick={() => toggleLeftDrawer()}
        />
      </div>

      <li>item one</li>
    </div>
  );
}
