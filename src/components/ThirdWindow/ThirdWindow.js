import { useEffect, useState } from 'react';
import styles from './ThirdWindow.module.scss';
import StartGameItem from '../StartGameItem/StartGameItem';
import {ReactComponent as FirstStepImg} from './Images/Step_1.svg';
import {ReactComponent as SecondStepImg} from './Images/Step_2.svg';
import {ReactComponent as TrirdStepImg} from './Images/Step_3.svg';

const FirstWindow = () => {
  const [startGameData, setStartGameData] = useState([]);

  useEffect( () => {
    setStartGameData([
      {
        step: "1",
        text: "Придбати та встановити ліцензійну версію GTA 5,  підійде будь-яка версія:  Steam, Epic або Social Club",
        action: "Придбати",
        img: <FirstStepImg/>,
        link: "https://www.rockstargames.com/gta-v?_gl=1*6dbdau*_ga*MTY5MTkzMDA0Ny4xNjgyNjA5MTA4*_ga_PJQ2JYZDQC*MTcwMjQwODE2MC41LjAuMTcwMjQwODE2Ny4wLjAuMA..#_ga=2.255751498.391090278.1702408161-1691930047.1682609108"
      },
      {
        step: "2",
        text: "Встановити та запустити офіційний Launcher RAGE MP",
        action: "Завантажити",
        img: <SecondStepImg/>,
        link: "https://rage.mp/"
      },
      {
        step: "3",
        text: "Вибрати сервер і почати грати",
        action: "Копіювати",
        img: <TrirdStepImg/>,
        adressServer: "play.moonlightrp.fun 22005"
      },
    ])
  },[])

  return (
      <main className={styles.mainWrapper}>
        <div className={styles.startGameBlock}>
          <h1>
            ЯК РОЗПОЧАТИ ГРАТИ В GTA 5 RP?
          </h1>
          <div>
            <p>
              Оберіть свою роль в світі Moonlight Role Play: станьте бандитом чи поліцейським, відіграйте роль чиновника чи медика, приєднайтесь до мафії або станьте співробітником ФБР. Погрузіться в непересічну атмосферу цієї рольової гри, де реалістичний світ GTA 5 поєднується з можливістю грати на сервері Moonlight Role Play!
            </p>
          </div>
        </div>
        <div className={styles.stepsWrapper}>
          {
            startGameData.map( item => <StartGameItem item={item} key={item.step}/> )
          }
        </div>
        <footer className={styles.footer}>
          <p>Moonlight RP is not affiliated with or endorsed by Take-Two, Rockstar North Interactive, or any other rights holder. All the used trademarks belong to their respective owners.</p>
          <a href="">help.moonlightrp@gmail.com</a>
        </footer>
      </main>
  );
};

export default FirstWindow;