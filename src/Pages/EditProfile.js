import React from 'react'
import {Container} from 'react-bootstrap'
import Title from '../Components/Title'
import NavBar from '../Components/NavBar'

const EditProfile=()=>{
    return(
        <>
            <div>
                <NavBar path1="/" name1="Home" path2="/rooms/" name2="Rooms" path3="/activities" name3="Activities" path4="/facilities" name4="Facilities" path5="/aboutUs" name5="About Us" pathSign="/signIn" LogName="Log In"></NavBar>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            <div style={{background:'linear-gradient(90deg, #c7c4bd 0%, #e4e2dd 50%, #faf9f8 100%'}}>
                    <br></br>
                    <br></br>
                    
            <Container style={{boxShadow:'1px 2px 6px 1px gray',width:'44rem',borderRadius:'2%',padding:'1rem'}}>
                    <div className="row">
                        <h3>Edit Profile. . .</h3>  
                    </div>
            </Container>
            </div>
           
        </>
    )
}
export default EditProfile;