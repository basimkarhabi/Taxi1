import React from 'react';
import "../../styles/cardcar.css";
import
{
    CarouselControl, CarouselItem, CarouselIndicators, Carousel, Row, Col

} from 'reactstrap';
// import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Cardscar(props)
{

    const responsive = {
        0: { items: 1 },
        568: { items: 6 },
        1024: { items: 3 },
    };


    const handleDragStart = (e) => e.preventDefault();




    return (
        <div className=" card-container1 row m-4">

            <div className="card-container1 d-inline-flex ">
                {props.data.map((value, index) => (
                    <div className="col-md-2 p-2 d-inline" key={index} >
                        <div className="card  " >
                            <img
                                className="card-img"
                                alt="Card car"
                                src={value.image}

                            />
                            <div className="card-body m-2" >
                                <div tag="h5" className="card-title">
                                    <h5>{value.title} </h5>
                                </div>
                                <div className=" card-text">
                                    {value.description}
                                </div>
                                <a href="#" className="btn btn-primary">
                                    Booking
                                </a>
                            </div>
                        </div>

                    </div >
                ))

                }
            </div>
        </div>

    )
}

export default Cardscar