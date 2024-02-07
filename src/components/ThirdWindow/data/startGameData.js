import {ReactComponent as FirstStepImg} from '../images/Step_1.svg';
import {ReactComponent as SecondStepImg} from '../images/Step_2.svg';
import {ReactComponent as TrirdStepImg} from '../images/Step_3.svg';

const startGameData = [
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
]

export default startGameData;