import React,{useState} from "react";
import DatePicker, {addDays} from "react-datepicker";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";
//import { memo } from "react";
import { Button,Form,Col, Row, Modal } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';

 function Datee(){
 const [selectedDate, setSelectedDate] = useState(null)
     return (
          <div className='Datee'>
            <DatePicker
              selected={selectedDate}
              onChange={date => setSelectedDate(date)}
              dateFormat='dd/MM/yyyy'
              minDate={new Date()}
              />
          </div>
            )  }
function AddCart(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header style={{backgroundColor:'lightgray'}} closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Book Now
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
                          <Form>
                              <Form.Row>
                                  <Form.Group as={Col} controlId="formGridCheckIn">
                                  <Form.Label style={{textAlign:'center'}}><h6>Check-in Date</h6></Form.Label>
                                  <Form.Control type="date"  min={new Date().toISOString().split("T")[0]} required/>
                                  </Form.Group>

                                  <Form.Group as={Col} controlId="formGridCheckOut">
                                  <Form.Label style={{textAlign:'center'}}><h6>Check-out Date</h6></Form.Label>
                                  <Form.Control type="date"   required/>
                                  </Form.Group>
                              </Form.Row>
                              <Form.Row>
                                  <Form.Group as={Col} controlId="formGridNuofPeople">
                                  <Form.Label style={{textAlign:'center'}}><h6>Number of People</h6></Form.Label>
                                  <Form.Control type="number" placeholder="1" min="1" required/>
                                  </Form.Group>
                                 
                                  <Form.Group as={Col} controlId="formGridNuofRooms">
                                  <Form.Label style={{textAlign:'center'}}><h6>Number of Rooms</h6></Form.Label>
                                  <Form.Control type="number" placeholder="1" min="1" required/>
                                  </Form.Group>
                              </Form.Row>
                              <Form.Row>
                                  <Form.Group as={Col} controlId="formGridMeal">
                                  <Form.Label style={{textAlign:'center'}}><h6>Meal</h6>
                                  <div>
                                            
                                            <input type="radio" name="meal" id="exampleRadios1" value="option1" checked /> Full-Board
                                            <br></br>
                                            <input type="radio" name="meal" id="exampleRadios2" value="option2" />Half-Board

                                    </div>
                                    </Form.Label>
                                  </Form.Group>
                                  
                              </Form.Row>
                              <div style={{textAlign:'center'}}>
                                  <Button type="submit" variant="info">Book Now</Button> <Button onClick={props.onHide} variant="danger">Cancel</Button>
                              </div>
                              
                          </Form>
      </Modal.Body>
      <Modal.Footer style={{backgroundColor:'lightgray'}}>
          Adventure Base Camp, Kitulgala.
      </Modal.Footer>
    </Modal>
  );
}


export default function Room({ room }){
  const { name, slug, images, price } = room;
  const [cart,setCart]=useState(false);

    function isLogged(){
      if (localStorage.getItem('userId') != null)
          setCart(true);
      else 
        alert("please login");
    }
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
                    <Button variant="dark" onClick={()=>isLogged()}
                    // ={()=>setCart(true)}
                    >Book Now</Button>
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