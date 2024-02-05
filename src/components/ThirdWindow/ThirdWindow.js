import { useEffect, useState } from 'react';
import styles from './ThirdWindow.module.scss';
import StartGameItem from "./components/StartGameItem/StartGameItem";
import ActionMessage from "./components/ActionMessage/ActionMessage";
import stepsData from './data/startGameData';

const FirstWindow = () => {
  const [startGameData, setStartGameData] = useState([]);
  const [isTextCopied, setIsTextCopied] = useState(false);

  const openMessage = () =>  {
    setIsTextCopied(true);
    setTimeout(() => setIsTextCopied(false), 2000);
  }

  useEffect( () => {
    setStartGameData(stepsData)
  },[])

  return (
      <main className={styles.mainWrapper}>
        <ActionMessage isTextCopied={isTextCopied}/>
        <div className={styles.startGameBlock}>
          <h1>
            ЯК РОЗПОЧАТИ ГРАТИ В GTA 5 RP ?
          </h1>
          <div>
            <p>
              Оберіть свою роль в світі Moonlight Role Play: станьте бандитом чи поліцейським, відіграйте роль чиновника чи медика, приєднайтесь до мафії або станьте співробітником ФБР. Погрузіться в непересічну атмосферу цієї рольової гри, де реалістичний світ GTA 5 поєднується з можливістю грати на сервері Moonlight Role Play!
            </p>
          </div>
        </div>
        <div className={styles.stepsWrapper}>
          {
            startGameData?.map( data => <StartGameItem data={data} key={data.step} openMessage={openMessage}/> )
          }
        </div>
        <footer className={styles.footer}>
          <p className={styles.footerText}>Moonlight RP is not affiliated with or endorsed by Take-Two, Rockstar North Interactive, or any other rights holder. All the used trademarks belong to their respective owners.</p>
          <a
            href="mailto:help.moonlightrp@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <p className={styles.emailText}>help.moonlightrp@gmail.com</p>
          </a>
        </footer>
      </main>
  );
};

export default FirstWindow;