import React from 'react'
import {Container,Form,Col} from 'react-bootstrap'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

const EditProfile=()=>{
    return(
        <>
            <div>
                <NavBar path1="/" name1="Home" path2="/rooms/" name2="Rooms" path3="/activities" name3="Activities" path4="/facilities" name4="Facilities" path5="/aboutUs" name5="About Us" pathSign="/signIn" LogName="Log In"></NavBar>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            <div style={{background:'linear-gradient(90deg, #c7c4bd 0%, #e4e2dd 50%, #faf9f8 100%'}}>
                    <br></br>
                    <br></br>
                    
            <Container style={{boxShadow:'1px 2px 6px 1px gray',width:'44rem',borderRadius:'2%',padding:'1rem'}}>
                        <h3 style={{textAlign:'center'}}>Edit Profile</h3> 
                        <br></br>
                        <Form>
                              <Form.Row>
                                    <Col sm={6}>
                                        <Form.Group as={Col} controlId="formGridFirstName">
                                        <Form.Label style={{textAlign:'center'}}><h6>First Name</h6></Form.Label>
                                        <Form.Control type="text" required/>
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group as={Col} controlId="formGridFirstName">
                                        <Form.Label style={{textAlign:'center'}}><h6>Last Name</h6></Form.Label>
                                        <Form.Control type="Text" required/>
                                        </Form.Group>
                                    </Col>
                               </Form.Row>
                               <Form.Row>
                                    <Col sm={6}>
                                        <Form.Group as={Col} controlId="formGridFirstName">
                                        <Form.Label style={{textAlign:'center'}}><h6>Email</h6></Form.Label>
                                        <Form.Control type="Email" required/>
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group as={Col} controlId="formGridFirstName">
                                        <Form.Label style={{textAlign:'center'}}><h6>Age</h6></Form.Label>
                                        <Form.Control type="Text" required/>
                                        </Form.Group>
                                    </Col>
                               </Form.Row>
                               <Form.Row>
                                    <Col sm={6}>
                                        <Form.Group as={Col} controlId="formGridFirstName">
                                        <Form.Label style={{textAlign:'center'}}><h6>Address</h6></Form.Label>
                                        <Form.Control type="Email" required/>
                                        </Form.Group>
                                       
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group as={Col} controlId="formGridFirstName">
                                        <Form.Label style={{textAlign:'center'}}><h6>Date Of Birth</h6></Form.Label>
                                        <Form.Control type="date" required/>
                                        </Form.Group>
                                    </Col>
                               </Form.Row>
                               <Form.Row>
                                    <Col sm={6}>
                                        <Form.Group as={Col} controlId="formGridFirstName">
                                        <Form.Label style={{textAlign:'center'}}><h6>NIC</h6></Form.Label>
                                        <Form.Control type="text" required/>
                                        </Form.Group>
                                       
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group as={Col} controlId="formGridFirstName">
                                        <Form.Label style={{textAlign:'center'}}><h6>Telephone No:</h6></Form.Label>
                                        <Form.Control type="text" required/>
                                        </Form.Group>
                                    </Col>
                               </Form.Row>
                               <Form.Row>
                                    <Col sm={6}>
                                        <Form.Group as={Col} controlId="formGridFirstName">
                                        <Form.Label style={{textAlign:'center'}}><h6>Password</h6></Form.Label>
                                        <Form.Control type="text" required/>
                                        </Form.Group>
                                       
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group as={Col} controlId="formGridFirstName">
                                        <Form.Label style={{textAlign:'center'}}><h6>Confirm Password</h6></Form.Label>
                                        <Form.Control type="text" required/>
                                        </Form.Group>
                                    </Col>
                               </Form.Row>
                        </Form> 
            </Container>
            <br></br>
            <br></br>
            
            <div>
                 <Footer />
            </div>

            </div>
           
        </>
    )
}
export default EditProfile;