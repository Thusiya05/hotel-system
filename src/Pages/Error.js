import React from 'react'
import Banner from '../Components/Banner'
import Hero from "../Components/Hero"
import NavBar from "../Components/NavBar"

export default function Error() {
    return (
        <>
            <div>
                <NavBar path1="/" name1="Home" path2="/rooms/" name2="Rooms" path3="/activities" name3="Activities" path4="/facilities" name4="Facilities" path5="/aboutUs" name5="About Us"></NavBar>
            </div>
         <Hero hero="defaultHero">
            <Banner title="404" subtitle="This Page Is not exist" children="Return Home" path="/"></Banner>   
        </Hero>
    

        </>
    )
       
}
