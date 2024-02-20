import './styles/styles.scss';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import FirstWindow from './components/FirstWindow/FirstWindow';
import SecondWindow from './components/SecondWindow/SecondWindow';
import ThirdWindow from './components/ThirdWindow/ThirdWindow';
import Header from './components/Header/Header';

function App() {

  return (
    <div className="wrapper">
      <Header/>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={10}
        mousewheel={true}
        cssMode={true}
        navigation={true}
        pagination={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        scrollbar={{ draggable: true }}
        className="mySwiper"
      >
        <SwiperSlide>
        <ThirdWindow/>
        </SwiperSlide>
        <SwiperSlide>
        <ThirdWindow/>
        </SwiperSlide>
        <SwiperSlide>
          <ThirdWindow/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;