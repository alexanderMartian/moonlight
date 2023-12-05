import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import styles from './ThirdWindow.module.scss';
import StartGameItem from '../StartGameItem/StartGameItem';

const FirstWindow = () => {
  const [startGameData, setStartGameData] = useState([]);

  useEffect( () => {
    setStartGameData([1,2,3])
  },[])

  useEffect( () => {
    console.log(startGameData, "startGameData");
  },[startGameData])

  return (
      <main className={styles.startGameWrapper}>
        <div className={styles.startGameBlock}>
          <h1>
            ЯК РОЗПОЧАТИ ГРАТИ В GTA 5 RP?
          </h1>
          <p>
            Оберіть свою роль в світі Moonlight Role Play: станьте бандитом чи поліцейським, відіграйте роль чиновника чи медика, приєднайтесь до мафії або станьте співробітником ФБР. Погрузіться в непересічну атмосферу цієї рольової гри, де реалістичний світ GTA 5 поєднується з можливістю грати на сервері Moonlight Role Play!
          </p>
        </div>
        <div className={styles.stepsWrapper}>
          {
            startGameData.map( item => <StartGameItem item={item}/> )
          }
        </div>
      </main>
  );
};

export default FirstWindow;