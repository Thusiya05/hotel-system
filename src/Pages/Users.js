import React,{useState} from 'react';
import Title from '../Components/Title';
import Sidebar  from '../Components/Sidebar';
import { Button,Form,Col } from 'react-bootstrap'


const Users =()=>{
    const [show,setShow]=useState(true)
    return(
        <>
            <div className="users" >
                <Sidebar></Sidebar>
                
                <Title title="U S E R S"></Title>
                <div>
                    <Button variant="dark" onClick={()=>setShow(!show)} >+ Add New User</Button>
                    <br></br>
                    {
                        show?
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
                                    <Form.Control
                                                as="select"
                                                className="my-1 mr-sm-2"
                                                id="inlineFormCustomSelectPref"
                                                custom
                                                
                                            >
                                                <option value="0">Choose...</option>
                                                <option value="1">Receptionist</option>
                                                <option value="2">Guide</option>
                                                <option value="3">Stuwart</option>
                                                <option value="3">Kitchen Staff</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>
                            </Form>
                        </div>:null
                           
                            
                    }
                </div>
            </div>
            
        </>
    )
}
export default Users;