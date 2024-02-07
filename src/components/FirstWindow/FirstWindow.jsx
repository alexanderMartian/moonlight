import styles from './FirstWindow.module.scss';
import MainPicturesWithDog from './images/MainPicturesWithDog.png';
import MainPicturesWithBita from './images/MainPicturesWithBita.png';
import MainPicturesWithGun from './images/MainPicturesWithGun.png';
import {ReactComponent as DiscordIcon} from './images/discord.svg';
import {ReactComponent as YoutubeIcon} from './images/youtube.svg';
import {ReactComponent as TiktokIcon} from './images/tiktok.svg';

const FirstWindow = () => {

  return (
    <main className={styles.wrapper}>
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
      <footer className={styles.footer}>
        <a 
          className={styles.discordLink}
          href="https://discord.com/moonlight-rp"
          target="_blank"
          rel="noreferrer noopener"
        >
          <DiscordIcon/>
        </a>
        <a 
          className={styles.youTubeLink}
          href="https://www.youtube.com/@MoonlightRoleplay-ms4pu/featured"
          target="_blank"
          rel="noreferrer noopener"
        >
          <YoutubeIcon/>
        </a>
        <a 
          className={styles.tikTokLink}
          href="https://www.tiktok.com/@moonlight_rp_ua"
          target="_blank"
          rel="noreferrer noopener"
        >
          <TiktokIcon/>
        </a>
      </footer>
    </main>
  );
};

export default FirstWindow;