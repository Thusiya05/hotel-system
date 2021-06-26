import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import {Container,containerFluid} from 'react-bootstrap'
import NavBar from "../Components/NavBar"
import img1 from '../images/Restaurant.jpg'
import img2 from '../images/Restaurant-2.jpg'
import img3 from '../images/restaurant-3.jpg'
import img4 from '../images/functions-1.jpg'
import img5 from '../images/functions-2.jpg'
import img6 from '../images/functions-3.jpg'
import img7 from '../images/bbq-1.jpg'
import img8 from '../images/bbq-2.jpg'
import img9 from '../images/natural-swimming-pool-1.jpg'
import img10 from '../images/garden.jpg'
import img11 from '../images/Team-Building-1.jpg'
import img12 from '../images/Team-Building-2.jpg'
import img13 from '../images/Team-Building-3.jpg'

const Facilities = () => {
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
            <Hero hero="facility-Hero">
                <Banner title="Just For You" subtitle="Feel the Difference of Our Facilities" children="Return Home" path="/"></Banner>
            </Hero>
            <div className="activity-info">
                <containerFluid>
                    <h3>Restaurant</h3>
                    <Container>
                        <div className="row">
                            <div className="col-md-4 col-sm-4">
                                    <img src={img1} alt="activity1"></img>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <img src={img2} alt="activity1"></img>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <img src={img3} alt="activity1"></img>
                                </div>    
                        </div>
                    </Container>
                    <br></br>
                    <p>The river side restaurant with buffet facility can make seating capacity up to 200 people.<br></br><br></br>
                        It blessed with the view of the Kelani River & garden setting. The well experienced cooking staff will prepare your mouth watering cuisine 
                        of Sri Lankan food which we are specialized on and some of the selected menus of international food.</p>
                    <br></br>
                    <h3>Functions</h3>
                    <Container>
                        <div className="row">
                            <div className="col-md-4 col-sm-4">
                                    <img src={img4} alt="activity1"></img>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <img src={img5} alt="activity1"></img>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <img src={img6} alt="activity1"></img>
                                </div>    
                        </div>
                    </Container>
                    <br></br>
                    <p>The Reception hall with a seating capacity of 200 inside and another 100 outside will offer wedding facility and celebrate your birthday, anniversary, company day outings, seminars and many more….</p>
                    <br></br>
                    <h3>BBQ</h3>
                    <Container>
                        <div className="row">
                            <div className="col-md-4 col-sm-4">
                                    <img src={img7} alt="activity1"></img>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <img src={img8} alt="activity1"></img>
                                </div>
                                <div className="col-md-4 col-sm-4" style={{justifyContent:'center',padding:'2rem 0 0 0'}}>
                                <p>BBQ facility is available with us at a location preferred by you. It may be a river side , under a tree of our garden
                                setting or just beside your cabana or camping tent.</p>
                                </div>    
                        </div>
                    </Container>
                    <br></br><br></br>
                    <h3>Natural Swimming Pool</h3>
                    <Container>
                        <div className="row">
                            <div className="col-md-4 col-sm-4">
                                    <img src={img9} alt="activity1"></img>
                                </div>
                                <div className="col-md-8 col-sm-8" style={{padding:'2rem 0 0 0'}}>
                                    <p>There is an exclusive natural swimming pool located by the resort garden which can be used by groups, families or even kids. There is no need of a constructed swimming pool for groups, since this offers the same water conditions and safety. The most important advantage is you are always in fresh water which flows continuously thus making you always in a newly cleaned and newly water filled pool.</p>
                                </div>       
                        </div>
                    </Container>
                    <br></br>
                    <br></br>
                    <h3>Garden setting</h3>
                    <Container>
                        <div className="row">
                            <div className="col-md-4 col-sm-4">
                                    <img src={img10} alt="activity1"></img>
                                </div>
                                <div className="col-md-8 col-sm-8" style={{padding:'2rem 0 0 0'}}>
                                    <p>The thick garden setting is having plenty of bushes, flower plants, vegetables, fruits and grown up trees which are frequently visited by number of bird species. Every day, you can get up to the sounds of birds and flowing water of Kelani River.</p>
                                </div>       
                        </div>
                    </Container>
                    <br></br>
                    <br></br>
                    <h3>Facility for outbound training</h3>
                    <Container>
                        <div className="row">
                            <div className="col-md-4 col-sm-4">
                                    <img src={img11} alt="activity1"></img>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <img src={img12} alt="activity1"></img>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <img src={img13} alt="activity1"></img>
                                </div>    
                        </div>
                    </Container>
                    <br></br>
                    <p>The resort along with the environment allows ideal location for outbound training. We have a team of instructors who are well qualified and well experienced.</p>

                </containerFluid>
            </div>
        </>
        
    )
}
export default Facilities
