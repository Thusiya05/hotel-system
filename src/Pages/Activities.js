import React from 'react'
import Banner from "../Components/Banner"
import Hero from '../Components/Hero'
import {Container,Carousel} from 'react-bootstrap'
import InfoCard from '../Components/InfoCard'
import img1 from '../images/waterRafting.jpg'
import img2 from '../images/abselling.jpg'
import img3 from '../images/Canyoneering.jpg'
import img4 from '../images/Cycling.jpg'
import img5 from '../images/rope.jpeg'
import img6 from '../images/Nature-Trails.jpg'
import img7 from '../images/Confidence-Jump.jpg'
import img8 from '../images/Rock-Sliding.jpg'
import img9 from '../images/zip-lining.jpg'
import img10 from '../images/Team-Building-1.jpg'
import img11 from '../images/Team-Building-2.jpg'
import img12 from '../images/Team-Building-3.jpg'

export default function Activities() {
    return (
        <>
        <Hero hero="activity-Hero">
            <Banner title="Feel Real Adventure" subtitle="Manage Your Day With Our Activities." children="Schedule The Day" path="/"></Banner>
        </Hero>

        <div className="activity-info">
            <containerFluid>
                <h3>Team building activities several training activities</h3>
                <p>
                    Teamwork is the ability to work together toward a common vision. The ability to direct individual accomplishments toward organizational
                    objectives. It is the fuel that allows common people to attain uncommon results. We have indoor and outdoor facilities for team building sessions.
                </p>
                    <Container>
                    <div className="row">
                        <div className="col-md-4 col-sm-4">
                                <img src={img10} alt="activity1"></img>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <img src={img11} alt="activity1"></img>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <img src={img12} alt="activity1"></img>
                            </div>    
                    </div>
                    </Container>
                    <br></br>
                    <br></br>
                    <h5>We have a team of well qualified and well experienced trainers for conducting these programs</h5>
                    <div className="row">
                        <div className="col-md-6">
                            <ul>
                                <li>Team Building</li>
                                <li>Leadership</li>
                                <li>Trust Building</li>
                                <li>Strategic Thinking</li>
                                <li>Problem Solving</li>
                                <li>Creativity & Innovation</li>
                                <li>Confidence Building</li>
                                <li>Stress Management</li>
                                <li>Goal Setting</li>
                                <li>Decision Making</li>
                                <li>Conflict Management</li>
                                <li>Time Management</li>
                                <li>Creativity & Innovation</li>
                                <li>Problem Solving</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <h6>Ground Activities/Games</h6>
                            <p>To enhance Team Building, Leadership and Time Management Skills below are 
                            the ground games which we conducted and to achieve number of objectives.</p>

                            <p>Commencement of Ground Games with physical exercises<br></br> Dividing in to Teams<br></br>Ice Breakers Games</p>
                            <p>Trust Games to achieve following objectives<br></br>Ego Breakers / Team Work / Dependence/ Trust</p>
                            <p>Games to enhance Team Spirit are as follows<br></br>Speed Rabbit<br></br>Toddy Tapper<br></br>Tar- Folding walk and Caterpillar Walk (Giant Slipper Walk)<br></br>
                            These games will help to achieve the objectives of Team Work / Dependence / Trust & Leadership</p>
                        </div>
                    </div>
                    <h3>Leisure Day Outing</h3>
                    <p>Rafting, hiking, trekking, canyoneering, rock climbing and outbound leadership training and team building are some of the activities available at the resort.</p>
                    <br></br>
                    <h6>We have day outing packages like this</h6>
                    <ul>
                        <li>Adventure Day</li>
                        <li>Adventure Overnight</li>
                        <li>Camping Overnight</li>
                        <li>Weekday Adventure day</li>
                        <li>Weekday Adventure overnight</li>
                        <li>Weekday Schools overnight Youth Leadership Program</li>
                        <li>Weekday University 2 night Youth Leadership Program</li>
                    </ul>
                    <h6>In addition, You can customize a package to suit your requirement</h6>
            </containerFluid>
        </div>

        <div className="activity-row">
           <Carousel>
                <Carousel.Item interval={3000}>
                    <Container>
                        <div className="row">
                            <div className="col-md-4 col-sm-4">
                                <InfoCard img={img1} 
                                title="White Water Rafting" 
                                text="We being the pioneers of the White Water Rafting in Sri Lanka as ‘Adventure Base Camp’ have made tremendous progress since 2000 under British White Water Rafting expert Peter Black.
                                    Beginner Level & Advance Level Training available"></InfoCard>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <InfoCard img={img2} 
                                title="Waterfall Abseiling" 
                                text="The intense and powerful feeling of the water combined with the fact that you are hanging on a rope and that there is nothing but water beneath and above, will give adrenalin
                                    push like you have never experienced before. Waterfall Abseiling is an ideal adventure activity to test your confidence."></InfoCard>
                            </div>
                            <div className="col-md-4 col-sm-4">
                            <InfoCard img={img3} 
                            title="Canyoning"
                            text="Canyoning’ is an outdoor activity that combines confidence jump, abseiling, sliding, swimming, and hiking. Adventure Base Camp is one of the premier places in the country to participate
                                in this exciting activity."></InfoCard>
                            </div>
                        </div>
                    </Container>
                    </Carousel.Item>

                    <Carousel.Item interval={3000}>
                        <Container>
                            <div className="row">
                                <div className="col-md-4 col-sm-4">
                                    <InfoCard img={img4} 
                                    title="Cycling" 
                                    text="Cycling path to Belilena Cave (6km) is a fantastic experience which will witness you interesting landscapes and pass through rural life."></InfoCard>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <InfoCard img={img5} 
                                    title="Rope Adventures" 
                                    text="This is adventurous and a thrilling activity includes"></InfoCard>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                <InfoCard img={img6} 
                                title="Nature trails with bird watching & jungle trekking"
                                text="This includes a river crossing and bird watching while you visit Makandawa forest ."></InfoCard>
                                </div>
                            </div>
                        </Container>
                    </Carousel.Item>

                    <Carousel.Item interval={3000}>
                        <Container>
                            <div className="row">
                                <div className="col-md-4 col-sm-4">
                                    <InfoCard img={img7} 
                                    title="Confidence Jumping" 
                                    text="A confidence jump with safety to beautiful natural rock pool and Swimming in the cool and clean waters of the rain forest."></InfoCard>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <InfoCard img={img8} 
                                    title="Rock sliding & Rock pool bath" 
                                    text="This is adventurous and a thrilling activity includes ."></InfoCard>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                <InfoCard img={img9} 
                                title="Zip Lining"
                                text="The two-wire zip-line stretches for more than 100 meters, slides at 50kmph and offers a bird’s-eye view of the beautiful hills of the island ."></InfoCard>
                                </div>
                            </div>
                        </Container>
                    </Carousel.Item>
            </Carousel>
        </div> 
            
    </>
    )
}

