import './styles/styles.scss';
import React, {useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import FirstWindow from './components/FirstWindow/FirstWindow';
import SecondWindow from './components/SecondWindow/SecondWindow';
import ThirdWindow from './components/ThirdWindow/ThirdWindow';
import Header from './components/Header/Header';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
          <>
           <FirstWindow/>
          </>
  );
}

export default App;