import styles from './Header.module.scss';
import { useEffect, useState } from 'react';
import {ReactComponent as MenuImg} from './Images/BurgerMenu.svg';
import {ReactComponent as ForumIcon} from './Images/ForumIcon.svg';
import {ReactComponent as DonatIcon} from './Images/DonatIcon.svg';
import OutsideTracker from '../OutSideTracker/OutSideTracker';

const Header = () => {
  const [isMobileModeActive, setIsMobileModeActive] = useState(false);

  useEffect( () => {
    console.log(isMobileModeActive, "isMobileModeActive use eff");
  },[isMobileModeActive])

  return (
    <header className={styles.wrapper}>
      <div className={styles.logoMenuWrapper}>
        <div 
          onClick={() => {
            console.log("AAAA");
            setIsMobileModeActive( (prev) => !prev);
            // if (!isMobileModeActive) {
            //   console.log(isMobileModeActive, "isMobileModeActive stop")
            //   return;
            // } else {
            //   setIsMobileModeActive((prev) => !prev);
            // }
          }} 
          className={styles.menu}
        >
          <MenuImg/>
        </div>
        <a className={styles.logoMenuLink} href="">
          <p>Moonlight</p>
        </a>
      </div>
      <OutsideTracker func={() => setIsMobileModeActive(false)}>

      <nav className={styles.navigation}>
        <ul className={isMobileModeActive ? styles.navigationListMobile : styles.navigationList}>
          <li className={styles.navigationItem}>
            <a className={styles.navigationItemLink} href="">
              <div>
                <ForumIcon/>
              </div>
              <p>
                Форум
              </p>
            </a>
          </li>
          <li className={styles.navigationItem}>
            <a className={styles.navigationItemLink} href="">
              <div>
                <DonatIcon/>
              </div>
              <p>
                Донат
              </p>
            </a>
          </li>  
        </ul>
      </nav>
      
      </OutsideTracker>

    </header>
  );
};

export default Header;