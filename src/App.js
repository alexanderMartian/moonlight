import './styles/styles.scss';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';
import FirstWindow from './components/FirstWindow/FirstWindow';
import SecondWindow from './components/SecondWindow/SecondWindow';
import ThirdWindow from './components/ThirdWindow/ThirdWindow';

import Header from './components/Header/Header';

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <ThirdWindow/>
      {/* <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <FirstWindow/>
        </SwiperSlide>
        <SwiperSlide>
          <SecondWindow/>
        </SwiperSlide>
        <SwiperSlide>
          <ThirdWindow/>
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
}

export default App;