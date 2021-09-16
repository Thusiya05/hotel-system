import React,{ useState ,useEffect} from 'react';
import RcsideBar from '../../Components/rcsidebar'
import { Button,Form,Col,Table,Modal,Row,Nav,Container } from 'react-bootstrap'
import { FaTrash,FaPen,FaPrint,FaSearch } from "react-icons/fa";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


function ShowBill(props){
    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
      <Modal.Header closeButton style={{backgroundColor:'lightgray'}}>
        <Modal.Title id="contained-modal-title-vcenter">
          Charges
        </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Container>
                <Row>
                    <Col sm={6}>
                        <h6>Room Charge </h6>
                        <h6>Activity Charges </h6>
                        <h6>Tax</h6>
                        <hr></hr>
                        <h6>Total</h6>
                    </Col>
                    <Col sm={6}>
                        <h6>13 500 </h6>
                        <h6>5000 </h6>
                        <h6>1000</h6>
                        <hr></hr>
                        <h6>19500</h6>
                    </Col>
                  </Row>
                </Container>
              </Modal.Body>
              <Modal.Footer style={{backgroundColor:'lightgray'}}>
                  Adventure Base Camp, Kitulgala.
              </Modal.Footer>
      </Modal>

    );
}
function AddCustomer(props){
    // const[added,setadded]=useState(true)
    const[roomNo,setRoomNo]=useState([])

    function Select(e){
        // setadded(!added);
        // setRoomTypes(roomTypes);
        axios.get(`http://localhost:3030/manager/getRoomsByRoomTypes/${e.target.value}`)
        .then((res)=>{
            console.log(res.data);
            setRoomNo(res.data);
        })
    }
    // useEffect(() => {
    //     axios.get(`http://localhost:3030/manager/getRoomsByRoomTypes/${}`,data)
    //     .then((res)=>{
    //         setData(res.data);
    //         console.log(res.data);
    //     })
    // }, [])

    const url="http://localhost:3030/receptionist/addCustomer"
    const [data,setData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        age:"",
        addressLineOne:"",
        addressLineTwo:"",
        addressLineThree:"",
        dob:"",
        nic:"",
        contactNo:"",
        checkInDate:"",
        checkOutDate:"",
        meal:"",
        roomNo:""
    })

    function submit(e){
        e.preventDefault();
        axios.post(url,data)
        .then(res=>{
            props.setadded(!props.added);
            props.onHide();
            setData({
                firstName:"",
                lastName:"",
                email:"",
                age:"",
                addressLineOne:"",
                addressLineTwo:"",
                addressLineThree:"",
                dob:"",
                nic:"",
                contactNo:"",
                checkInDate:"",
                checkOutDate:"",
                meal:"",
                roomNo:""
            })
            toast.success('✅ '+' '+ res.data);
        })
        .catch(err =>{
            toast.error('❌ '+' '+ err.response.data)
        })    
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
    }
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
        <Modal.Header closeButton style={{backgroundColor:'lightgray'}}>
          <Modal.Title id="contained-modal-title-vcenter">
            Add New Customer Details
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form style={{textAlign:'center'}} onSubmit={(e)=>submit(e)}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="firstName">
                            <Form.Label><h6>First Name</h6></Form.Label>
                            <Form.Control onChange={(e)=>handle(e)} value={data.firstName} type="text" id="firstName" required />
                            </Form.Group>

                            <Form.Group as={Col} controlId="lastName">
                            <Form.Label><h6>Last Name</h6></Form.Label>
                            <Form.Control  onChange={(e)=>handle(e)} value={data.lastName} type="text" id="lastName" required/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="email">
                            <Form.Label><h6>Email</h6></Form.Label>
                            <Form.Control onChange={(e)=>handle(e)} value={data.email} id="email" type="Email" placeholder="Enter Email" required/>
                            </Form.Group>
                            
                            <Form.Group as={Col} controlId="contactNo">
                            <Form.Label><h6>Mobile No:</h6></Form.Label>
                            <Form.Control onChange={(e)=>handle(e)} value={data.contactNo} id="contactNo"type="text" placeholder="07x xxx xxx" required/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="nic">
                            <Form.Label><h6>NIC</h6></Form.Label>
                            <Form.Control type="text" onChange={(e)=>handle(e)} value={data.nic}required/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="dob">
                            <Form.Label><h6>Birth Day</h6></Form.Label>
                            <Form.Control type="date" onChange={(e)=>handle(e)} value={data.dob} required/>
                            </Form.Group>
                        </Form.Row>
                        <br></br>
                        <Row>
                            <Col md={4}></Col> 
                            <Col md={4}>
                                <Form.Label style={{textAlign:'center'}}><h6>Address</h6></Form.Label>
                            </Col>             
                        </Row>
                        <Row>
                            <Col md={4}>
                                <Form.Group controlId="addressLineOne">
                                    <Form.Control onChange={(e)=>handle(e)} value={data.addressLineOne}type="text" placeholder="Line One " required/>
                                </Form.Group>        
                            </Col>
                            <Col md={4}>
                                <Form.Group controlId="addressLineTwo">
                                    <Form.Control onChange={(e)=>handle(e)} value={data.addressLineTwo} type="text" placeholder="Line Two " required/>
                                </Form.Group>   
                            </Col> 
                            <Col md={4}>
                                <Form.Group controlId="addressLineThree">
                                    <Form.Control onChange={(e)=>handle(e)} value={data.addressLineThree} type="text" placeholder="Line Three" required/>
                                </Form.Group>   
                            </Col>  
                        </Row> 
                        <br></br>
                        <Form.Row>
                            <Form.Group as={Col} controlId="checkInDate">
                            <Form.Label><h6>Check-in Date</h6></Form.Label>
                            <Form.Control onChange={(e)=>handle(e)} value={data.checkInDate} id="checkInDate" type="date" required/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="checkOutDate">
                            <Form.Label><h6>Check-out Date</h6></Form.Label>
                            <Form.Control onChange={(e)=>handle(e)} value={data.checkOutDate} type="date" required/>
                            </Form.Group>
                        </Form.Row>
                        <Row>
                            <Col sm={6}>
                            <Form.Group as={Col} controlId="roomTypes">
                            <Form.Label><h6>Room Type</h6></Form.Label>
                                <Form.Control as="select" onChange={(e)=>Select(e)} className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom>
                                        <option value="0">Choose..</option>
                                        <option value="SINGLE_ROOMS">SINGLE_ROOMS</option>
                                        <option value="DOUBLE_ROOMS">DOUBLE_ROOMS</option>
                                        <option value="3">Family Room</option>
                                        <option value="4">Camping</option>
                                </Form.Control>
                            </Form.Group>
                            </Col>
                            <Col sm={6}>
                            <Form.Group controlId="roomNo">
                            <Form.Label><h6>Room No</h6></Form.Label>
                            <Form.Control as="select" onChange={(e)=>handle(e)} value={data.roomNo}  className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom>
                                        {/* <option value="0">Choose..</option>
                                        <option value="2">1</option>
                                        <option value="3">2</option>
                                        <option value="2">3</option>
                                        <option value="3">4</option> */}

                                        {
                                            roomNo.map(
                                                test=> 
                                                <option>{test.roomNo}</option>
                                            )
                                        }
                                </Form.Control>
                            </Form.Group>   
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}></Col> 
                            <Col md={4}>
                            <Form.Group as={Col} controlId="meal">
                                    <Form.Label style={{textAlign:'center'}}><h6>Meal</h6></Form.Label>
                                    <Form.Control onChange={(e)=>handle(e)} as="select" className="my-1 mr-sm-2" custom>
                                                <option value="Full Board">Full Board</option>
                                                <option value="Half Board">Half Board</option>
                                        </Form.Control>
                                    </Form.Group>
                            </Col>             
                        </Row>
                       
                        <div style={{textAlign:'center'}}>
                            <Button type="submit" variant="info">Add</Button> <Button onClick={props.onHide} variant="danger">Cancel</Button>
                        </div>
                        
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{backgroundColor:'lightgray'}}>
                    Adventure Base Camp, Kitulgala.
                </Modal.Footer>
        </Modal>
      );
    }

