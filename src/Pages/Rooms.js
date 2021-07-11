import React,{useState} from 'react'
import Hero from '../Components/Hero'
import Banner from "../Components/Banner"
import FeaturedRooms from '../Components/FeaturedRooms'
import RoomContainer from '../Components/RoomContainer'
import NavBar from "../Components/NavBar"
import { Button,Form,Col, Row, Modal } from 'react-bootstrap'



function AddCart(props) {
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
  

const Rooms = () => {

    
    const [cart,setCart]=useState(false);
    
    return (
        <>

            <NavBar
                path1="/" name1="Home"
                path2="/rooms/" name2="Rooms" 
                path3="/activities" name3="Activities"
                path4="/facilities" name4="Facilities" 
                path5="/aboutUs" name5="About Us" 
                pathSign="/signIn" LogName="Log In">    
            </NavBar>
            <Hero hero="roomsHero">
                <Banner title="Featured Rooms" subtitle="Enjoy the day and feel the real freedom." children="return Home" path="/"></Banner>
            </Hero>
            <div style={{backgroundColor:'#e3f2fd'}}>

            <FeaturedRooms />
            <RoomContainer />
            <div>
                    <Button variant="dark" onClick={()=>setCart(true)}>+ Add New User</Button>
                    <AddCart 
                        cart={cart}
                        onHide={() => setCart(false)}
                    ></AddCart>
            </div>

            </div>
           

        </>
        
    )
}
export default Rooms
