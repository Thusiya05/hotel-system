import React,{ useState } from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import {Container,Button,Col,Modal,Row,} from 'react-bootstrap'



const MyBookings = ()=>{
    const[viewBill,setViewBill]=useState(false)
    return(
        <>
             <div>
                <NavBar path1="/" name1="Home" path2="/rooms/" name2="Rooms" path3="/activities" name3="Activities" path4="/facilities" name4="Facilities" path5="/aboutUs" name5="About Us" pathSign="/signIn" LogName="Log In"></NavBar>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Container>
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <Container style={{textAlign:'center',background:'linear-gradient(90deg, #c7c4bd 0%, #e4e2dd 50%, #faf9f8 100%',height:'25rem',boxShadow:'1px 2px 6px 1px gray',padding:'1rem',borderRadius:'2%'}}>
                        <div className="row" style={{justifyContent:'center'}}>
                            <h5>Room Bookings</h5>
                        </div>
                           
                            <br></br>
                            <div style={{textAlign:'left'}} className="row">
                                <div className="col-md-7">
                                    <h6>Room Type: Double Room</h6>
                                    <h6>No Of Rooms: 2</h6>
                                    <h6>Full Board</h6>
                                    <hr></hr>
                                </div> 
                                <div className="col-md-5" style={{justifyContent:'center',textAlign:'center'}}>
                                    <Button type="submit" variant="info" style={{width:'5rem'}}>Edit</Button> <Button type="submit" variant="danger">Remove</Button>
                                </div>
                            </div>
                            <div style={{textAlign:'left'}} className="row">
                                <div className="col-md-7">
                                    <h6>Room Type: Double Room</h6>
                                    <h6>No Of Rooms: 2</h6>
                                    <h6>Full Board</h6>
                                    <hr></hr>
                                </div> 
                                <div className="col-md-5" style={{justifyContent:'center',textAlign:'center'}}>
                                    <Button type="submit" variant="info" style={{width:'5rem'}}>Edit</Button> <Button type="submit" variant="danger">Remove</Button>
                                </div>
                            </div>
                               
                        </Container>
                       
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <Container style={{textAlign:'center',background:'linear-gradient(90deg, #c7c4bd 0%, #e4e2dd 50%, #faf9f8 100%',height:'25rem',boxShadow:'1px 2px 6px 1px gray',padding:'1rem'}}>
                            <h5>Activity Bookings</h5>
                        </Container>
                    </div>
                </div>
            </Container>
                                
                                <div className="center" style={{justifyContent:'center',textAlign:'center'}}>
                                    <Button onClick={()=>setViewBill(true)} type="submit" variant="info" style={{width:'10rem'}}>View Bill</Button> 
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