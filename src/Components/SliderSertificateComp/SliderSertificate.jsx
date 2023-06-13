// import React from 'rea ct'
import Sertificate1 from '../../assets/sertificate1.png'
import Sertificate2 from '../../assets/sertificate2.svg'
import Sertificate3 from '../../assets/sertificate3.svg'
import Sertificate4 from '../../assets/sertificate4.png'
import Sertificate5 from '../../assets/sertificate5.svg'


import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.scss";

// import required modules
import { Pagination } from "swiper";

const SliderSertificate = () => {
    return (
      <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Sertificate1} alt='logo'/></SwiperSlide>
        <SwiperSlide><img src={Sertificate2} alt='logo'/></SwiperSlide>
        <SwiperSlide><img src={Sertificate3} alt='logo'/></SwiperSlide>
        <SwiperSlide><img src={Sertificate4} alt='logo'/></SwiperSlide>
        <SwiperSlide><img src={Sertificate5} alt='logo'/></SwiperSlide>
      </Swiper>
    </>
      )
};

export default SliderSertificate