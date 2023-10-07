import React from 'react'
import style from './styles/HeaderStyles.module.css'

import sneaker from '../../img/yeezy/green.png'
import arrow from '../../img/Arrow.svg'
import arrowRight from '../../img/arrowRight.svg'
import strelka from '../../img/strelka.svg'
import cart from '../../img/Cart.svg'

const HeaderInfo = () => {
  return (
    <header className={style.header__info}>
      <div className={style.sneaker__block}>
        <div className={style.sneaker}>
          <div className={style.sneaker__img_wrapper}>
            <img className={style.sneaker__img} src={sneaker} alt="yeezy" />
          </div>

          <div className={style.slider}>
            <div className={style.arrows}>
              <div className={style.block__arrow}>
                <img className={style.arrow__img} src={arrow} alt="arrow" />
                <h4 className={style.arrow__text}>Previous</h4>
              </div>
              <div className={style.block__arrow}>
              <h4 className={style.arrow__text}>Next</h4>
                <img className={style.arrow__img} src={arrowRight} alt="arrow" />
              </div>
            </div>
          </div>
        </div>

        <div className={style.sneaker__info}>
          <div className={style.bg__wrapper}>
            <div className={style.header__bg}></div>
          </div>

          <div className={style.header__content}>
            <h2 className={style.sneaker__title}>AIR JORDAN 1
            RETRO HIGH OG</h2>
            <div className={style.subblock}>
              <h4 className={style.sneaker__price}>$275</h4>
              <div className={style.size__block}>
                <h3 className={style.size__text}>Size</h3>
                <h4 className={style.size}>41</h4>
                <div className={style.strelki}>
                  <img className={style.strelka_1} src={strelka} alt="" />
                  <img src={strelka} alt="" />
                </div>
                <img className={style.cart} src={cart} alt="" />
              </div>
            </div>
            <button className={style.more__btn}>More details</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderInfo