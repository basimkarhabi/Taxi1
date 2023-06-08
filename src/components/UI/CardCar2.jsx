import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "../../styles/cardCar2.css"


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
                <h5>Business class</h5>
            </div>
            <div className=" card-text">
                <p>If you are searching for a dependable vehicle provider to or from LAX Airport, you’ve come to the proper place
                </p>
            </div>
            <a href="#" className="btn btn-primary">
                Booking
            </a>
        </div>

    </div>,
    <div className="item" data-value="2">
        <img className="marcedesImg2" src="https://i.ibb.co/Yk6gdGZ/mercedes-benz-suv-gl550-651x346-removebg-preview.jpg"
            alt="mercedes-benz-suv"
        />
        <div className="card-body m-2" >
            <div tag="h5" className="card-title">
                <h5>SUV class </h5>
            </div>
            <div className=" card-text">
                <p>We’ve been supplying non-public airport transfers for decades.</p>
            </div>
            <a href="#" className="btn btn-primary">
                Booking
            </a>
        </div>

    </div >,
    <div className="item" data-value="3">
        <img
            className="marcedesImg3"
            src="https://i.ibb.co/RYtZ6xs/mercedes-eclass-gross.jpg"
            alt="mercedes-eclass-gross" />
        <div className="card-body m-2" >
            <div tag="h5" className="card-title">
                <h5>First class</h5>
            </div>
            <div className=" card-text">
                <p> Our govt sedans, SUVs and limos are at your disposal additionally for different occasions: company events, point-to-point transfers, night-outs in the town, wine tours, you title it. Our corporation will provide you the VIP attention and non-public carrier you deserve
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
                Whats is your type Today ?
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