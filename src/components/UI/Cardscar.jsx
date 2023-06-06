import React, { useState } from 'react';
import "../../styles/cardcar.css";
import
{
    Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink, CarouselControl, CarouselItem, CarouselIndicators, Carousel

} from 'reactstrap';
import Slider from 'react-slick'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

function Cardscar(props)
{

    const NextArrow = ({ onClick }) =>
    {
        return (
            <div className="arrow next" onClick={onClick}  >
                <FaArrowRight />
            </div>
        )
    }



    const PrevArrow = ({ onClick }) =>
    {
        return (
            <div className="arrow prev" onClick={onClick}   >
                <FaArrowLeft />

            </div>
        )
    }

    const [imageIndex, setImageIndex] = useState(0)

    const setting = {
        infinite: true,
        lazyload: true,
        speed: 300,
        slideesToshadow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <prevArrow />,
        beforeChange: (current, next) => setImageIndex(next)


    }

    return (
        <div className="card-container1">
            <Slider {...setting}>
                {props.data.map((value, index) => (

                    <div className="card-container" key={index}>

                        <Card className="card">
                            <img className={index === imageIndex ? "slide activeSlide" : "slide"}
                                className="card-img"
                                alt="Card car"
                                src={value.image}

                            /></Card>
                        <CardBody >
                            <CardTitle tag="h5" className="card-title">
                                {value.title}
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                            </CardSubtitle>
                            <CardText className="card-description">
                                {value.description}
                            </CardText>
                            <CardLink href="cardPage" className="card-link">
                                Booking
                            </CardLink>
                        </CardBody>

                    </div >

                ))

                }
            </Slider>



        </div>

    )
}

export default Cardscar