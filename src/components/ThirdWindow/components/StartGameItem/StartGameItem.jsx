import StartGameItemBlock from "../StartGameItemBlock/StartGameItemBlock";
import styles from './StartGameItem.module.scss';

const StartGameItem = (item) => {
  const {data, openMessage} = item;
  const {step, text, action, img, link, adressServer} = data;

  const copy = (text) => navigator.clipboard.writeText(text);

  return (
    <>
      {
        link !== undefined 
        ? 
        (
          <a target="_blank" rel="noreferrer noopener" href={link} className={styles.wrapper}>
            <StartGameItemBlock step={step} text={text} action={action} img={img}/>
          </a>
        )
      :
        (
          <div 
            onClick={() => {
              copy(adressServer);
              openMessage();
            }} 
            className={styles.wrapper}>
              <StartGameItemBlock step={step} text={text} action={action} img={img}/>
          </div>
        )
      }
    </>
  );
};

export default StartGameItem;