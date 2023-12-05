import FirstWindow from './components/FirstWindow/FirstWindow';
import SecondWindow from './components/SecondWindow/SecondWindow';
import ThirdWindow from './components/ThirdWindow/ThirdWindow';
import Header from './components/Header/Header';
import styles from "./App.module.scss";
import { useEffect, useState } from 'react';
import StartGameItem from './components/StartGameItem/StartGameItem';

function App() {
  const [startGameData, setStartGameData] = useState([]);

  useEffect( () => {
    setStartGameData([1,2,3])
  },[])

  useEffect( () => {
    console.log(startGameData, "startGameData");
  },[startGameData])

  return (
    <div className={styles.mainWrapper}>
      <Header/>
      <FirstWindow/>
      <SecondWindow/>
      <ThirdWindow/>
    </div>
  );
}

export default App;
