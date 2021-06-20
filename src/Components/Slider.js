import React from 'react'
// import {Link} from "react-router-dom"
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from "react-bootstrap"
import img1 from "../images/hotel.jpg"
// import img2 from "../images/hotel-room.jpg"
import img3 from "../images/Double-Room.jpg"

function Slider() {
    return (
        // <div className="slider-background">
            <div>
            <Carousel fade>
            <Carousel.Item>
                <img className="d-block w-100" src={img1} alt="First slide"/>
            </Carousel.Item>
            {/* <Carousel.Item>
                <img className="d-block w-100" src={img2} alt="Second slide"/>
            </Carousel.Item> */}
            <Carousel.Item>
                <img className="d-block w-100" src={img3} alt="Third slide"/>
            </Carousel.Item>
            </Carousel>
        </div>
        // </div>
        
    )
}
export default Slider