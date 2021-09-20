import React,{useState, useEffect} from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import {Container,Form,Col,Button, Table, Modal, Row} from 'react-bootstrap'
import axios from 'axios';
import Tippy from '@tippyjs/react';
import { FaInfo } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';

function EditBooking(props) {
    const [data, setData] = useState({
        bookingID:"",
        meal: "Full-Board",
        checkInDate:"",
        checkOutDate:"",
        roomTypes:"",
        custName:"",
        realBookID:"",
    })
    
    function submitt(e){
        e.preventDefault();
        // console.log(data);
        axios.post(`http://localhost:3030/customer/booking/updatebooking/${props.bookingid}`,data)
        .then(res=>{
             props.setadded(!props.added);
             props.onHide();
             toast.success('✅ '+' '+ res.data);
        })
        .catch(err => {
            toast.error('❌ '+' '+ err.response.data);
            // props.onHide();
        })
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        // console.log(newdata)
    }

    useEffect(() => {
        axios.get(`http://localhost:3030/customer/booking/viewbookingbyid/${props.bookingid}`)
        .then((res)=>{
            // console.log(res.data);  
            setData(res.data);
        })
    }, [props.added])
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update User Profile
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                        <Form onSubmit={(e) => submitt(e)}>
                                <Form.Row >
                                    <Form.Group as={Col} controlId="realBookID">
                                    <Form.Label style={{textAlign:'center'}}><h6>Booking ID</h6></Form.Label>
                                    <Form.Control value={data.realBookID} id="realBookID" type="text" readOnly/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="custName">
                                    <Form.Label style={{textAlign:'center'}}><h6>Customer Name</h6></Form.Label>
                                    <Form.Control value={data.custName} type="text" readOnly/>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="checkInDate">
                                    <Form.Label style={{textAlign:'center'}}><h6>Check In Date</h6></Form.Label>
                                    <Form.Control value={data.checkInDate} type="date" readOnly/>
                                    </Form.Group>
                                   
                                    <Form.Group as={Col} controlId="checkOutDate">
                                    <Form.Label style={{textAlign:'center'}}><h6>Check Out Date</h6></Form.Label>
                                    <Form.Control value={data.checkOutDate} type="date" readOnly/>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="roomTypes">
                                    <Form.Label style={{textAlign:'center'}}><h6>Room Type</h6></Form.Label>
                                    <Form.Control value={data.roomTypes} type="text" readOnly/>
                                    </Form.Group> 
                                    <Form.Group as={Col} controlId="meal">
                                    <Form.Label style={{textAlign:'center'}}><h6>Meal</h6></Form.Label>
                                    <Form.Control onChange={(e)=>handle(e)} as="select" className="my-1 mr-sm-2" value={data.meal} custom>
                                                <option value="Full-Board">Full-Board</option>
                                                <option value="Half-Board">Half-Board</option>
                                    </Form.Control>
                                    </Form.Group>
                                </Form.Row>
                                
                                <div style={{textAlign:'center'}}>
                                    <Button type="submit" variant="info">Update</Button> <Button onClick={props.onHide} variant="danger">Cancel</Button>
                                </div>
                                
                            </Form>
        </Modal.Body>
        <Modal.Footer>
            Adventure Base Camp, Kitulgala.
        </Modal.Footer>
      </Modal>
    );
  }


