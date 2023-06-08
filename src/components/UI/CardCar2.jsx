import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: { items: 1 },
    568: { items: 6 },
    1024: { items: 3 },
};

const handleDragStart = (e) => e.preventDefault();
// slidePrev(e: Event) => void : Go to the prev slide.
// slideNext(e: Event) => void : Go to the next slide.
// slideTo(activeIndex ?: number) => void : Go to the specified slide.




const items = [
    <div className="item" data-value="1">
        <img src="https://i.ibb.co/bzfmHSw/Cadillac-xtc.jpg" />
        <div className="card-body m-2" >
            <div tag="h5" className="card-title">
                <h5>Design & React Meetup </h5>
            </div>
            <div className=" card-text">
                <p>Join us to learn and share newbie React knowledg
                </p>
            </div>
            <a href="#" className="btn btn-primary">
                Booking
            </a>
        </div>

    </div>,
    <div className="item" data-value="2">        <img src="https://i.ibb.co/bzfmHSw/Cadillac-xtc.jpg" />
        <div className="card-body m-2" >
            <div tag="h5" className="card-title">
                <h5>Design & React Meetup </h5>
            </div>
            <div className=" card-text">
                <p>Join us to learn and share newbie React knowledg
                </p>
            </div>
            <a href="#" className="btn btn-primary">
                Booking
            </a>
        </div>

    </div>,
    <div className="item" data-value="3">        <img src="https://i.ibb.co/bzfmHSw/Cadillac-xtc.jpg" />
        <div className="card-body m-2" >
            <div tag="h5" className="card-title">
                <h5>Design & React Meetup </h5>
            </div>
            <div className=" card-text">
                <p>Join us to learn and share newbie React knowledg
                </p>
            </div>
            <a href="#" className="btn btn-primary">
                Booking
            </a>
        </div>

    </div>,
    <div className="item" data-value="4">        <img src="https://i.ibb.co/bzfmHSw/Cadillac-xtc.jpg" />
        <div className="card-body m-2" >
            <div tag="h5" className="card-title">
                <h5>Design & React Meetup </h5>
            </div>
            <div className=" card-text">
                <p>Join us to learn and share newbie React knowledg
                </p>
            </div>
            <a href="#" className="btn btn-primary">
                Booking
            </a>
        </div>

    </div>,
    <div className="item" data-value="5">        <img src="https://i.ibb.co/bzfmHSw/Cadillac-xtc.jpg" />
        <div className="card-body m-2" >
            <div tag="h5" className="card-title">
                <h5>Design & React Meetup </h5>
            </div>
            <div className=" card-text">
                <p>Join us to learn and share newbie React knowledg
                </p>
            </div>
            <a href="#" className="btn btn-primary">
                Booking
            </a>
        </div>

    </div>,
];

function CardCar2()
{
    return (
        <div>
            <h1>
                Choues Your Car
            </h1>

            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
            />

        </div>
    )
}

export default CardCar2