function EditCustomer(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{backgroundColor:'lightgray'}}>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Customer Details
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="editCustomerdFirstName">
                            <Form.Label><h6>First Name</h6></Form.Label>
                            <Form.Control type="text" required/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="editCustomerLastName">
                            <Form.Label><h6>Last Name</h6></Form.Label>
                            <Form.Control type="text" required/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="editCustomerEmail">
                            <Form.Label><h6>Email</h6></Form.Label>
                            <Form.Control type="Email" placeholder="Enter Email" required/>
                            </Form.Group>
                            
                            <Form.Group as={Col} controlId="editCustomerMobile">
                            <Form.Label><h6>Mobile No:</h6></Form.Label>
                            <Form.Control type="text" placeholder="07x xxx xxx" required/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="editCheckinDate">
                            <Form.Label><h6>Check-in Date</h6></Form.Label>
                            <Form.Control type="date" required/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="editCheckoutDate">
                            <Form.Label><h6>Check-out Date</h6></Form.Label>
                            <Form.Control type="date" required/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="editNIC">
                            <Form.Label><h6>NIC</h6></Form.Label>
                            <Form.Control type="text" required/>
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Row>
                            <Col sm={6}>
                                <Form.Group as={Col} controlId="editRoomType">
                                <Form.Label><h6>Room</h6></Form.Label>
                                <Form.Control as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom>
                                            <option value="0">Choose..</option>
                                            <option value="1">Single Room</option>
                                            <option value="2">Double Room</option>
                                            <option value="2">Family Room</option>
                                            <option value="2">Camping</option>
                                    </Form.Control>
                                </Form.Group>
                                </Col>
                                <Col sm={6}>
                                <Form.Group as={Col} controlId="editRoomNo">
                                <Form.Label><h6>Room No</h6></Form.Label>
                                <Form.Control as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom>
                                            <option value="0">Choose..</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="2">3</option>
                                            <option value="2">4</option>
                                    </Form.Control>
                                </Form.Group>
                                </Col>
                                </Form.Row>
                            </Form.Group>   
                        </Form.Row>
                        <Row>
                            <Col sm={6}>
                                <Form.Group as={Col} controlId="editMealType">
                                    <Form.Label style={{textAlign:'center'}}><h6>Meal</h6>
                                    <div>
                                            <br></br>
                                            <input class="add-User-Gender-Button" type="radio" name="gender" id="exampleRadios1" value="option1" checked /> Full board &nbsp; &nbsp; &nbsp; 
                                            <input class="add-User-Gender-Button" type="radio" name="gender" id="exampleRadios2" value="option2" />half board

                                    </div>
                                    </Form.Label>
                                </Form.Group>
                            </Col>
                            <Col sm={6}>
                            <Form.Group controlId="editStatus">
                            <Form.Label><h6>Status</h6></Form.Label>
                            <Form.Control as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom>
                                        <option value="0">Choose..</option>
                                        <option value="2">Active</option>
                                        <option value="3">Checkout</option>
                                </Form.Control>
                            </Form.Group>   
                            </Col>
                        </Row>
                        <div style={{textAlign:'center'}}>
                            <Button type="submit" variant="info">Update</Button> <Button onClick={props.onHide} variant="danger">Cancel</Button>
                        </div>
                        
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{backgroundColor:'lightgray'}}>
                    Adventure Base Camp, Kitulgala.
                </Modal.Footer>
            </Modal>
    );
  }

