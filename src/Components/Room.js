import React,{useState,useEffect} from "react";
import DatePicker, {addDays} from "react-datepicker";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";
//import { memo } from "react";
import { Button,Form,Col, Row, Modal } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

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
 const [maxroom, setMaxroom] = useState();
 const [added, setAdded] = useState(false);

  const [data, setData] = useState({
    checkInDate: "",
    checkOutDate: "",
    meal: "Full-Board",
    customerID: localStorage.getItem('userId'),
    numberOfRooms: 1,
})
useEffect(() => {
  axios.get(`http://localhost:3030/customer/booking/getroomnumbers/${props.roomName}/${data.checkInDate}/${data.checkOutDate}`)
  .then((res)=>{
      // setMaxroom(res.data);
      // console.log(res.data)
      if (res.data==0) {
        setMaxroom(1);
      }else{
        setMaxroom(res.data);
      }
  })
}, [added])

  function checkInDate(e){
    e.preventDefault();
    const newdata={...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    setAdded(!added)
  }

  function submit(e){
        e.preventDefault();
        axios.post(`http://localhost:3030/customer/booking/addbooking`,data)
        .then(res=>{
          props.onHide();
          setData({
            checkInDate: "",
            checkOutDate: "",
            meal: "Full-Board",
            customerID: localStorage.getItem('userId'),
            numberOfRooms: 1,
          })
          // alert("Employee Added Successfully");
          toast.success('✅ '+' '+ res.data);
          console.log(res.data)
      })
      .catch(err => {
          toast.error('❌ '+' '+ err.response.data);
          console.log(err.response.data);
          props.onHide();
      })
  }

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
                          <Form onSubmit={(e) => submit(e)}>
                              <Form.Row>
                                  <Form.Group as={Col} controlId="checkInDate">
                                  <Form.Label style={{textAlign:'center'}}><h6>Check-in Date</h6></Form.Label>
                                  <Form.Control value={data.checkInDate} onChange={(e)=>checkInDate(e)} type="date"  min={new Date().toISOString().split("T")[0]} required/>
                                  </Form.Group>

                                  <Form.Group as={Col} controlId="checkOutDate">
                                  <Form.Label style={{textAlign:'center'}}><h6>Check-out Date</h6></Form.Label>
                                  <Form.Control value={data.checkOutDate} onChange={(e)=>checkInDate(e)} type="date"   required/>
                                  </Form.Group>
                              </Form.Row>
                              <Form.Row>
                                  {/* <Form.Group as={Col} controlId="formGridNuofPeople">
                                  <Form.Label style={{textAlign:'center'}}><h6>Number of People</h6></Form.Label>
                                  <Form.Control type="number" placeholder="1" min="1" required/>
                                  </Form.Group> */}
                                 
                                  <Form.Group as={Col} controlId="numberOfRooms">
                                  <Form.Label style={{textAlign:'center'}}><h6>Number of Rooms</h6></Form.Label>
                                  <Form.Control value={data.numberOfRooms} onChange={(e)=>checkInDate(e)} type="number" placeholder="1" min="1" max={maxroom} />
                                  </Form.Group>
                                  <Form.Group as={Col} controlId="meal">
                                    <Form.Label style={{textAlign:'center'}}><h6>Meal</h6></Form.Label>
                                    <Form.Control onChange={(e)=>checkInDate(e)} as="select" className="my-1 mr-sm-2" custom>
                                                <option value="Full-Board">Full-Board</option>
                                                <option value="Half-Board">Half-Board</option>
                                        </Form.Control>
                                    </Form.Group>
                              </Form.Row>
                              {/* <Form.Row>
                                  <Form.Group as={Col} controlId="formGridMeal">
                                  <Form.Label style={{textAlign:'center'}}><h6>Meal</h6>
                                  <div>
                                            
                                            <input type="radio" name="meal" id="exampleRadios1" value="option1" checked /> Full-Board
                                            <br></br>
                                            <input type="radio" name="meal" id="exampleRadios2" value="option2" />Half-Board

                                    </div>
                                    </Form.Label>
                                  </Form.Group>
                                  
                              </Form.Row> */}
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
  const [roomName, setRoomName]=useState();

    function isLogged(id){
      console.log(id);
      setRoomName(id);
      if (localStorage.getItem('userId') != null)
          setCart(true);
      else 
      toast.error('❌ '+' '+ "please login");
    }
  // console.log(name);
  return (  
    <>
    <div>
    <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
    /> 
  
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
                    <Button variant="dark" onClick={()=>isLogged(slug)}
                    // ={()=>setCart(true)}
                    >Book Now</Button>
                    <AddCart 
                        show={cart}
                        onHide={() => setCart(false)}
                        roomName={roomName}
                    ></AddCart>
      </div>
      <p className="room-info">{name}</p>
    </article>
    </div>
    </>
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