import React,{useState} from 'react'
import Stesidebar from '../../Components/stesidebar';
import {Container, Button,Form,Col, Row, Modal } from 'react-bootstrap';

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


  function FinishGuide(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header style={{backgroundColor:'lightgray'}} closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Finished Tasks
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                            <Form>
                        
                                    <div style={{textAlign:'center'}}> 
                                    <h6 style={{color:'black'}}>FINISHED</h6>
                                    
                                    </div>
                                
                                <br/>
                                
                                
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


const Guide=()=> {
    const [view,setView]=useState(false);
    const [finish, setFinish]=useState(false);
    return (
        <>
            <div className="users">
                <Stesidebar/>
                <br />
                <br />
                <div className="row">
                    
                    <Container style={{boxShadow:'1px 2px 6px 1px gray',width:'45rem'}}>
                        <div className="row" style={{justifyContent:'center',alignItems:'center',borderBottomStyle:'solid',borderWidth:'1px',padding:'0.5rem'}} >
                            <div className="col-md-6">
                                <h5>Darshana Bandara</h5>
                                <h5>Date : 2021.07.10</h5>
                                <h5>Package Id : 01</h5>
                            </div>
                            <div className="col-md-6">
                            <Button variant="dark" onClick={()=>setView(true)}>View Activities</Button>
                    <ShowGuide 
                        show={view}
                        onHide={() => setView(false)}
                    ></ShowGuide>
                            <br/>
                            <br/>
                            <Button variant="dark" style={{width:'8rem'}} onClick={()=>setFinish(true)}>Finished Tasks</Button>
                    <FinishGuide 
                        show={finish}
                        onHide={() => setFinish(false)}
                    ></FinishGuide>
                            </div>
                        </div>
                        <div className="row" style={{justifyContent:'center',alignItems:'center',borderBottomStyle:'solid',borderWidth:'1px',padding:'0.5rem'}} >
                            <div className="col-md-6">
                            <h5>Lakith Bandara</h5>
                                <h5>Date : 2021.07.15</h5>
                                <h5>Package Id : 02</h5>
                            </div>
                            <div className="col-md-6">
                            <Button variant="dark" onClick={()=>setView(true)}>View Activities</Button>
                    <ShowGuide 
                        show={view}
                        onHide={() => setView(false)}
                    ></ShowGuide>
                            <br/>
                            <br/>
                            <Button variant="dark" style={{width:'8rem'}} onClick={()=>setFinish(true)}>Finished Tasks</Button>
                    <FinishGuide 
                        show={finish}
                        onHide={() => setFinish(false)}
                    ></FinishGuide>
                            </div>
                        </div> 
                        <div className="row" style={{justifyContent:'center',alignItems:'center',borderBottomStyle:'solid',borderWidth:'1px',padding:'0.5rem'}} >
                            <div className="col-md-6">
                            <h5>Thusitha Bandara</h5>
                                <h5>Date : 2021.07.18</h5>
                                <h5>Package Id : 03</h5>
                            </div>
                            <div className="col-md-6">
                            <Button variant="dark" onClick={()=>setView(true)}>View Activities</Button>
                    <ShowGuide 
                        show={view}
                        onHide={() => setView(false)}
                    ></ShowGuide>
                            <br/>
                            <br/>
                            <Button variant="dark" style={{width:'8rem'}} onClick={()=>setFinish(true)}>Finished Tasks</Button>
                    <FinishGuide 
                        show={finish}
                        onHide={() => setFinish(false)}
                    ></FinishGuide>
                            </div>
                        </div> 
                    </Container>
                </div>
            </div>
            
        </>
    )
}
export default Guide;
