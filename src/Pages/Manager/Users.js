import React,{useState} from 'react';
import Title from '../../Components/Title';
import Sidebar  from '../../Components/Sidebar';
import { Button,Form,Col,Table, Row, Modal } from 'react-bootstrap'
import { FaTrash,FaPen,FaSearch } from "react-icons/fa";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


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
                                    <Form.Label style={{textAlign:'center'}}><h6>First Name</h6></Form.Label>
                                    <Form.Control type="text" required/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridLastName">
                                    <Form.Label style={{textAlign:'center'}}><h6>Last Name</h6></Form.Label>
                                    <Form.Control type="text" required/>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label style={{textAlign:'center'}}><h6>Email</h6></Form.Label>
                                    <Form.Control type="Email" placeholder="Enter Email" required/>
                                    </Form.Group>
                                   
                                    <Form.Group as={Col} controlId="formGridMobile">
                                    <Form.Label style={{textAlign:'center'}}><h6>Mobile No:</h6></Form.Label>
                                    <Form.Control type="text" placeholder="07x xxx xxx" required/>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label style={{textAlign:'center'}}><h6>Gender</h6>
                                    <div>
                                            <br></br>
                                            <input class="add-User-Gender-Button" type="radio" name="gender" id="exampleRadios1" value="option1" checked /> Male &nbsp; &nbsp; &nbsp; 
                                            <input class="add-User-Gender-Button" type="radio" name="gender" id="exampleRadios2" value="option2" />Female

                                    </div>
                                    </Form.Label>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridMobile">
                                    <Form.Label style={{textAlign:'center'}}><h6>User Role</h6></Form.Label>
                                    <Form.Control as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom>
                                                <option value="1">Receptionist</option>
                                                <option value="2">Guide</option>
                                                <option value="3">Steward</option>
                                                <option value="3">Kitchen Staff</option>
                                        </Form.Control>
                                    </Form.Group>   
                                </Form.Row>
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
                                    <Form.Label style={{textAlign:'center'}}><h6>First Name</h6></Form.Label>
                                    <Form.Control type="text" required/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridLastName">
                                    <Form.Label style={{textAlign:'center'}}><h6>Last Name</h6></Form.Label>
                                    <Form.Control type="text" required/>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label style={{textAlign:'center'}}><h6>Email</h6></Form.Label>
                                    <Form.Control type="Email" placeholder="Enter Email" required/>
                                    </Form.Group>
                                   
                                    <Form.Group as={Col} controlId="formGridMobile">
                                    <Form.Label style={{textAlign:'center'}}><h6>Mobile No:</h6></Form.Label>
                                    <Form.Control type="text" placeholder="07x xxx xxx" required/>
                                    </Form.Group>
                                </Form.Row>
                                <Row>
                                    <Col sm={6}>
                                    <Form.Group controlId="formGridEmail">
                                    <Form.Label style={{textAlign:'center'}}><h6>Gender</h6>
                                    <div>
                                            <br></br>
                                            <input type="radio" name="gender" id="exampleRadios1" value="option1" checked /> Male &nbsp; &nbsp; &nbsp; 
                                            <input type="radio" name="gender" id="exampleRadios2" value="option2" />Female

                                    </div>
                                    </Form.Label>
                                    </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                    <Form.Group controlId="formGridMobile">
                                    <Form.Label style={{textAlign:'center'}}><h6>User Role</h6></Form.Label>
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

    const [show,setShow]=useState(false)
    const [editshow,setEditShow]=useState(false)
    return(
        <>
            <div className="users" >
                <Sidebar></Sidebar>
                <Title title="U S E R S"></Title>
                <br></br>
                <div className="row">
                    <div className="col-md-6">
                    <Button variant="dark" onClick={()=>setShow(true)}>+ Add New User</Button>
                    <AddUser 
                        show={show}
                        onHide={() => setShow(false)}
                    />   
                    </div>
                    <div className="col-md-6" style={{textAlign:'right'}}>
                     <Button><FaSearch /></Button> <input type="text" id="myInput" name="" placeholder="Search by Mobile_No/Name" style={{borderBottomStyle:'solid',borderWidth:'1px', width:'15rem'}}></input>
                    </div>
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
                            <td style={{textAlign:'center'}}>
                            <Tippy content="Delete">
                                <Button type="delete"><FaTrash /></Button>
                            </Tippy>
                             <Tippy content="Edit">
                                <Button onClick={()=>setEditShow(true)} type="edit"><FaPen /></Button>
                             </Tippy>
                             </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>071 125 3698</td>
                            <td>Female</td>
                            <td>Steward</td>
                            <td style={{textAlign:'center'}}>
                            <Tippy content="Delete">
                                <Button type="delete"><FaTrash /></Button>
                            </Tippy>
                             <Tippy content="Edit">
                                <Button onClick={()=>setEditShow(true)} type="edit"><FaPen /></Button>
                             </Tippy>
                             </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>071 125 3698</td>
                            <td>Female</td>
                            <td>Steward</td>
                            <td style={{textAlign:'center'}}>
                            <Tippy content="Delete">
                                <Button type="delete"><FaTrash /></Button>
                            </Tippy>
                             <Tippy content="Edit">
                                <Button onClick={()=>setEditShow(true)} type="edit"><FaPen /></Button>
                             </Tippy>
                        </td>
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