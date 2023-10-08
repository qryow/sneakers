import React, { useEffect } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import style from './Carousel.module.css';
import shoose1 from '../../img/shoose1.svg';
import shoose2 from '../../img/shoose2.svg';
import shoose3 from '../../img/shoose3.svg';

const CarouselPage = () => {
  useEffect(() => {
    const flkty = new Flickity('.js-flickity', {
      wrapAround: true,
    });

    return () => {
      flkty.destroy();
    };
  }, []);

    return (
        <div className={`${style.gallery} js-flickity`}>
            <div className={style.gallery_cell}><img src={shoose1} alt="" /></div>
            <div className={style.gallery_cell}><img src={shoose2} alt="" /></div>
            <div className={style.gallery_cell}><img src={shoose3} alt="" /></div>
        </div>
    );
};

export default CarouselPage;