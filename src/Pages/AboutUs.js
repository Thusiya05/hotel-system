import React from 'react'
import NavBar from "../Components/NavBar"

const AboutUs = () => {
    return (
        <>
             <div>
                <NavBar path1="/" name1="Home" path2="/rooms/" name2="Rooms" path3="/activities" name3="Activities" path4="/facilities" name4="Facilities" path5="/aboutUs" name5="About Us" pathSign="/signIn" LogName="Log In"></NavBar>
            </div>
            <div>
            Hello from About us
            </div>
        </>
        
    )
}
export default AboutUs
