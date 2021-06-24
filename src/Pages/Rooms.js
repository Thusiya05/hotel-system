import React from 'react'
import Hero from '../Components/Hero'
import Banner from "../Components/Banner"
import FeaturedRooms from '../Components/FeaturedRooms'
import RoomContainer from '../Components/RoomContainer'

const Rooms = () => {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="Featured Rooms" subtitle="Enjoy the day and feel the real freedom." children="return Home" path="/"></Banner>
            </Hero>
            <div style={{backgroundColor:'#e3f2fd'}}>

            <FeaturedRooms />
            <RoomContainer />

            </div>
           

        </>
        
    )
}
export default Rooms
