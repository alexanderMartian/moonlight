import styles from './Header.module.scss';
import {useState } from 'react';
import {ReactComponent as MenuImg} from './Images/BurgerMenu.svg';
import {ReactComponent as ForumIcon} from './Images/ForumIcon.svg';
import {ReactComponent as DonatIcon} from './Images/DonatIcon.svg';

const Header = () => {
  const [isMobileModeActive, setIsMobileModeActive] = useState(false);

  return (
    <header 
      onClick={ () => {
        if (isMobileModeActive) {
          setIsMobileModeActive(false);
        }
        return null;
      }} 
      className={styles.wrapper}>
      <div className={styles.logoMenuWrapper}>
        <div 
          onClick={() => setIsMobileModeActive(true)} 
          className={styles.menu}
        >
          <MenuImg/>
        </div>
        <a className={styles.logoMenuLink} href="">
          <p>Moonlight</p>
        </a>
      </div>
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
    </header>
  );
};

export default Header;