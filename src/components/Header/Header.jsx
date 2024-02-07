import styles from './Header.module.scss';
import {useState} from 'react';
import {ReactComponent as MenuImg} from './images/BurgerMenu.svg';
import {ReactComponent as ForumIcon} from './images/ForumIcon.svg';
import {ReactComponent as DonatIcon} from './images/DonatIcon.svg';

const Header = () => {
  const [isMobileModeActive, setIsMobileModeActive] = useState(false);

  return (
    <header className={styles.wrapper}>
      <div className={styles.logoMenuWrapper}>
        <div 
          onClick={() => setIsMobileModeActive(prev => !prev)} 
          className={styles.menu}
        >
          <MenuImg/>
        </div>
        <a className={isMobileModeActive ? styles.none : styles.logoMenuLink} href="">
          <p>Moonlight</p>
        </a>
      </div>
      <nav className={styles.navigation}>
        <ul className={isMobileModeActive ? styles.navigationListMobile : styles.navigationList}>
          <li className={styles.navigationItem}>
            <a className={styles.navigationItemLink} href="">
              <div className={styles.navigationItemLinkSvg}>
                <ForumIcon/>
              </div>
              <p className={styles.navigationItemLinkText}>
                Форум
              </p>
            </a>
          </li>
          <li className={styles.navigationItem}>
            <a className={styles.navigationItemLink} href="">
              <div className={styles.navigationItemLinkSvg}>
                <DonatIcon/>
              </div>
              <p className={styles.navigationItemLinkText}>
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