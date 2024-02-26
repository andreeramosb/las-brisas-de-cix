import React, { useRef } from 'react';
import Slider from 'react-slick';
import Card from "../Car/Card";
import './SummaryCard.css';
import data from '../../data/data.json';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowRight, ArrowLeft } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const SummaryCard = ({ title, array }) => {
  // Usar el prop 'array' para determinar qué datos mostrar
  const places = data[array] || []; // Asegurarse de que places sea un array
  const nearbyPlaces = places.slice(0, 6); // Mostrar solo los primeros 5 lugares

  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="summary-card-container container pt-5 pb-5">
      <div className='header-summary-card'>
        <h2 className='pb-3'>{title}</h2>
        <div className='btn-container-arrow'>
          <span onClick={goToPrev} style={{ marginRight: "10px" }}><ArrowLeft /></span>
          <span onClick={goToNext}><ArrowRight /></span>
        </div>
      </div>
      <Slider {...settings} ref={sliderRef}>
        {nearbyPlaces.map(place => (
          <div key={place.id}>
            <Card
              title={place.title}
              description={place.description}
              location={place.location}
              image={place.image}
              district={place.district}
              province={place.province}
              direction={place.direction}
              partOfDay={place.partOfDay}
              carOrWalk={place.carOrWalk}
              time={place.time}
            />
          </div>
        ))}
      </Slider>
      {places.length > 5 && (
        <div className='d-flex justify-content-center mt-3'>
          {/* Condiciona el enlace basado en el valor del prop 'array' */}
          {array === 'nearvy' ? (
            <Link to="/lugares-cercanos" className="ver-mas-btn p-3">Ver todos los lugares</Link>
          ) : (
            <Link to="/atractivos-turisticos" className="ver-mas-btn p-3">Ver todos los lugares</Link>
          )}
        </div>
      )}
    </div>
  );
}

export default SummaryCard;
