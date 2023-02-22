import React from 'react'
import Slider from 'react-slick';
import {Container} from 'reactstrap';
import { Link , useNavigate } from "react-router-dom";
import "../../styles/hero-slider.css";
import BookingForm from "../../components/UI/BookingForm"

const HeroSlider = () => {
  const FormButton = ({to}) =>{
    const navigate = useNavigate();
      return (
        <button className= "my-button" onClick={()=>{navigate(`/${to}`) }}>
          Take me to {to==="" ? <BookingForm /> : to}

        </button>
        
        )
  }

  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return <Slider  {...settings} className="hero__slider">
     <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-4">For  $150 Per Day</h4>
            <h2 className="text-light mb-3">Just 150$</h2>
            <Link to = {"/BookingForm"}  className="btn reserve__btn mt-4">Book Now</Link>            
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content ">
          <h4 className="text-light mb-4">For  $150 Per Day</h4>
            <h2 className="text-light mb-3">Just 150$</h2>
            <Link to = {"/BookingForm"}  className="btn reserve__btn mt-4">Book Now</Link>            

          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content ">
          <h4 className="text-light mb-4">For  $150 Per Day</h4>
            <h2 className="text-light mb-3">Just 150$</h2>
            <Link to = {"/BookingForm"}  className="btn reserve__btn mt-4">Book Now</Link>            

          </div>
        </Container>
      </div>
  </Slider>
}

export default HeroSlider