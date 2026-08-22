import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';


function HeroSlider() {
  return (
    <>
    <div className="hero">
      <div className="container">
        <Swiper
        loop={true}
        pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper">

          <SwiperSlide>
            <div className="content">
              <h4>Intoducing the new</h4>
              <h3>Microsoft Xbox <br />      360 Controller</h3>
              <p>Windows Xp / 7 / 8 / 10, Ps3, Tv Box</p>
              <Link to="/" className='btn'>Shop Now</Link>
          </div>
          <img src="src\img\banner_Hero1.jpg" alt="Slider Hero 1" />
          </SwiperSlide>



          <SwiperSlide>
            <div className="content">
              <h4>Intoducing the new</h4>
              <h3>Wireless Smart Speaker /<br />Bluetooth Desktop Speaker</h3>
              <p>Compatible with iOS, Android, Windows & TV Box</p>
              <Link to="/" className='btn'>Shop Now</Link>
          </div>
          <img src="src\img\banner_Hero2.jpg" alt="Slider Hero 1" />
          </SwiperSlide>



          <SwiperSlide>
            <div className="content">
              <h4>Intoducing the new</h4>
              <h3>Portable MP3 Music Player /<br />Digital Audio Player</h3>
              <p>High-Fidelity Audio | FM Radio | Long Battery Life</p>
              <Link to="/" className='btn'>Shop Now</Link>
          </div>
          <img src="src\img\banner_Hero3.jpg" alt="Slider Hero 1" />
          </SwiperSlide>


        </Swiper>
      </div>
    </div>

    </> 
  )
}

export default HeroSlider
