import Header from '../Header/Header';
import styles from './FirstWindow.module.scss';
import MainPicturesWithDog from './Images/MainPicturesWithDog.png';
import MainPicturesWithBita from './Images/MainPicturesWithBita.png';
import MainPicturesWithGun from './Images/MainPicturesWithGun.png';

const FirstWindow = () => {

  return (
    <div className={styles.mainWrapper}>
      <Header/>
      <main className={styles.picturesWrapper}>
        <div className={styles.dogPicture}>
            <img src={MainPicturesWithDog} alt="MainPicturesWithDog"/>
        </div>
        <div className={styles.batPricture}>
            <img src={MainPicturesWithBita} alt="MainPicturesWithBita"/>
        </div>
        <h1 className={styles.picturesTitle}>Moonlight</h1>
        <div className={styles.gunPicture}>
          <img src={MainPicturesWithGun} alt="MainPicturesWithGun"/>
        </div>
      </main>
    </div>
  );
};

export default FirstWindow;