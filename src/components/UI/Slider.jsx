import React from 'react'
import style from './styles/SliderStyles.module.css'

import arrow from '../../img/Arrow.svg'
import arrowRight from '../../img/arrowRight.svg'

import yeezy1 from '../../img/yeezy/blue.png'
import yeezy2 from '../../img/yeezy/gray.png'
import yeezy3 from '../../img/yeezy/red.png'

const Slider = () => {
  return (
    <div className={style.slider}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.block__arrow}>
            <img className={style.arrow__img} src={arrow} alt="arrow" />
            <h4 className={style.arrow__text}>Previous</h4>
          </div>
          <div className={style.sneakers}>
            <div className={style.sneaker__block}>
              <img className={style.sneaker__img} src={yeezy2} alt="" />
              <h3 className={style.sneaker__title}>NIKE SB DUNK HIGH</h3>
            </div>
            <div className={`${style.sneaker__block} ${style.active}`}>
              <img className={`${style.sneaker__img} ${style.active__img}`} src={yeezy1} alt="" />
              <h3 className={`${style.sneaker__title} ${style.active__title}`}>NIKE SB DUNK HIGH</h3>
            </div>
            <div className={style.sneaker__block}>
              <img className={style.sneaker__img} src={yeezy3} alt="" />
              <h3 className={style.sneaker__title}>NIKE SB DUNK HIGH</h3>
            </div>
          </div>
          <div className={style.block__arrow}>
          <h4 className={style.arrow__text}>Next</h4>
            <img className={style.arrow__img} src={arrowRight} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider