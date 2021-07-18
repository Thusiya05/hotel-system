import React, { Component } from "react";
import { FaCommentDollar } from "react-icons/fa";
import { Card, Container } from 'react-bootstrap'
import { BsFillPersonPlusFill } from "react-icons/bs";
import { GiBirdHouse } from "react-icons/gi";
import Countup from "react-countup"


export default class StatServices extends Component {
  
  render() {
    return (
        
      <section className="servicess">
      <br></br>
        <Container>
        <div className="services-center">
            <div className="row">
                <div className="col-md-4 col-sm-4">
                <Card style={{width: '23rem',height:'9rem' }}>
                        <div className="row">
                            <div className="col-md-6"  style={{backgroundColor:'gold', height:'9rem'}} >
                               <GiBirdHouse size={75}/>
                               {/* <h6 style={{fontSize:'22px'}}>Rooms</h6> */}
                            </div>
                            <div className="col-md-6">
                                <Card.Body style={{justifyContent:'center'}}>
                                    {/* <Card.Title>Rooms</Card.Title> */}
                                    <h6 style={{fontSize:'20px'}}>Rooms</h6>
                                        <h6 style={{fontSize:'25px',textAlign:'center'}}><Countup
                                            end={25}
                                            duration={4}
                                        /></h6>
                                </Card.Body>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="col-md-4 col-sm-4">
                <Card style={{width: '23rem',height:'9rem' }}>
                        <div className="row">
                            <div className="col-md-6"  style={{backgroundColor:'crimson', height:'9rem'}}>
                               <BsFillPersonPlusFill size={75}/>
                            </div>
                            <div className="col-md-6" >
                                <Card.Body>
                                <h6 style={{fontSize:'20px'}}>Guests</h6>
                                <h6 style={{fontSize:'25px',textAlign:'center'}}><Countup
                                            end={150}
                                            duration={4}
                                        /></h6>
                        </Card.Body>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="col-md-4 col-sm-4">
                <Card style={{width: '23.5rem',height:'9rem' }}>
                        <div className="row">
                            <div className="col-md-6"  style={{backgroundColor:'#007bff', height:'9rem'}}>
                               <FaCommentDollar size={75}/>
                            </div>
                            <div className="col-md-6" >
                                <Card.Body style={{ height:'8rem'}}>
                                <h6 style={{fontSize:'20px'}}>Income($)</h6>
                                <h6 style={{fontSize:'25px',textAlign:'center'}}><Countup
                                            end={190}
                                            duration={4}
                                        /></h6>
                        </Card.Body>
                            </div>
                        </div>
                    </Card>
                </div>
            </div> 
         </div>
        </Container>
    </section>
     
     );
    }
}   