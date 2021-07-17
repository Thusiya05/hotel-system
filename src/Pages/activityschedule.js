import React from 'react'
import NavBar from "../Components/NavBar"
// import Footer from '../Components/Footer'

const activityschedule = () => {
    return (
        <>
        <div>
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
        </div>
       </>
       
    )
}

export default activityschedule
