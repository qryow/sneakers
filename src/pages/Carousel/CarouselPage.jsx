import React, { useEffect, useRef } from 'react';
import style from './Carousel.module.css';
import shoose1 from '../../img/shoose1.svg';
import shoose2 from '../../img/shoose2.svg';
import shoose3 from '../../img/shoose3.svg';


import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination';
import 'swiper/css/navigation'


const CarouselPage = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.update();
    }
  }, []);

  return (
    <div className={style.carouselContainer}>
      <Swiper
                effect={'coverflow'}
                grabCursor={ true }
                centeredSlides={ true }
                loop={ true }
                slidesPerView={'auto'}
                spaceBetween={10}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 100,
                  depth: 100,
                  modifier: 3.5,
                }}
                pagination={ { el: '.swiper-pagination', clickable: true }}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                  clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}

                className={`${style.gallery}`}
              >
                    <SwiperSlide className={style.gallery_cell}>
                      <img className={style.sneaker__img} src={shoose1} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide className={style.gallery_cell}>
                      <img className={style.sneaker__img} src={shoose2} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide className={style.gallery_cell}>
                      <img className={style.sneaker__img} src={shoose3} alt="slide_image" />
                    </SwiperSlide>
                <div className='slider-controler'>
                <div className='swiper-button-prev slider-arrow'>
                  <ion-icon name="arrow-back-outline" />
                </div>
                <div className='swiper-button-next slider-arrow'>
                  <ion-icon name="arrow-forward-outline" />
                </div>
                <div className='swiper-pagination'></div>
                </div>
              </Swiper>
    </div>
  );
};

export default CarouselPage;
