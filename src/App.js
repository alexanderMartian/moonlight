import FirstWindow from './components/FirstWindow/FirstWindow';
import SecondWindow from './components/SecondWindow/SecondWindow';
import ThirdWindow from './components/ThirdWindow/ThirdWindow';
import Header from './components/Header/Header';
import styles from "./App.module.scss";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles/styles.scss';

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';

function App() {

  return (
    <>
      <Swiper
        // direction={'vertical'}
        slidesPerView={1}
        // mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}

export default App;
