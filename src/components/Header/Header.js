import styles from './Header.module.scss';
import ForumIcon from './Images/ForumIcon.png';
import DonatIcon from './Images/DonatIcon.png';

const Header = () => {

  return (
    <header className={styles.headerWrapper}>
      <div>
        <a href="">
           <p>Moonlight</p>
        </a>
      </div>
      <div>
        <a className={styles.firstLink} href="">
          <div>
            <img src={ForumIcon} alt="ForumIcon"/>
          </div>
          <p>
            Форум
          </p>
        </a>
        <a className={styles.secondLink} href="">
          <div>
            <img src={DonatIcon} alt="DonatIcon"/>
          </div>
          <p>
            Донат
          </p>
        </a>
      </div>
    </header>
  );
};

export default Header;