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
                        <div style={{boxShadow:'0 6px 6px gray',padding:'1rem'}}>
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="Email" placeholder="Enter Email"/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridMobile">
                                    <Form.Label>Mobile No:</Form.Label>
                                    <Form.Control type="text" placeholder="07x xxx xxx" />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="Gender">
                                        <div className="col-md-6">
                                            <Form.Label>Gender:</Form.Label> 
                                        </div>
                                        <div classNAme="col-md-6">
                                        <Col sm={10}>
                                          <Form.Check  type="radio" label="Male"  name="formHorizontalRadios" id="formHorizontalRadios1" />
                                        </Col>
                                                                                                                  
                                        </div>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="Gender">
                                        
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