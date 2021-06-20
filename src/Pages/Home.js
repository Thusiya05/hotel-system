import React from 'react'
import Hero from "../Components/Hero"
import Banner from "../Components/Banner"
import Background from "../Components/Background"
import Services from "../Components/Services"
import Slider from "../Components/Slider"


export default function Home() {
    return(
        <>
        <div>
          <Background className="area"></Background>
        </div>
        <div className="container-fluid">
        <div className="row">
            <div className="col-6">
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
            <div className="col-6">
                <Slider />
            </div>
        </div>
       
           
            
        </div>
        <div>
            <Hero hero="defaultHero">
                <Banner title="Luxurious rooms" subtitle="Choose your dream room with us." children="Our Rooms" path="/rooms"></Banner>
            </Hero>         
        </div>
        <Services />
        
        </>
        
        
       

    ) 
}
