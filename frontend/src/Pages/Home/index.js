import style from './style.css';
import React, { useContext } from 'react';
import { GlobalContext } from '../../Contexts/GlobalContext';
import Hero from '../../GenericComponents/Hero';

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
