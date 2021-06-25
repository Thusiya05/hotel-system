import React from 'react'
import Hero from '../Components/Hero'
import Banner from "../Components/Banner"
import FeaturedRooms from '../Components/FeaturedRooms'
import RoomContainer from '../Components/RoomContainer'
import NavBar from "../Components/NavBar"

const Rooms = () => {
    return (
        <>

            <div>
                <NavBar path1="/" name1="Home" path2="/rooms/" name2="Rooms" path3="/activities" name3="Activities" path4="/facilities" name4="Facilities" path5="/aboutUs" name5="About Us" pathSign="/signIn" LogName="Log In"></NavBar>
            </div>
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
