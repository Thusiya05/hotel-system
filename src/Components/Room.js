import React,{useState} from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";
//import { memo } from "react";
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
          Book Now
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
                          <Form>
                              <Form.Row>
                                  <Form.Group as={Col} controlId="formGridFirstName">
                                  <Form.Label style={{textAlign:'center'}}><h6>Check-in Date</h6></Form.Label>
                                  <Form.Control type="date" required/>
                                  </Form.Group>

                                  <Form.Group as={Col} controlId="formGridLastName">
                                  <Form.Label style={{textAlign:'center'}}><h6>Check-out Date</h6></Form.Label>
                                  <Form.Control type="date" required/>
                                  </Form.Group>
                              </Form.Row>
                              <Form.Row>
                                  <Form.Group as={Col} controlId="formGridEmail">
                                  <Form.Label style={{textAlign:'center'}}><h6>Number of People</h6></Form.Label>
                                  <Form.Control type="number" placeholder="1" required/>
                                  </Form.Group>
                                 
                                  <Form.Group as={Col} controlId="formGridMobile">
                                  <Form.Label style={{textAlign:'center'}}><h6>Number of Rooms</h6></Form.Label>
                                  <Form.Control type="number" placeholder="1" required/>
                                  </Form.Group>
                              </Form.Row>
                              <Form.Row>
                                  <Form.Group as={Col} controlId="formGridEmail">
                                  <Form.Label style={{textAlign:'center'}}><h6>Meal</h6>
                                  <div>
                                            <br></br>
                                            <input type="radio" name="meal" id="exampleRadios1" value="option1" checked /> Full-Board &nbsp; &nbsp; &nbsp; 
                                            <input type="radio" name="meal" id="exampleRadios2" value="option2" />Half-Board

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
                                  <Button type="submit" variant="info">Book Now</Button> <Button onClick={props.onHide} variant="danger">Cancel</Button>
                              </div>
                              
                          </Form>
      </Modal.Body>
      <Modal.Footer>
          Adventure Base Camp, Kitulgala.
      </Modal.Footer>
    </Modal>
  );
}


export default function Room({ room }){
  const { name, slug, images, price } = room;
  const [cart,setCart]=useState(false);
  // console.log(name);
  return (
    
        <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className=" btn btn-outline-primary room-link">
          Features
        </Link>

      </div>
      <div>
                    <Button variant="dark" onClick={()=>setCart(true)}>+ Book Now</Button>
                    <AddCart 
                        show={cart}
                        onHide={() => setCart(false)}
                    ></AddCart>
            </div>
      <p className="room-info">{name}</p>
    </article>
  
    
  );
}

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};