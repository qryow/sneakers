import React from 'react'
import style from './styles/HeaderStyles.module.css'
import Navbar from './Navbar'
import HeaderInfo from './HeaderInfo'
import Slider from './Slider'

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <Navbar />
        <HeaderInfo />
      </div>
      <Slider />
    </header>
  )
}

export default Header