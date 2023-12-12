import styles from './StartGameItem.module.scss';

const StartGameItem = ({item}) => {

  const {step, text, action, img} = item;

  return (
    <a className={styles.wrapper}>
      <div>
        <h2>Крок <span className={styles.stepQuantity}>{step}</span></h2>
        <div className={styles.imagesWrapper}>
          {img}
        </div>
      </div>
      <p className={styles.text}>{text}</p>
      <p className={styles.action}>{action}</p>
    </a>
  );
};

export default StartGameItem;