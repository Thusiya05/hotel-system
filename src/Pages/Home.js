import React from 'react'
import Hero from "../Components/Hero"
import Banner from "../Components/Banner"
import Background from "../Components/Background"


export default function Home() {
    return(
        <>
        <div>
          <Background className="area"></Background>
        </div>
      
        <div>
            <Hero hero="defaultHero">
                <Banner title="Luxurious rooms" subtitle="Choose your dream room with us." children="Our Rooms" path="/rooms"></Banner>
            </Hero>         
        </div>
        
        </>
        
        
       

    ) 
}
