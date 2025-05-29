import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import { useNavigate } from 'react-router-dom';

import Slider from "react-slick";
import Card from "./card";  

function Carousel({cardsData}) {
  const navigate = useNavigate();
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1134,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }
    ]
  };

  const handleCardClick = (card) => {
    navigate("/details", { state: { ...card } });
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {cardsData.map((cards, index) => (
          <div key={index} className="flex justify-center">
            <Card
              {...cards} // Pasa todos los atributos de la tarjeta al componente Card
              onClick={() => handleCardClick(cards)}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
