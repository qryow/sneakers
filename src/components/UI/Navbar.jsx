import React from 'react'
import style from './styles/NavbarStyles.module.css'

import logo from '../../img/logo.svg'
import account from '../../img/Account.svg'
import cart from '../../img/Cart.svg'

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.nav__wrapper}>
        <div className={style.menu__block}>
          <div className={style.menu__wrapper}>
            <div className={style.menu__item}>
              <a>Home</a>
            </div>
            <div className={style.menu__item}>About</div>
            <div className={style.menu__item}>Products</div>
            <div className={style.menu__item}>News</div>
          </div>
        </div>

        <div className={style.logo__wrapper}>
          <img className={style.logo} src={logo} alt="logo" />
        </div>

        <div className={style.info__block}>
          <div className={style.info__wrapper}>
            <img className={style.info__img} src={account} alt="profile" />
            <img className={style.info__img} src={cart} alt="cart" />
            <button className={style.info__btn}>Contact Us</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar