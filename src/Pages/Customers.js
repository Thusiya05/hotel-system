import React,{ useState } from 'react';
import Title from '../Components/Title';
import Sidebar  from '../Components/Sidebar';
import { Button,Form,Col,Table,Modal,Row } from 'react-bootstrap'
import { FaTrash,FaPen,FaPrint } from "react-icons/fa";

function EditCustomer(props) {
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
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label><h6>First Name</h6></Form.Label>
                    <Form.Control type="text" required/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label><h6>Last Name</h6></Form.Label>
                    <Form.Control type="text" required/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label><h6>Email</h6></Form.Label>
                    <Form.Control type="Email" placeholder="Enter Email" required/>
                    </Form.Group>
                    
                    <Form.Group as={Col} controlId="formGridMobile">
                    <Form.Label><h6>Mobile No:</h6></Form.Label>
                    <Form.Control type="text" placeholder="07x xxx xxx" required/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label><h6>Check-in Date</h6></Form.Label>
                    <Form.Control type="date" required/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label><h6>Check-out Date</h6></Form.Label>
                    <Form.Control type="date" required/>
                    </Form.Group>
                </Form.Row>
                <Row>
                    <Col sm={6}>
                    <Form.Group controlId="formGridEmail">
                    <Form.Label><h6>Gender</h6></Form.Label>
                    <>
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                            <label class="form-check-label" for="exampleRadios1">
                                Male
                            </label>
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"></input>
                            <label class="form-check-label" for="exampleRadios2">
                                Fe-Male
                            </label>
                        </>
                    </Form.Group>
                    </Col>
                    <Col sm={6}>
                    <Form.Group controlId="formGridMobile">
                    <Form.Label><h6>User Role</h6></Form.Label>
                    <Form.Control as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom>
                                <option value="1">Receptionist</option>
                                <option value="2">Guide</option>
                                <option value="3">Steward</option>
                                <option value="3">Kitchen Staff</option>
                        </Form.Control>
                    </Form.Group>   
                    </Col>
                </Row>
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

const Customers=()=>{
    const[show,setShow]=useState(false)
    const [editshow,setEditShow]=useState(false)
    return(
        <>
            <div className="customers">
                <Sidebar />
                <Title title="C u s t o m e r s"></Title>
                <div>
                    <Button variant="dark" onClick={()=>setShow(!show)}>Checkin Customers</Button>
                        {
                            show?
                            <div>
                            <Table striped bordered hover size="sm" responsive>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>NIC</th>
                                        <th>Mobile No</th>
                                        <th>Email</th>
                                        <th>Checkin Date</th>
                                        <th>CheckOut Date</th>
                                        <th>Meal</th>
                                        <th>Room</th>
                                        <th> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>199732504553</td>
                                        <td>0717365756</td>
                                        <td>darshana@gmail.com</td>
                                        <td>2021-07-23</td>
                                        <td>2021-07-25</td>
                                        <td>Full bord</td>
                                        <td>Single room</td>
                                        <td style={{textAlign:'center'}}><Button><FaPrint /></Button>
                                        <Button type="delete"><FaTrash /></Button> 
                                        <Button onClick={()=>setEditShow(true)} type="edit"><FaPen /></Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Lakith</td>
                                        <td>Rathnayaka</td>
                                        <td>973254553V</td>
                                        <td>0779685478</td>
                                        <td>lakith@gmail.com</td>
                                        <td>2021-07-23</td>
                                        <td>2021-07-25</td>
                                        <td>half bord</td>
                                        <td>Double</td>
                                        <td style={{textAlign:'center'}}><Button><FaPrint /></Button>
                                        <Button type="delete"><FaTrash /></Button> 
                                        <Button onClick={()=>setEditShow(true)} type="edit"><FaPen /></Button></td>
                                        
                                    </tr>
                                    <tr>
                                    <td>3</td>
                                        <td>Thusitha</td>
                                        <td>Rathnayaka</td>
                                        <td>0779685478</td>
                                        <td>123654789</td>
                                        <td>lakith@gmail.com</td>
                                        <td>2021-07-23</td>
                                        <td>2021-07-25</td>
                                        <td>half bord</td>
                                        <td>Double</td>
                                        <td style={{textAlign:'center'}}><Button><FaPrint /></Button>
                                        <Button type="delete"><FaTrash /></Button> 
                                        <Button onClick={()=>setEditShow(true)} type="edit"><FaPen /></Button></td>
                                        
                                    </tr>
                                </tbody>
                            </Table>
                            <EditCustomer
                                show={editshow}
                                onHide={()=> setEditShow(false)} 
                            />
                            </div>:null
                            
                        }
                </div>

            </div>
           
        </>
    )
}
export default Customers;       