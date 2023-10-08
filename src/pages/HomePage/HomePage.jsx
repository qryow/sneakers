import React from 'react'
import Header from '../../components/UI/Header'
import style from '../../components/UI/styles/HeaderStyles.module.css'
import CarouselPage from '../Carousel/CarouselPage'

const HomePage = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <CarouselPage />
    </div>
  )
}

export default HomePage