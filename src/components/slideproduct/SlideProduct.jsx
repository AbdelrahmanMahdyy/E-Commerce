import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';


import "./SlideProduct.css"
import Product from './Product'
import { Navigation, Autoplay } from 'swiper/modules';


function SliderProduct({data, title, description}) {

  
  return (
    <div className='slide_product'>
      <div className="container">
        <div className="top_slide">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={5}
        navigation={true}
        modules={[ Autoplay, Navigation]}
        className="mySwiper">

          {data.map((item) => {
            return(
              <SwiperSlide key={item.id}> <Product item={item} /> </SwiperSlide>

            )
          })}

        </Swiper>

        
      </div>
    </div>
  )
}

export default SliderProduct
