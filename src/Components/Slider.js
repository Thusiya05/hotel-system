import React from 'react'
// import {Link} from "react-router-dom"
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from "react-bootstrap"
import img1 from "../images/hotel.jpg"
import img2 from "../images/hotel-room.jpg"
import img3 from "../images/Double-Room.jpg"

function Slider() {
    return (
        <div className="room-hero">
            <Carousel>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src={img1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default Slider