const MyBookings = ()=>{

    const [show,setShow]=useState(false)
    const [added, setadded] = useState(true);
    const [bookingid,setBookingid]=useState()
    const [viewbooking,setViewbooking]=useState([])
    const[viewBill,setViewBill]=useState(false)

    const[outdoorActivitySchedules, setOutdoorActivitySchedules] = useState([]);

    function Update(id){
        // console.log(id)
        setadded(!added);
        setShow(true);
        setBookingid(id);
    }

    function Delete(id){
        axios.delete(`http://localhost:3030/customer/booking/deletebooking/${id}`)
        .then(res =>{
            toast.success('✅ '+' '+ res.data);
            setadded(!added);
        })
    }

    const getOutdoorActivitySchedules = () =>{
        let url = "http://localhost:3030/outdoor-activity-schedules/customer-schedules";
        let body = {
            "customerId" : localStorage.getItem("userId")
        }
        axios.post(url, body).then((response)=>{
            console.log(response.data);
            setOutdoorActivitySchedules(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    }

    const deleteOutdoorActivitySchedule=(outdoorActivityScheduleId)=>{
        console.log(outdoorActivityScheduleId);
        let userId = localStorage.getItem('userId');
        let url = `http://localhost:3030/outdoor-activity-schedules/${userId}/${outdoorActivityScheduleId}`;
        axios.delete(url).then((res)=>{
            console.log(res);
            getOutdoorActivitySchedules();
        }).catch((error)=>{
            console.log(error);
        })
    }

    function getTimeSlot(timeString){
        switch(timeString) {
            case "EIGHT_AM_TO_TEN_AM":
                return '8.00AM - 10.00AM';
            case "TEN_AM_TO_TWELVE_PM":
                return '10.00AM - 12.00PM';
            case "TWO_PM_TO_FOUR_PM":
                return '2.00PM - 4.00PM';
            default:
                return '4.00PM - 6.PM';
        }
    }

    useEffect(() => {

        getOutdoorActivitySchedules();

        axios.get(`http://localhost:3030/customer/booking/viewbookings/${localStorage.getItem('userId')}`)
        .then(res => {
            setViewbooking(res.data)
            // console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[added])

    return(
        <>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        /> 
             <div>
                <NavBar path1="/" name1="Home" path2="/rooms/" name2="Rooms" path3="/activities" name3="Activities" path4="/facilities" name4="Facilities" path5="/aboutUs" name5="About Us" pathSign="/signIn" LogName="Log In"></NavBar>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Container>
            <EditBooking 
                    show={show}
                    onHide={() => setShow(false)}
                    added={added} 
                    bookingid={bookingid}
                    setadded={setadded}
            />  
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <Container style={{textAlign:'center',background:'linear-gradient(90deg, #c7c4bd 0%, #e4e2dd 50%, #faf9f8 100%',boxShadow:'1px 2px 6px 1px gray',padding:'1rem',borderRadius:'2%'}}>
                        <div className="row" style={{justifyContent:'center'}}>
                            <h5>Room Bookings</h5>
                        </div>
                            <br></br>
                          <div>  
                            {viewbooking.map((test) => (
                                <div key="{test.bookingID}">
                                    <div style={{textAlign:'left'}} className="row">
                                        <div className="col-md-7">
                                                    <h6>Booking ID : {test.realBookID}</h6>
                                                    <h6>Customer Name : {test.custName}</h6>
                                                    {/* <h6>Room Type : {test.roomTypes}</h6> */}
                                                    <h6>Meal : {test.meal}</h6>
                                        <hr></hr>
                                        </div> 
                                                    
                                        <div className="col-md-5" style={{justifyContent:'center',textAlign:'center'}}>
                                            <Button onClick={()=>Update(test.bookingID)} type="submit" variant="info" style={{width:'5rem'}}>Edit</Button> <Button onClick={()=>Delete(test.bookingID)} type="submit" variant="danger">Remove</Button>
                                        </div>
                                    </div>
                                </div>
                                ))}

                                </div>
                        </Container>
                       
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <Container style={{textAlign:'center',background:'linear-gradient(90deg, #c7c4bd 0%, #e4e2dd 50%, #faf9f8 100%',height:'25rem',boxShadow:'1px 2px 6px 1px gray',padding:'1rem'}}>
                            <h5>Activity Bookings</h5>
                            {outdoorActivitySchedules.map((schedule,index)=>{
                                return(
                                    <div key={index}>
                                    <div style={{textAlign:'left'}} className="row">
                                        <div className="col-md-7">
                                                    <h6>{index+1}</h6>
                                                    <h6>Activity Name : {schedule.outdoorActivity.outdoorActivityName}</h6>
                                                    <h6>Schedule Date : {schedule.scheduledDate}</h6>
                                                    {/* <h6>Room Type : {test.roomTypes}</h6> */}
                                                    <h6>Schedule Time : <Button variant="info">{getTimeSlot(schedule.scheduledTimeSlot)}</Button></h6>
                                        <hr></hr>
                                        </div> 
                                                    
                                        <div className="col-md-5" style={{justifyContent:'center',textAlign:'center'}}>
                                            <Button onClick={()=>deleteOutdoorActivitySchedule(schedule.outdoorActivityScheduleId)} type="submit" variant="danger">Remove</Button>
                                        </div>
                                    </div>
                                </div>
                                );
                            })}
                        </Container>
                    </div>
                </div>
            </Container>
                                
                                <div className="center" style={{justifyContent:'center',textAlign:'center'}}>
                                <Tippy content="You must check-out from the hotel">
                                    <Button onClick={()=>setViewBill(true)} type="submit" variant="info" style={{width:'10rem'}}>View Bill
                                    </Button> 
                                </Tippy>
                                    
                                </div>

                                <div><ShowBill
                                        show={viewBill}
                                        onHide={()=>setViewBill(false)}
                                    />
                                </div>
                                <br></br>
            <div>
                <Footer />
            </div>
        </>
    )
}
function ShowBill(props){
    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
      <Modal.Header closeButton style={{backgroundColor:'lightgray'}}>
        <Modal.Title id="contained-modal-title-vcenter">
          Charges
        </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Container>
                <Row>
                    <Col sm={6}>
                        <h6>Room Charge </h6>
                        <h6>Activity Charges </h6>
                        <h6>Tax</h6>
                        <hr></hr>
                        <h6>Total</h6>
                    </Col>
                    <Col sm={6}>
                        <h6>13 500 </h6>
                        <h6>5000 </h6>
                        <h6>1000</h6>
                        <hr></hr>
                        <h6>19500</h6>
                    </Col>
                  </Row>
                  <div className="center" 
                            style={{justifyContent:'center',textAlign:'center'}}>
                                    <Button href="./Payment" 
                                    type="submit" 
                                    variant="info" 
                                    style={{width:'10rem'} }>
                                        Pay Now</Button> 
                  </div>

                </Container>
              </Modal.Body>
              <Modal.Footer style={{backgroundColor:'lightgray'}}>
                  Adventure Base Camp, Kitulgala.
              </Modal.Footer>
      </Modal>

    );
}
export default MyBookings;