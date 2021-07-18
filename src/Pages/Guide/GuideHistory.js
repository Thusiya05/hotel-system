import React,{useState} from 'react'
import { Container, Button,Form,Col, Row, Modal} from 'react-bootstrap'
import GuideSidebar from '../../Components/GuideSidebar';
import Title from '../../Components/Title';
import { HiOutlineCheckCircle } from "react-icons/hi";



function ShowGuide(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header style={{backgroundColor:'lightgray'}} closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Package Activities
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                            <Form>
                                <Form.Row>
                                <Form.Group as={Col} controlId="formGridFirstName">
                                    <h6 style={{color:'black'}} >Canyoning </h6>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridFirstName">
                                    
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridFirstName">
                                    <h6 style={{color:'black'}} >08.45 AM - 09.45 AM</h6>
                                </Form.Group>
                                </Form.Row>


                                <Form.Row>
                                <Form.Group as={Col} controlId="formGridFirstName">
                                    <h6 style={{color:'black'}} >Zip Lining</h6>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridFirstName">
                                    
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridFirstName">
                                    <h6 style={{color:'black'}} >10.00 AM - 11.00 AM</h6>
                                </Form.Group>
                                </Form.Row>


                                <Form.Row>
                                <Form.Group as={Col} controlId="formGridFirstName">
                                    <h6 style={{color:'black'}} >Confidence Jump</h6>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridFirstName">
                                
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridFirstName">
                                    <h6 style={{color:'black'}} >11.30 AM - 12.30 PM</h6>
                                </Form.Group>
                                </Form.Row>


                                <Form.Row>
                                <Form.Group as={Col} controlId="formGridFirstName">
                                    <h6 style={{color:'black'}} > Cycling</h6>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridFirstName">
                            
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridFirstName">
                                    <h6 style={{color:'black'}} >04.00 PM - 05.00 PM</h6>
                                </Form.Group>
                                </Form.Row>

                              
                                <div style={{textAlign:'center'}}>
                                 <Button onClick={props.onHide} variant="danger">Done</Button>
                                </div>
                                
                            </Form>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor:'lightgray'}}>
            Adventure Base Camp, Kitulgala.
        </Modal.Footer>
      </Modal>
    );
  }

const GuideHistory=()=> {
    const [view,setView]=useState(false);
    return (
        <>
            <div className="users">
                <GuideSidebar/>
                <br></br>
                <Title title="H i s t o r y"></Title>
                <div className="row">
                    <Container style={{boxShadow:'1px 2px 6px 1px gray',width:'44rem',borderRadius:'2%'}}>
                        <div className="row" style={{justifyContent:'center',alignItems:'center',borderBottomStyle:'solid',borderWidth:'1px',padding:'0.5rem'}} >
                            <div className="col-md-4">
                                <h5>Darshana Bandara</h5>
                                <h5>Package Id : 01</h5>
                                <h5>Date : 2021.08.10</h5>
                            </div>
                            <div className="col-md-4">
                            <Button variant="dark" onClick={()=>setView(true)}>View Activities</Button>
                    <ShowGuide 
                        show={view}
                        onHide={() => setView(false)}
                    ></ShowGuide>
                            </div>
                            <div className="col-md-4">
                            <HiOutlineCheckCircle size={80} color={'green'}/>
                     
                            </div>
                        </div>
                        <div className="row" style={{justifyContent:'center',alignItems:'center',borderBottomStyle:'solid',borderWidth:'1px',padding:'0.5rem'}} >
                            <div className="col-md-4">
                                <h5>Lakith Bandara</h5>
                                <h5>Package Id : 01</h5>
                                <h5>Date : 2021.08.15</h5>
                            </div>
                            <div className="col-md-4">
                            <Button variant="dark" onClick={()=>setView(true)}>View Activities</Button>
                    <ShowGuide 
                        show={view}
                        onHide={() => setView(false)}
                    ></ShowGuide>
                            </div>
                            <div className="col-md-4">
                            <HiOutlineCheckCircle size={80} color={'green'}/>
                            </div>
                        </div> 
                        <div className="row" style={{justifyContent:'center',alignItems:'center',borderBottomStyle:'solid',borderWidth:'1px',padding:'0.5rem'}} >
                            <div className="col-md-4">
                                <h5>Thusitha Bandara</h5>
                                <h5>Package Id : 03</h5>
                                <h5>Date : 2021.08.18</h5>
                            </div>
                            <div className="col-md-4">
                            <Button variant="dark" onClick={()=>setView(true)}>View Activities</Button>
                    <ShowGuide 
                        show={view}
                        onHide={() => setView(false)}
                    ></ShowGuide>
                            </div>
                            <div className="col-md-4">
                            <HiOutlineCheckCircle size={80} color={'green'}/>
                            </div>
                        </div> 
                    </Container>
                </div>
            </div>
            <br></br>
        </>
    )
}
export default GuideHistory;
