import styles from './StartGameItemBlock.module.scss';

const StartGameItemBlock = ({step, text, action, img}) => {

  return (
    <>
      <div className={styles.stepBlock}>
        <h2>
          Крок 
          <span className={styles.stepQuantity}>{step}</span>
        </h2>
        <div>
          {img}
        </div>
      </div>
      <p className={styles.text}>{text}</p>
      <p className={styles.action}>{action}</p>
    </>
  );
};

export default StartGameItemBlock;