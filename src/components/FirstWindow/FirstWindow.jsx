import styles from './FirstWindow.module.scss';
import MainPicturesWithDog from './Images/MainPicturesWithDog.webp';
import MainPicturesWithBat from './Images/MainPicturesWithBat.webp';
import MainPicturesWithGun from './Images/MainPicturesWithGun.webp';
import {ReactComponent as DiscordIcon} from './Images/discord.svg';
import {ReactComponent as YoutubeIcon} from './Images/youtube.svg';
import {ReactComponent as TiktokIcon} from './Images/tiktok.svg';

const FirstWindow = () => {

  return (
    <main className={styles.wrapper}>


      <h1 className={styles.picturesTitle}>Moonlight</h1>

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