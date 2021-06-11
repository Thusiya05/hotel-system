import React from 'react'
import {Carousel} from "react-bootstrap"
import img1 from "../images/hotel.jpg"
import img3 from "../images/Double-Room.jpg"
import img2 from "../images/hotel-room.jpg"

function Slider() {
    return (
            <div>
            <Carousel fade>
                <Carousel.Item>
                    <img className="d-block w-100" src={img1} alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={img2} alt="Second slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={img3} alt="Third slide"/>
                </Carousel.Item>
            </Carousel>
        </div>
        
    )
}
export default Slider