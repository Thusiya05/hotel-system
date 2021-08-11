import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import {Container,Button} from 'react-bootstrap'

const MyBookings = ()=>{
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
                                </div> 6
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
            <div>
                <Footer />
            </div>
        </>
    )
}
export default MyBookings;