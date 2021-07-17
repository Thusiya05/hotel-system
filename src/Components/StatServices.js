import React, { Component } from "react";
import { FaCommentDollar, FaBeer } from "react-icons/fa";
import { Card, Container } from 'react-bootstrap'
import { BsFillPersonPlusFill } from "react-icons/bs";
import { GiBirdHouse } from "react-icons/gi";


export default class StatServices extends Component {
  
  render() {
    return (
      <section className="servicess">
    
        <div className="services-center">
        <Container>
            <div className="row">
                <div className="col-md-4 col-sm-4">
                <Card style={{width: '20rem',height:'8rem' }}>
                        <div className="row">
                            <div className="col-md-6"  style={{backgroundColor:'lightblue', height:'8rem'}} >
                               <GiBirdHouse size={75}/>
                            </div>
                            <div className="col-md-6" >
                                <Card.Body >
                            <Card.Title>Rooms</Card.Title>
                        </Card.Body>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="col-md-4 col-sm-4">
                <Card style={{width: '20rem',height:'8rem' }}>
                        <div className="row">
                            <div className="col-md-6"  style={{backgroundColor:'lightblue', height:'8rem'}}>
                               <BsFillPersonPlusFill size={75}/>
                            </div>
                            <div className="col-md-6" >
                                <Card.Body>
                            <Card.Title>Guests</Card.Title>
                        </Card.Body>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="col-md-4 col-sm-4">
                <Card style={{width: '20rem',height:'8rem' }}>
                        <div className="row">
                            <div className="col-md-6"  style={{backgroundColor:'lightblue', height:'8rem'}}>
                               <FaCommentDollar size={75}/>
                            </div>
                            <div className="col-md-6" >
                                <Card.Body style={{ height:'8rem'}}>
                            <Card.Title>Income</Card.Title>
                        </Card.Body>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            </Container>
         </div>
    </section>
     
     );
    }
}   