const Customers=()=>{
    const[display,setDisplay]=useState(false)
    const[show,setShow]=useState(true)
    const[open,setOpen]=useState(false)
    const[view,setView]=useState(false)
    const[editshow,setEditShow]=useState(false)
    const[viewBill,setViewBill]=useState(false)
    const[added,setadded]=useState(true)
    return(
        <>

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
            <div className="customers">
                <RcsideBar />
                <br></br>
                <div>
                <Nav fill variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link  onClick={()=>setOpen(!open)&setShow(false)&setView(false)}>Pending Customers</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link  onClick={()=>setShow(!show)&setOpen(false)&setView(false)}>Check In customer</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link  onClick={()=>setView(!view)&setShow(false)&setOpen(false)}>Check Out customer</Nav.Link>
                    </Nav.Item>
                </Nav>
                    <br></br>
                        {
                            show?
                            <div>
                            <h4 style={{textAlign:'center',fontFamily:'monospace'}}>Check In Customers.</h4>
                            <div className="row">
                                <div className="col-md-6">
                                <Button variant="dark"  onClick={()=>setDisplay(true)} type="submit">+ Add New Customer</Button>
                                    <AddCustomer
                                        show={display}
                                        onHide={()=> setDisplay(false)}
                                        added={added} 
                                        setadded={setadded} 
                                    />
                                </div>
                                <div className="col-md-6" style={{textAlign:'right'}}>
                                    <Button><FaSearch /></Button> <input type="text" id="myInput" name="" placeholder="Search by NIC/Name" style={{borderBottomStyle:'solid',borderWidth:'1px', width:'15rem'}}></input>
                                </div>
                            </div>
                            
                            <br></br>
                            <br></br>
                            <Table striped bordered hover size="sm" responsive="lg" id="CheckInTable">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>NIC</th>
                                        <th>Mobile No</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                        <th>Dob</th>
                                        <th>Checkin Date</th>
                                        <th>CheckOut Date</th>
                                        <th>Meal</th>
                                        <th>Room No</th>
                                        <th style={{width:'10rem'}}> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>199732504553</td>
                                        <td>0717365756</td>
                                        <td>darshana@gmail.com</td>
                                        <td>Mathale Road,Kurunegala</td>
                                        <td>1997-11-20</td>
                                        <td>2021-07-23</td>
                                        <td>2021-07-25</td>
                                        <td>Full board</td>
                                        <td>12</td>
                                        <td style={{textAlign:'center'}}>
                                        <Tippy content="View Bill">
                                            <Button  onClick={()=>setViewBill(true)} type="edit"><FaPrint /></Button>  
                                        </Tippy>
                                        <Tippy content="Delete">
                                            <Button type="delete"><FaTrash /></Button>
                                        </Tippy>
                                         <Tippy content="Edit">
                                            <Button onClick={()=>setEditShow(true)} type="edit"><FaPen /></Button>
                                         </Tippy>
                                        
                                        </td>
                                    </tr>
                                    {/* <tr>
                                        <td>2</td>
                                        <td>Lakith</td>
                                        <td>Rathnayaka</td>
                                        <td>973254553V</td>
                                        <td>0779685478</td>
                                        <td>lakith@gmail.com</td>
                                        <td>2021-07-23</td>
                                        <td>2021-07-25</td>
                                        <td>half board</td>
                                        <td>Double</td>
                                        <td>15</td>
                                        <td style={{textAlign:'center'}}>
                                        <Tippy content="View Bill">
                                            <Button  onClick={()=>setViewBill(true)} type="edit"><FaPrint /></Button>  
                                        </Tippy>
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
                                        <td>Thusitha</td>
                                        <td>Rathnayaka</td>
                                        <td>0779685478</td>
                                        <td>123654789</td>
                                        <td>lakith@gmail.com</td>
                                        <td>2021-07-23</td>
                                        <td>2021-07-25</td>
                                        <td>half bord</td>
                                        <td>Double</td>
                                        <td>14</td>
                                        <td style={{textAlign:'center'}}>
                                        <Tippy content="View Bill">
                                            <Button  onClick={()=>setViewBill(true)} type="edit"><FaPrint /></Button>  
                                        </Tippy>
                                        <Tippy content="Delete">
                                            <Button type="delete"><FaTrash /></Button>
                                        </Tippy> 
                                        <Tippy content="Edit">
                                        <Button onClick={()=>setEditShow(true)} type="edit"><FaPen /></Button>
                                        </Tippy>
                                        
                                        </td>
                                    </tr> */}
                                </tbody>
                            </Table>
                            <EditCustomer
                                show={editshow}
                                onHide={()=> setEditShow(false)} 
                            />
                            <ShowBill
                                show={viewBill}
                                onHide={()=>setViewBill(false)}
                                    />
                            </div>:null
                            
                        }

                        {
                            open?
                            <div>
                            <h4 style={{textAlign:'center',fontFamily:'monospace'}}>Pending Customers</h4>
                            <div className="row">
                            <div className="col-md-6">
                               
                               </div>
                                
                                <div className="col-md-6" style={{textAlign:'right'}}>
                                    <Button><FaSearch /></Button> <input type="text" id="myInput" name="" placeholder="Search by NIC/Name" style={{borderBottomStyle:'solid',borderWidth:'1px', width:'15rem'}}></input>
                                </div>
                            </div>
                            <br></br>
                            <br></br>
                            <div  style={{overflowX:'auto',maxWidth:'100%'}}>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>NIC</th>
                                        <th>Mobile No</th>
                                        <th>Email</th>
                                        <th style={{width:'10rem'}}>Checkin Date</th>
                                        <th>CheckOut Date</th>
                                        <th>Meal</th>
                                        <th>Room</th>
                                        <th> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>2</td>
                                        <td>Lakith</td>
                                        <td>Rathnayaka</td>
                                        <td>973254553V</td>
                                        <td>0779685478</td>
                                        <td>lakith@gmail.com</td>
                                        <td>2021-07-23</td>
                                        <td>2021-07-25</td>
                                        <td>half bord</td>
                                        <td>Double</td>
                                        <td style={{textAlign:'center'}}>
                                        <Tippy content="View Bill">
                                            <Button  onClick={()=>setViewBill(true)} type="edit"><FaPrint /></Button>  
                                        </Tippy>
                                        <Tippy content="Delete">
                                            <Button type="delete"><FaTrash /></Button>
                                        </Tippy>
                                         <Tippy content="Edit">
                                            <Button onClick={()=>setEditShow(true)} type="edit"><FaPen /></Button>
                                         </Tippy></td>  
                                    </tr>
                                </tbody>
                            </Table>
                            </div>
                            <EditCustomer
                                show={editshow}
                                onHide={()=> setEditShow(false)} 
                            />
                            <ShowBill
                                show={viewBill}
                                onHide={()=>setViewBill(false)}
                            />
                            </div>:null
                            
                        }

                        {
                            view?
                            <div>
                            <h4 style={{textAlign:'center',fontFamily:'monospace'}}>Checkout Customers</h4>
                            <div className="row">
                                <div className="col-md-6">
                               
                                </div>
                                <div className="col-md-6" style={{textAlign:'right'}}>
                                    <Button><FaSearch /></Button> <input type="text" id="myInput" name="" placeholder="Search by NIC/Name" style={{borderBottomStyle:'solid',borderWidth:'1px', width:'15rem'}}></input>
                                </div>
                            </div>
                            <br></br>
                            <br></br>
                            <Table striped bordered hover size="sm" responsive>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>NIC</th>
                                        <th>Mobile No</th>
                                        <th>Email</th>
                                        <th>Checkin Date</th>
                                        <th>CheckOut Date</th>
                                        <th>Meal</th>
                                        <th>Room</th>
                                        <th>Room No</th>
                                        <th> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>199732504553</td>
                                        <td>0717365756</td>
                                        <td>darshana@gmail.com</td>
                                        <td>2021-07-23</td>
                                        <td>2021-07-25</td>
                                        <td>Full bord</td>
                                        <td>Single room</td>
                                        <td>12</td>
                                        <td style={{textAlign:'center'}}>
                                        <Tippy content="View Bill">
                                            <Button  onClick={()=>setViewBill(true)} type="edit"><FaPrint /></Button>  
                                        </Tippy></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Lakith</td>
                                        <td>Rathnayaka</td>
                                        <td>973254553V</td>
                                        <td>0779685478</td>
                                        <td>lakith@gmail.com</td>
                                        <td>2021-07-23</td>
                                        <td>2021-07-25</td>
                                        <td>half bord</td>
                                        <td>Double</td>
                                        <td>14</td>
                                        <td style={{textAlign:'center'}}>
                                        <Tippy content="View Bill">
                                            <Button  onClick={()=>setViewBill(true)} type="edit"><FaPrint /></Button>  
                                        </Tippy>
                                    </td>
                                        
                                    </tr>
                                    <tr>
                                    <td>3</td>
                                        <td>Thusitha</td>
                                        <td>Rathnayaka</td>
                                        <td>0779685478</td>
                                        <td>123654789</td>
                                        <td>lakith@gmail.com</td>
                                        <td>2021-07-23</td>
                                        <td>2021-07-25</td>
                                        <td>half bord</td>
                                        <td>Double</td>
                                        <td>15</td>
                                        <td style={{textAlign:'center'}}>
                                        <Tippy content="View Bill">
                                            <Button  onClick={()=>setViewBill(true)} type="edit"><FaPrint /></Button>  
                                        </Tippy>
                                    </td>
                                        
                                    </tr>
                                </tbody>
                            </Table>
                            <ShowBill
                                show={viewBill}
                                onHide={()=>setViewBill(false)}
                            />
                            </div>:null
                            
                        }
                </div>

            </div>
           
        </>
    )
}
export default Customers;       