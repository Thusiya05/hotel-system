import React from 'react'
import Hero from '../Components/Hero'
import Banner from "../Components/Banner"
import FeaturedRooms from '../Components/FeaturedRooms'
import RoomContainer from '../Components/RoomContainer'
import NavBar from "../Components/NavBar"
import Footer from '../Components/Footer'


const Rooms = () => {

    
  
    
    return (
        <>

            <NavBar
                path1="/" name1="Home"
                path2="/rooms/" name2="Rooms" 
                path3="/activities" name3="Activities"
                path4="/facilities" name4="Facilities" 
                path5="/aboutUs" name5="About Us" 
                pathSign="/signIn" LogName="Log In">    
            </NavBar>
            <br></br>
            <br></br>
            <br></br>        
            <Hero hero="roomsHero">
                <Banner title="Featured Rooms" subtitle="Enjoy the day and feel the real freedom." children="return Home" path="/"></Banner>
            </Hero>
            <div className="roomCover">

            <FeaturedRooms />
            <RoomContainer />
           

            </div>
            <div>
                <Footer />
            </div>
           

        </>
        
    )
}
export default Rooms
