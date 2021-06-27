import React from 'react'
import NavBar from "../Components/NavBar"
import Hero from "../Components/Hero"
import Banner from '../Components/Banner'
import {Container,containerFluid} from 'react-bootstrap'
import Map from '../Components/Map'
import img1 from '../images/base-camp-1.jpg'
import img2 from '../images/base-camp-2.jpg'
import img3 from '../images/functions-3.jpg'
import img4 from '../images/group.jpg'
import {FaPhoneAlt,FaEnvelope,FaMapMarkerAlt} from 'react-icons/fa'


const AboutUs = () => {
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
            </div>
            <Hero hero="aboutus">
                <Banner title="We Guide You" subtitle="Know about us and Get touch with us." children="return Home" path="/"></Banner>
            </Hero>
            <div className="activity-info">
                <containerFluid>
                    <h3>Adventure Base Camp - Kitulgala</h3>
                    <p>Located in a sleepy village just 2.5 km from Kitulgala , Adventure Base Camp is a real hideout to enjoy the essence of 
                    nature with rare rafting experience. It is situated bordering the beautiful Kelani Ganga. This amazing place is considered 
                    one of the best hide-outs in the Kithulgala jungle for adventure and nature lovers. It is an exclusive resort offering the 
                    ultimate in adventure activity, relaxation and seclusion from the hustle and bustle of city life.</p>
                    <Container>
                        <div className="row">
                            <div className="col-md-4 col-sm-4">
                                    <img src={img1} alt="activity1"></img>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <img src={img2} alt="activity1"></img>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <img src={img3} alt="activity1" style={{height:'15rem'}}></img>
                                </div>    
                        </div>
                        
                        <br></br>
                        <div className="row">
                            <div className="col-md-8 col-sm-8" style={{padding:'3rem 0 0 0'}}>
                                <p>Mr.Upul Nayanajith , who is an expert started this in year 2000, as the very first professional rafting center in Sri Lanka,
                                    ‘Adventure Base Camp’ grew in to one of the biggest adventure, leisure and outward bound training centers in Kithulgala.</p>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <img src={img4} alt="activity1"></img>
                                </div>
                            
                        </div>
                    </Container>
                    <br></br>
                    <br></br>
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div style={{boxShadow:'1px 2px 6px 1px gray', width:'30rem',alignItems:'center'}}>
                                <h3 style={{textAlign:'center',padding:'2rem 0 2rem 0'}}>Get touch with us</h3>
                                <br></br>
                                    <Container>
                                        <div className="contacts" style={{alignItems:'center'}}>          
                                            <p style={{textAlign:'center',fontSize:'1.5rem'}}><FaPhoneAlt size={50} color={'goldenrod'}/><br></br> <br></br>071 736 5756</p>
                                            <br></br>
                                            <p style={{textAlign:'center',fontSize:'1.5rem'}}><FaEnvelope size={50} color={'goldenrod'}/> <br></br>darshanaravindu9196@gmail.com</p>
                                            <br></br>
                                            <p></p>
                                        </div>
                                    </Container>   
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div style={{boxShadow:'1px 2px 6px 1px gray', width:'30rem',height:'27rem',alignItems:'center'}}>
                                <h3 style={{textAlign:'center',padding:'2rem 0 2rem 0'}}>Our Location</h3>
                                <p style={{textAlign:'center'}}><FaMapMarkerAlt size={35} color={'goldenrod'}/></p>
                                <br></br>
                                <Map />
                            </div>
                        </div>
                    </div>
                       
                </containerFluid>
            </div>

        </>
        
    )
}
export default AboutUs
