import React,{useState} from 'react';
import Title from '../Components/Title';
import Sidebar  from '../Components/Sidebar';
import { Button,Form,Col,Table, Row, Modal } from 'react-bootstrap'
import { FaTrash,FaPen } from "react-icons/fa";

function AddUser(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add New User
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
                                    <Button type="submit" variant="info">Add</Button> <Button onClick={props.onHide} variant="danger">Cancel</Button>
                                </div>
                                
                            </Form>
        </Modal.Body>
        <Modal.Footer>
            Adventure Base Camp, Kitulgala.
        </Modal.Footer>
      </Modal>
    );
  }

  function EditUser(props) {
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

const Users =()=>{
//     const popover = (
//         <Popover id="popover-basic">
//           <Popover.Title as="h2">Edit User</Popover.Title>
//             <Popover.Content>
//                 <div className="containerFluid" style={{padding:'1rem'}}>
//                     <Form>
//                         <Form.Row  controlId="editFirstName">
//                             <Form.Label><h6>First Name</h6></Form.Label>
//                             <Form.Control type="text" />
//                         </Form.Row>
//                         <Form.Row  controlId="editLastName">  
//                             <Form.Label><h6>Last Name</h6></Form.Label>
//                             <Form.Control type="text" />
//                         </Form.Row>
//                         <Form.Row  controlId="editEmail">
//                             <Form.Label><h6>Email</h6></Form.Label>
//                             <Form.Control type="Email" placeholder="Enter Email"/>
//                         </Form.Row>
//                         <Form.Row  controlId="editMobile">
//                             <Form.Label><h6>Mobile No:</h6></Form.Label>
//                             <Form.Control type="text" placeholder="07x xxx xxx" />
//                         </Form.Row>
//                         <Form.Row  controlId="editGender">
//                             <Form.Label><h6>Gender</h6></Form.Label>
//                                 <Form.Group as={Col} className="form-check">
//                                     <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
//                                     <label className="form-check-label" for="exampleRadios1"> Male</label>
//                                 </Form.Group>
//                                 <Form.Group as={Col} className="form-check">
//                                     <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"></input>
//                                     <label className="form-check-label" for="exampleRadios2"> Fe-Male</label>  
//                                 </Form.Group>
//                             </Form.Row>

//                             <Form.Row>
//                             <Form.Label><h6>User Role</h6></Form.Label>
//                                 <Form.Control as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom>
//                                     <option value="0">Choose...</option>
//                                     <option value="1">Receptionist</option>
//                                     <option value="2">Guide</option>
//                                     <option value="3">Steward</option>
//                                     <option value="3">Kitchen Staff</option>
//                                 </Form.Control>

//                         </Form.Row>
//                         <br></br>
//                         <div style={{textAlign:'center'}}>
//                             <Button type="submit" variant="info">Update</Button> <Button type="cancel" variant="danger">Cancel</Button>
//                         </div>
                        
//                     </Form>
//                 </div>
//         </Popover.Content>
// </Popover>
// );
    const [show,setShow]=useState(false)
    const [editshow,setEditShow]=useState(false)
    return(
        <>
            <div className="users" >
                <Sidebar></Sidebar>
                
                <Title title="U S E R S"></Title>
                <div>
                    <Button variant="dark" onClick={()=>setShow(true)}>+ Add New User</Button>
                    <AddUser 
                        show={show}
                        onHide={() => setShow(false)}
                    />
                    
                    {/* <Collapse in={show}>
                        <div className="containerFluid" style={{boxShadow:'0 6px 6px gray',padding:'1rem'}}>
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridFirstName">
                                    <Form.Label><h6>First Name</h6></Form.Label>
                                    <Form.Control type="text" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridLastName">
                                    <Form.Label><h6>Last Name</h6></Form.Label>
                                    <Form.Control type="text" />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label><h6>Email</h6></Form.Label>
                                    <Form.Control type="Email" placeholder="Enter Email"/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridMobile">
                                    <Form.Label><h6>Mobile No:</h6></Form.Label>
                                    <Form.Control type="text" placeholder="07x xxx xxx" />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label><h6>Gender</h6></Form.Label>
                                    <div class="form-check" style={{display:'inline-flex'}}>
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                                            <label class="form-check-label" for="exampleRadios1">
                                                Male
                                            </label>
                                            </div>
                                            <div class="form-check" style={{display:'inline-flex'}}>
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"></input>
                                            <label class="form-check-label" for="exampleRadios2">
                                                Fe-Male
                                            </label>
                                        </div>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridMobile">
                                    <Form.Label><h6>User Role</h6></Form.Label>
                                    <Form.Control as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom>
                                                <option value="0">Choose...</option>
                                                <option value="1">Receptionist</option>
                                                <option value="2">Guide</option>
                                                <option value="3">Steward</option>
                                                <option value="3">Kitchen Staff</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>
                                <div style={{textAlign:'center'}}>
                                    <Button type="submit" variant="info">Submit</Button> <Button type="cancel" variant="danger">Cancel</Button>
                                </div>
                                
                            </Form>
                        </div>
                    </Collapse> */}
                        
                </div>
                <br></br><br></br>
                <div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Mobile No</th>
                            <th>Gender</th>
                            <th>User Type</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>darshanaravindu9196@gmail.com</td>
                            <td>071 125 3698</td>
                            <td>Male</td>
                            <td>Guid</td>
                            <td style={{textAlign:'center'}}><Button type="delete"><FaTrash /></Button> 
                            <Button onClick={()=>setEditShow(true)} type="edit"><FaPen /></Button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>071 125 3698</td>
                            <td>Female</td>
                            <td>Steward</td>
                            <td style={{textAlign:'center'}}><Button type="delete"><FaTrash /></Button> 
                            <Button onClick={()=>setEditShow(true)} type="edit"><FaPen /></Button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>071 125 3698</td>
                            <td>Female</td>
                            <td>Steward</td>
                            <td style={{textAlign:'center'}}><Button type="delete"><FaTrash /></Button> 
                            <Button onClick={()=>setEditShow(true)} type="edit"><FaPen /></Button></td>
                        </tr>
                    </tbody>
                    </Table>
                    <EditUser
                        show={editshow}
                        onHide={()=> setEditShow(false)} 
                    />
                </div>
            </div>
            
        </>
    )
}
export default Users;