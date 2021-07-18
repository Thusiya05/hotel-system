import React,{useState, useEffect} from 'react';
import axios from 'axios';

export default function UpdateEmployee(props) {

    const [editshow,setEditShow]=useState(false)

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

    return (
        <div>
            setEditShow(true)
            <EditUser
                        show={editshow}
                        onHide={()=> setEditShow(false)} 
                    />
        </div>
    )
}
