import { useEffect } from 'react';
import styles from './StartGameItem.module.scss';
import imgB from "../ThirdWindow/Images/Step_1.png"

const StartGameItem = ({item}) => {

  const {step, text, action, img} = item;

  useEffect( () => {
    console.log(step, "step")
  },[step])

  return (
    <a className={styles.wrapper}>
      <div>
        <h2>Крок <span className={styles.stepQuantity}>{step}</span></h2>
        <div className={styles.imagesWrapper}>
          {img}
        </div>
        {/* <img src={imgB}></img> */}
      </div>
      <p className={styles.text}>{text}</p>
      <p className={styles.action}>{action}</p>
    </a>
  );
};

export default StartGameItem;