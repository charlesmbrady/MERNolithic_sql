import style from './style.css';
import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';
import { GlobalContext } from '../../Contexts/GlobalContext';
import API from '../../Utilities/API';
import Hero from '../../GenericComponents/Hero';
import Form from '../../GenericComponents/Form';
import FieldGroup from '../../GenericComponents/FieldGroup';
import FormFooter from '../../GenericComponents/FormFooter';
import SubmitButton from '../../GenericComponents/SubmitButton';
import LeftDrawer from '../../Components/LeftDrawer';
import RightDrawer from '../../Components/RightDrawer';

export default function Home() {
  const { global, setGlobal } = useContext(GlobalContext);
  const leftDrawerOpen = global.leftDrawerOpen;

  const mainItem = (
    <h2 className={style.heroHeader}>Hello main item passed as prop</h2>
  );
  const subItem = <p>Hello sub item passed as prop</p>;

  return (
    <div
      className={
        leftDrawerOpen ? style.gridContainerLeftDrawerOpen : style.gridContainer
      }
    >
      <LeftDrawer className={style.leftDrawer} />
      <div className={style.contentContainer}>
        <div className={style.heroContainer}>
          <Hero mainItem={mainItem} subItem={subItem} />
        </div>

        <hr className={style.divide} />
      </div>
      <RightDrawer className={style.rightDrawer} />
    </div>
  );
}
