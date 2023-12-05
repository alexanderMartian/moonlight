import styles from './StartGameItem.module.scss';

const StartGameItem = ({item}) => {

  return (
    <div className={styles.mainWrapper}>
      {item}
    </div>
  );
};

export default StartGameItem;