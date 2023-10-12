//import React, { useEffect } from 'react'
//import style from './styles/SliderStyles.module.css'
//import { useSelector, useDispatch } from 'react-redux'
//import { GetSneakers } from '../../store/Sneakers/sneakersActions'

//import arrow from '../../img/Arrow.svg'
//import arrowRight from '../../img/arrowRight.svg'

//import yeezy1 from '../../img/yeezy/blue.png'
//import yeezy2 from '../../img/yeezy/gray.png'
//import yeezy3 from '../../img/yeezy/red.png'

//const Slider = () => {
//  const {sneakers, loading} = useSelector(state => state.sneakers)
//  console.log(sneakers);

//  const dispatch = useDispatch()

//  useEffect(() => {
//    dispatch(GetSneakers())
//  }, [])

//  return (
//    <div className={style.slider}>
//      <div className={style.container}>
//        <div className={style.content}>
//          <div className={style.block__arrow}>
//            <img className={style.arrow__img} src={arrow} alt="arrow" />
//            <h4 className={style.arrow__text}>Previous</h4>
//          </div>
          
//            {loading ? (
//              <h3>Loading...</h3>
//            ) : (
//              <div className={style.sneakers}>
//                {sneakers.map(sneaker => (
//                  <div className={style.sneaker__block} key={sneaker.id}>
//                    <img className={style.sneaker__img} src={sneaker.img} alt="" />
//                    <h3 className={style.sneaker__title}> {sneaker.name} </h3>
//                  </div>
//                ))}
//              </div>
//            )}

//            {/*! active */}
//            {/*<div className={`${style.sneaker__block} ${style.active}`}>
//              <img className={`${style.sneaker__img} ${style.active__img}`} src={yeezy1} alt="" />
//              <h3 className={`${style.sneaker__title} ${style.active__title}`}>NIKE SB DUNK HIGH</h3>
//            </div>*/}

//          <div className={style.block__arrow}>
//          <h4 className={style.arrow__text}>Next</h4>
//            <img className={style.arrow__img} src={arrowRight} alt="arrow" />
//          </div>
//        </div>
//      </div>
//    </div>
//  )
//}

//export default Slider



import React, { useEffect } from 'react'
import style from './styles/SliderStyles.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { GetSneakers } from '../../store/Sneakers/sneakersActions'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination';
import 'swiper/css/navigation'

import arrow from '../../img/Arrow.svg'
import arrowRight from '../../img/arrowRight.svg'

import yeezy1 from '../../img/yeezy/blue.png'
import yeezy2 from '../../img/yeezy/gray.png'
import yeezy3 from '../../img/yeezy/red.png'

const Slider = () => {
  const {sneakers, loading} = useSelector(state => state.sneakers)
  console.log(sneakers);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetSneakers())
  }, [])

  return (
    <div className={style.slider}>
      <div className={style.container}>
        <div className={style.content}>
            {loading ? (
              <h3>Loading...</h3>
            ) : (
              <Swiper
                effect={'coverflow'}
                grabCursor={ true }
                centeredSlides={ true }
                loop={ true }
                slidesPerView={2}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={ { el: '.swiper-pagination', clickable: true }}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                  clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}

                
                className={`${style.sneakers}`}
              >
                {sneakers.map(sneaker => (
                    <SwiperSlide className={style.sneaker__block} key={sneaker.id}>
                      <img className={style.sneaker__img} src={sneaker.img} alt="" />
                      <h3 className={style.sneaker__title}> {sneaker.name} </h3>
                    </SwiperSlide>
                ))}
                <div className={style.slider__control}>
                  <img src={arrow} className='swiper-button-prev slider-arrow' alt="" />
                </div>
                <div className='slider-controller'>
                  <img src={arrowRight} className='swiper-button-next slider-arrow' alt="" />
                </div>
              </Swiper>
            )}

            {/*! active */}
            {/*<div className={`${style.sneaker__block} ${style.active}`}>
              <img className={`${style.sneaker__img} ${style.active__img}`} src={yeezy1} alt="" />
              <h3 className={`${style.sneaker__title} ${style.active__title}`}>NIKE SB DUNK HIGH</h3>
            </div>*/}
        </div>
      </div>
    </div>
  )
}

export default Slider