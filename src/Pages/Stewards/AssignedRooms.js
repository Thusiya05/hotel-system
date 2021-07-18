import React from 'react'
import { Container,Button } from 'react-bootstrap'
import Stesidebar from '../../Components/stesidebar';

const AssignedRooms=()=> {
    return (
        <>
            <br></br>
            <div className="users">
                <Stesidebar/>
                <div className="row">
                    <Container style={{boxShadow:'1px 2px 6px 1px gray',width:'45rem'}}>
                        <div className="row" style={{justifyContent:'center',alignItems:'center',borderBottomStyle:'solid',borderWidth:'1px',padding:'0.5rem'}} >
                            <div className="col-md-6">
                                <h5>Darshana Bandara</h5>
                                <h5>Room arrangement</h5>
                                <h5>Assigned by: Receptionist</h5>
                                <h5>Room No: 12</h5>
                                <h5>8.00am</h5>
                            </div>
                            <div className="col-md-6">
                            <Button variant="dark"  type="submit">Finish Task</Button>
                            </div>
                        </div>
                        <div className="row" style={{justifyContent:'center',alignItems:'center',borderBottomStyle:'solid',borderWidth:'1px',padding:'0.5rem'}} >
                            <div className="col-md-6">
                                <h5>Lakith Kithsara</h5>
                                <h5>Cleaning</h5>
                                <h5>Assigned by: Receptionist</h5>
                                <h5>Room No: 14</h5>
                                <h5>9.00am</h5>
                            </div>
                            <div className="col-md-6">
                            <Button variant="dark"  type="submit">Finish Task</Button>
                            </div>
                        </div> 
                        <div className="row" style={{justifyContent:'center',alignItems:'center',borderBottomStyle:'solid',borderWidth:'1px',padding:'0.5rem'}} >
                            <div className="col-md-6">
                                <h5>Thusitha Karunthilaka</h5>
                                <h5>Food Order</h5>
                                <h5>Assigned by: Kitchen Staff</h5>
                                <h5>Room No: 12</h5>
                                <h5>10.00am</h5>
                            </div>
                            <div className="col-md-6">
                            <Button variant="dark"  type="submit">Finish Task</Button>
                            </div>
                        </div> 
                    </Container>
                </div>
            </div>
            
        </>
    )
}
export default AssignedRooms;
