import React, { useEffect, useState } from 'react'
import NavBar from "../Components/NavBar"
import Footer from '../Components/Footer'
import { Container,Form,Col,Row,Table,Button,Carousel } from 'react-bootstrap'
import img1 from '../images/waterRafting.jpg'
import img2 from '../images/abselling.jpg'
import img3 from '../images/Canyoneering.jpg'
import img4 from '../images/Cycling.jpg'
import img5 from '../images/rope.jpeg'
import img6 from '../images/Nature-Trails.jpg'
import img7 from '../images/Confidence-Jump.jpg'
import img8 from '../images/Rock-Sliding.jpg'
import img9 from '../images/zip-lining.jpg'
import InfoCard from '../Components/InfoCard'
import Tippy from '@tippyjs/react';
import axios from 'axios'

const Activityschedule = () => {

    const [scheduleDate,setScheduleDate] = useState(null);
    const [avilableSchedules, setAvailableSchedules] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTimeslot, setSelectedTimeSlot] = useState(null);
    const [selcetdActivity, setSelectedActivity] = useState(null);

    const url = "http://localhost:3030/outdoor-activity-schedules/available";

    const getAvailableSchedules= (sDate)=>{
        // add a loader
        if(sDate==null){
            const temp = new Date();
            sDate = temp.toISOString().split('T')[0]
        }
        let requestBody = {
            "scheduledDate" : sDate
        }
        let headers = {
            "Content-Type" : "application/json"
        }
        axios.post(url, requestBody, headers).then(response=>{
            let schedules = response.data;
            setAvailableSchedules(schedules);
            setLoaded(true);
        }).catch((error)=>{
            console.log(error);
        })
    }

    function getTimeSlot(timeString){
        switch(timeString) {
            case "EIGHT_AM_TO_TEN_AM":
                return 0;
            case "TEN_AM_TO_TWELVE_PM":
                return 1;
            case "TWO_PM_TO_FOUR_PM":
                return 2;
            default:
                return 3;
        }
    }

    const createOutdoorActivitySchedule=(outdoorActivityId, timeString)=>{
        let timeSlot = getTimeSlot(timeString);
        let url = "http://localhost:3030/outdoor-activity-schedules";
        let customerId = localStorage.getItem('userId');
        let requestBody = {
            "customerId" : customerId,
            "outdoorActivityId": outdoorActivityId,
            "scheduleTimeSlot": timeSlot,
            "scheduledDate": scheduleDate
        }
        let headers = {
            "Content-Type" : "application/json"
        }
        axios.post(url,requestBody,headers).then((response)=>{

            setSelectedActivity(outdoorActivityId);
            setSelectedDate(scheduleDate);
            setSelectedTimeSlot(timeSlot);

            getAvailableSchedules(scheduleDate);
        }).catch((error)=>{
            console.log(error);
        });
    }

    function isTimeslotScheduled(currentActivityId,currentDate,currentTimeSlot){
        let cts = getTimeSlot(currentTimeSlot);
        if(currentActivityId == selcetdActivity && currentDate == selectedDate && cts == selectedTimeslot){
            return true;
        }
        return false;
    }


    useEffect(()=>{
        getAvailableSchedules(scheduleDate);
    },[scheduleDate]);

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
        <div className="activity-row" style={{height:'28rem'}}>
           <Carousel>
                <Carousel.Item interval={3000} style={{height:'27rem'}}>
                    <Container >
                        <div className="row">
                            <div className="col-md-4 col-sm-4" >
                                <InfoCard img={img1} 
                                title="White Water Rafting" 
                                ></InfoCard>
                            </div>
                            <div className="col-md-4 col-sm-4" >
                                <InfoCard img={img2} 
                                title="Waterfall Abseiling" 
                                ></InfoCard>
                            </div>
                            <div className="col-md-4 col-sm-4" >
                            <InfoCard img={img3} 
                            title="Canyoning"
                            ></InfoCard>
                            </div>
                        </div>
                    </Container>
                    </Carousel.Item>

                    <Carousel.Item interval={3000} style={{height:'27rem'}}>
                        <Container>
                            <div className="row">
                                <div className="col-md-4 col-sm-4">
                                    <InfoCard img={img4} 
                                    title="Cycling" 
                                    ></InfoCard>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <InfoCard img={img5} 
                                    title="Rope Adventures" 
                                    ></InfoCard>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                <InfoCard img={img6} 
                                title="Nature trails with bird watching & jungle trekking"
                                ></InfoCard>
                                </div>
                            </div>
                        </Container>
                    </Carousel.Item>

                    <Carousel.Item interval={3000} style={{height:'27rem'}}>
                        <Container>
                            <div className="row" >
                                <div className="col-md-4 col-sm-4" >
                                    <InfoCard img={img7} 
                                    title="Confidence Jumping" 
                                    ></InfoCard>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <InfoCard img={img8} 
                                    title="Rock sliding & Rock pool bath" 
                                    ></InfoCard>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                <InfoCard img={img9} 
                                title="Zip Lining"
                                ></InfoCard>
                                </div>
                            </div>
                        </Container>
                    </Carousel.Item>
            </Carousel>
        </div>
        <div>
        <br></br>
                    <br></br>
                    
            <Container style={{boxShadow:'1px 2px 6px 1px gray',width:'80rem',borderRadius:'2%',padding:'1rem',backgroundColor:'white'}}>
                    
                        <h3 style={{textAlign:'center'}}>Outdoor Activities Scheduling</h3>
                        <br></br>
                        <Form>
                              <Form.Row>
                                    <Col sm={6}>
                                        <Form.Group as={Col} controlId="formGridFirstName">
                                        <Form.Label style={{textAlign:'center'}}><h6>Select the Date</h6></Form.Label>
                                        <Form.Control value={scheduleDate} type="date" min={new Date().toISOString().split("T")[0]} required onChange={(e)=>setScheduleDate (e.target.value)}/>
                                        </Form.Group>
                                    </Col>
                               </Form.Row>
                        </Form> 
                        {loaded && <Table striped bordered hover size="sm" responsive id="CheckInTable">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Activity Name</th>
                                        <th style={{textAlign:'center'}}>8.00am-10.00am</th>
                                        <th style={{textAlign:'center'}}>10.00am-12.00pm</th>
                                        <th style={{textAlign:'center'}}>2.00pm-4.00pm</th>
                                        <th style={{textAlign:'center'}}>4.00pm-6.00pm</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {avilableSchedules.map((item,index)=>{
                                        return(
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td>{item.outdoorActivity.outdoorActivityName}</td>
                                                <td style={{textAlign:'center'}}>
                                                    <Button variant="dark" type='submit' disabled={item.availableSlots.EIGHT_AM_TO_TEN_AM == 0 } onClick={()=>createOutdoorActivitySchedule(item.outdoorActivity.outdoorActivityId,"EIGHT_AM_TO_TEN_AM")}>Available {item.availableSlots.EIGHT_AM_TO_TEN_AM}</Button>   
                                                </td>
                                                <td style={{textAlign:'center'}}>
                                                    <Button variant="dark" type='submit' disabled={item.availableSlots.TEN_AM_TO_TWELVE_PM == 0 } onClick={()=>createOutdoorActivitySchedule(item.outdoorActivity.outdoorActivityId,"TEN_AM_TO_TWELVE_PM")}>Available {item.availableSlots.TEN_AM_TO_TWELVE_PM}</Button>
                                                </td>
                                                <td style={{textAlign:'center'}}>
                                                    <Button variant="dark" type='submit' disabled={item.availableSlots.TWO_PM_TO_FOUR_PM == 0 } onClick={()=>createOutdoorActivitySchedule(item.outdoorActivity.outdoorActivityId,"TWO_PM_TO_FOUR_PM")}>Available {item.availableSlots.TWO_PM_TO_FOUR_PM}</Button>
                                                </td>
                                                <td style={{textAlign:'center'}}>
                                                    <Button variant="dark" type='submit' disabled={item.availableSlots.FOUR_PM_TO_SIX_PM == 0 } onClick={()=>createOutdoorActivitySchedule(item.outdoorActivity.outdoorActivityId,"FOUR_PM_TO_SIX_PM")}>Available {item.availableSlots.FOUR_PM_TO_SIX_PM}</Button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                    {/* <tr>
                                        <td>1</td>
                                        <td>Water Rafting</td>
                                        <td style={{textAlign:'center'}}>
                                            <Button variant="dark" type='submit'>8.00am-10.00am</Button> <Button variant="dark" type='submit'>10.00am-12.00pm</Button> <Button variant="dark" type='submit'>2.00pm-4.00pm</Button> <Button variant="dark" type='submit' disabled>4.00pm-6.00pm</Button>
                                        </td>  
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Confidence Jump</td>
                                        <td style={{textAlign:'center'}}>
                                            <Button variant="dark" type='submit' disabled>8.00am-10.00am</Button> <Button variant="dark" type='submit'>10.00am-12.00pm</Button> <Button variant="dark" type='submit'>2.00pm-4.00pm</Button> <Button variant="dark" type='submit' disabled>4.00pm-6.00pm</Button>
                                        </td>  
                                    </tr> 
                                    <tr>
                                        <td>3</td>
                                        <td>Rope Adventure</td>
                                        <td style={{textAlign:'center'}}>
                                            <Button variant="dark" type='submit'>8.00am-10.00am</Button> <Button variant="dark" type='submit'>10.00am-12.00pm</Button> <Button variant="dark" type='submit'>2.00pm-4.00pm</Button> <Button variant="dark" type='submit' disabled>4.00pm-6.00pm</Button>
                                        </td>  
                                    </tr> 
                                    <tr>
                                        <td>4</td>
                                        <td>Nature trails with bird watching & jungle trekking</td>
                                        <td style={{textAlign:'center'}}>
                                            <Button variant="dark" type='submit'>8.00am-10.00am</Button> <Button variant="dark" type='submit' disabled>10.00am-12.00pm</Button> <Button variant="dark" type='submit' disabled>2.00pm-4.00pm</Button> <Button variant="dark" type='submit'>4.00pm-6.00pm</Button>
                                        </td>  
                                    </tr> 
                                    <tr>
                                        <td>5</td>
                                        <td>Waterfall Abseiling</td>
                                        <td style={{textAlign:'center'}}>
                                            <Button variant="dark" type='submit' disabled>8.00am-10.00am</Button> <Button variant="dark" type='submit'>10.00am-12.00pm</Button> <Button variant="dark" type='submit'>2.00pm-4.00pm</Button> <Button variant="dark" type='submit'>4.00pm-6.00pm</Button>
                                        </td>  
                                    </tr> 
                                    <tr>
                                        <td>6</td>
                                        <td>Rock sliding & Rock pool bath</td>
                                        <td style={{textAlign:'center'}}>
                                            <Button variant="dark" type='submit' disabled>8.00am-10.00am</Button> <Button variant="dark" type='submit'>10.00am-12.00pm</Button> <Button variant="dark" type='submit' >2.00pm-4.00pm</Button> <Button variant="dark" type='submit'>4.00pm-6.00pm</Button>
                                        </td>  
                                    </tr> 
                                    <tr>
                                        <td>7</td>
                                        <td>Cycling</td>
                                        <td style={{textAlign:'center'}}>
                                            <Button variant="dark" type='submit' >8.00am-10.00am</Button> <Button variant="dark" type='submit' disabled>10.00am-12.00pm</Button> <Button variant="dark" type='submit' disabled>2.00pm-4.00pm</Button> <Button variant="dark" type='submit'>4.00pm-6.00pm</Button>
                                        </td>  
                                    </tr>   */}
                                </tbody>
                             </Table> }
                             <br></br>
                            {/* <div style={{textAlign:'center'}}>
                            <Tippy content="You must Log-in first">
                                <Button type="submit" variant="info">Submit</Button></Tippy> <Button type="cancel" variant="danger">Cancel</Button>
                            
                            </div> */}
                                        
                    
            </Container>
            <br></br>
            <br></br>
        </div>
        <div>
                <Footer />
        </div>
       </>
       
    )
}

export default Activityschedule
