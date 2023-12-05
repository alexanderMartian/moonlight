import Header from '../Header/Header';
import styles from './SecondWindow.module.scss';

const SecondWindow = () => {

  return (
    <div className={styles.mainWrapper}>
      <Header/>
      <div className={styles.videoWrapper}>
        <iframe width="1098" height="635" src="https://www.youtube.com/embed/kATT3bw9Zn8?si=UIzxgDiTXWq72AXf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default SecondWindow;