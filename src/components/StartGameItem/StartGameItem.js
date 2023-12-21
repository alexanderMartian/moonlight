import { useEffect } from 'react';
import StartGameItemBlock from '../StartGameItemBlock/StartGameItemBlock';
import styles from './StartGameItem.module.scss';

const StartGameItem = ({item}) => {

  const {step, text, action, img, link, adressServer} = item;

  function copy(text){
    navigator.clipboard.writeText(text)
  }

  return (
    <>
      {
        link !== undefined 
        ? 
        (
          <a target="_blank" href={link} className={styles.wrapper}>
            <StartGameItemBlock step={step} text={text} action={action} img={img}/>
          </a>
        )
      :
        (
          <div onClick={() => copy(adressServer)} className={styles.wrapper}>
            <StartGameItemBlock step={step} text={text} action={action} img={img}/>
          </div>
        )
      }
    </>
  );
};

export default StartGameItem;