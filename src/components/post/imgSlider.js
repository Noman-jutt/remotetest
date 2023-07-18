import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderImg from "../../assets/slider.jpg"
import Slider from 'react-slick';

const ImgSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='img_wrapper_main'>
      <Slider {...settings}>
        {[1, 2, 3, 4].map((data) => (
          <div className='img_wrappper'>
            <img src={SliderImg} alt='slides' />
          </div>

        ))}
      </Slider>
    </div>
  );
};

export default ImgSlider