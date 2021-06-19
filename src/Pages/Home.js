import React from 'react'
import Hero from "../Components/Hero"
import Banner from "../Components/Banner"
import Background from "../Components/Background"
import Services from "../Components/Services"
import Slider from "../Components/Slider"
import hotel from "../images/hotel.jpg"
import room1 from "../images/Double-Room.jpg"
import room2 from "../images/hotel-room.jpg"
import {Carousel} from "react-bootstrap"



export default function Home() {
    return(
        <>
        <div>
          <Background className="area"></Background>
        </div>
        <div className="slider-row">
            <div className="row">
                <div className="col-md-6">
                    <h1>Overview of Adventure Base Camp</h1>
                        <p>The most epic and wonderful place in Kithulgala is now available for guests with safety and disciplines. Are you boring of the busy lifestyle then come to see the nature with lot of adventure and facilities.</p>

                        <p>Luxury rooms, luxury Cabanas, Standard rooms, Camping Tents – all by the riverside to accommodate 150 adults comfortably
                        Large Natural Swimming Pool with safety even for kids
                        Day outing facility for 300 people
                        Excellent food , large group buffet facility
                        Weddings, functions, training , conferences facility
                        Well qualified and experienced team of instructors for outbound training and activity training</p>
                        <p>* Covid-19 Safety Protocols is followed to ensure a safe & pleasant holiday</p>
                </div>
                <div className="col-md-6">
                    <Slider img1={hotel} img2={room1} img3={room2}></Slider>
                </div>
            </div>               
        </div>

        <Services />

        <div>
        <Carousel>
                <Carousel.Item interval={3000}>
                    <Hero hero="defaultHero">
                        <Banner title="Luxurious rooms" subtitle="Choose your dream room with us." children="Our Rooms" path="/rooms"></Banner>
                    </Hero>              
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <Hero hero="activityHero">
                        <Banner title="Feel Adventure" subtitle="Choose your dream room with us." children="Our Activities" path="/activities"></Banner>
                    </Hero>    
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <Hero hero="facilityHero">
                        <Banner title="See our Facilities" subtitle="we make your day comfortable" children="Facilities" path="/facilities"></Banner>
                    </Hero>    
                </Carousel.Item>
            </Carousel>
        </div>

        </>   

    ) 
}
