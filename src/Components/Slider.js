import React from 'react'
import {Carousel} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Slider({img1,img2,img3}) {
    return (
            <Carousel controls="false" fade="true" pause="false">
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
    )
}
