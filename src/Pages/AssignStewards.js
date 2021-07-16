import React,{ useState } from 'react'
import SideBar from '../Components/Sidebar'
import Title from '../Components/Title';
import { Table,Button, Container,Modal,Form,Col } from 'react-bootstrap'
import { FaPrint,FaPen,FaTrash } from 'react-icons/fa';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

function addSteward(props){
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add New Customer Details
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="customerFirstName">
                            <Form.Label><h6>First Name</h6></Form.Label>
                            <Form.Control type="text" required/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="customerLastName">
                            <Form.Label><h6>Last Name</h6></Form.Label>
                            <Form.Control type="text" required/>
                            </Form.Group>
                        </Form.Row>
                             
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    Adventure Base Camp, Kitulgala.
                </Modal.Footer>
        </Modal>
      );
    
}

const AssignStewards=()=> {
    const[view,setView]=useState(false)
    return (
        <>
            <div className="users">
                <SideBar />
                <Title title="Assign Stewards"></Title>
                <br></br>
                <div className="row">
                    <Container style={{boxShadow:'1px 2px 6px 1px gray',width:'45rem'}}>
                        <div className="row" style={{justifyContent:'center',alignItems:'center',borderBottomStyle:'solid',borderWidth:'1px',padding:'0.5rem'}} >
                            <div className="col-sm-4">
                                <h5>Darshana Bandara</h5>
                                <h5>NIC: 199732504553</h5>
                                <h5>Room No: 12</h5>
                            </div>
                            <div className="col-sm-4">
                            <Button variant="dark" onClick={()=>setView(true)} type="submit">Assign Stewards</Button>
                            <addSteward
                                show={view}
                                onHide={()=> setView(false)} 
                            />
                        {/* </div>    */}
                            </div>
                        </div>
                        <div className="row" style={{justifyContent:'center',alignItems:'center',borderBottomStyle:'solid',borderWidth:'1px',padding:'0.5rem'}} >
                            <div className="col-sm-4">
                                <h5>Lakith Kithsara</h5>
                                <h5>NIC: 975624588V</h5>
                                <h5>Room No: 14</h5>
                            </div>
                            <div className="col-sm-4">
                                <Button type='view' variant="dark">Assign Steward</Button>
                            </div>
                        </div>  
                    </Container>
                </div>
                <br></br>
                <div>
                    <Table striped bordered hover size="sm" responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Customer Name</th>
                                <th>Room No</th>
                                <th>Steward Name</th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark Otto</td>
                                <td>12</td>
                                <td>Kasun</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Lakith Rathnayaka</td>
                                <td>14</td>
                                <td>Damith</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Thusitha Rathnayaka</td>
                                <td>15</td>
                                <td>Kelum</td>
                            </tr>
                        </tbody>
                    </Table> 
                </div>  
            </div>
           
           
        </>
    )
}
export default AssignStewards;
