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
                  <div className="center" 
                            style={{justifyContent:'center',textAlign:'center'}}>
                                    <Button href="./Payment" 
                                    type="submit" 
                                    variant="info" 
                                    style={{width:'10rem'} }>
                                        Print</Button> 
                  </div>
                </Container>
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
    const[status,setStatus]=useState("ACTIVE")
    const[customers,setCustomers]=useState([])

    function pending(){
    //    const stat = "PENDING";
        setOpen(!open)
        setShow(false);
        setView(false);
        setStatus("PENDING");
        setadded(!added);

    }
    function active(){
            setOpen(false)
            setShow(!show);
            setView(false);
            setStatus("ACTIVE");
            setadded(!added);
    
        }

    function checkOut(){
        //    const stat = "PENDING";
            setOpen(false)
            setShow(false);
            setView(!view);
            setStatus("CHECK_OUT");
            setadded(!added);
    
        }

    useEffect(()=>{
        axios.get(`http://localhost:3030/receptionist/viewCustomers/${status}`)
        .then(res=>{
            console.log(res.data);
            setCustomers(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    },[added])
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
                <Nav fill variant="tabs" defaultActiveKey="/home" style={{position:"fixed",width:"80%"}}>
                    <Nav.Item>
                        <Nav.Link onClick={()=>pending()}>Pending Customers</Nav.Link>  
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link onClick={()=>active()}>Check In Customers</Nav.Link>  
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link onClick={()=>checkOut()}>Check Out Customers</Nav.Link>  
                    </Nav.Item>
                </Nav>
                    <br></br>
                    <br></br>
                    <br></br>

                        {
                            show?
                            <div>
                            <div>
                                <h4 style={{textAlign:'center',fontFamily:'monospace'}}>Check In Customers.</h4>
                                <div className="row">
                                    <div className="col-md-6">
                                    </div>
                                    <div className="col-md-6" style={{textAlign:'right'}}>
                                    <Button><FaSearch /></Button><input type="text" id="myInput" name="" placeholder="Search by NIC/Name" style={{borderBottomStyle:'solid',borderWidth:'1px', width:'15rem'}}></input>
                                    </div>
                                </div>
                            </div>
                           

                                <div  style={{overflowX:'auto',maxWidth:'100%'}}>

                                <Table striped bordered hover size="sm" responsive="lg" id="CheckInTable" style = {{tableLayout:'fixed', width:'200%'}} >
                                <thead>
                                    <tr>
                                        <th style={{width:'100%'}}>#</th>
                                        <th style={{width:'100%'}}>First Name</th>
                                        <th style={{width:'100%'}}>Last Name</th>
                                        <th style={{width:'100%'}}>NIC</th>
                                        <th style={{width:'100%'}}>Mobile No</th>
                                        <th style={{width:'200%'}}>Email</th>
                                        <th style={{width:'200%'}}>Address</th>
                                        <th style={{width:'100%'}}>Dob</th>
                                        <th style={{width:'100%'}}> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    customers.map(
                                        test=>
                                    <tr key={test.email}>
                                        <td>{test.customerId}</td>
                                        <td>{test.firstName}</td>
                                        <td>{test.lastName}</td>
                                        <td>{test.nic}</td>
                                        <td>{test.contactNo}</td>
                                        <td>{test.email}</td>
                                        <td>{test.address}</td>
                                        <td>{test.dob}</td>
                                        <td style={{textAlign:'center'}}>
                                        <Tippy content="View Bill">
                                            <Button  onClick={()=>setViewBill(true)} type="edit"><FaPrint /></Button>  
                                        </Tippy>
                                        <Tippy content="Edit">
                                            <Button onClick={()=>setEditShow(true)} type="edit"><FaPen /></Button>
                                         </Tippy>
                                        </td>
                                    </tr>
                                    )
                                }
                                   
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
                            <div  style={{overflowX:'auto',maxWidth:'100%'}}>
                            <Table striped bordered hover size="sm" responsive="lg" id="pendingTable" style = {{tableLayout:'fixed', width:'200%'}} >
                                <thead>
                                    <tr>
                                        <th style={{width:'100%'}}>#</th>
                                        <th style={{width:'100%'}}>First Name</th>
                                        <th style={{width:'100%'}}>Last Name</th>
                                        <th style={{width:'100%'}}>NIC</th>
                                        <th style={{width:'100%'}}>Mobile No</th>
                                        <th style={{width:'200%'}}>Email</th>
                                        <th style={{width:'200%'}}>Address</th>
                                        <th style={{width:'100%'}}>Dob</th>
                                        <th style={{width:'100%'}}> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    customers.map(
                                        test=>
                                    <tr key={test.email}>
                                        <td>{test.customerId}</td>
                                        <td>{test.firstName}</td>
                                        <td>{test.lastName}</td>
                                        <td>{test.nic}</td>
                                        <td>{test.contactNo}</td>
                                        <td>{test.email}</td>
                                        <td>{test.address}</td>
                                        <td>{test.dob}</td>
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
                                    )
                                }
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
                            <div  style={{overflowX:'auto',maxWidth:'100%'}}>

                            <Table striped bordered hover size="sm" responsive="lg" id="pendingTable" style = {{tableLayout:'fixed', width:'200%'}} >
                                <thead>
                                    <tr>
                                        <th style={{width:'100%'}}>#</th>
                                        <th style={{width:'100%'}}>First Name</th>
                                        <th style={{width:'100%'}}>Last Name</th>
                                        <th style={{width:'100%'}}>NIC</th>
                                        <th style={{width:'100%'}}>Mobile No</th>
                                        <th style={{width:'100%'}}>Email</th>
                                        <th style={{width:'100%'}}>Address</th>
                                        <th style={{width:'100%'}}>Dob</th>
                                        <th style={{width:'100%'}}> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    customers.map(
                                        test=>
                                    <tr key={test.email}>
                                        <td>{test.customerId}</td>
                                        <td>{test.firstName}</td>
                                        <td>{test.lastName}</td>
                                        <td>{test.nic}</td>
                                        <td>{test.contactNo}</td>
                                        <td>{test.email}</td>
                                        <td>{test.address}</td>
                                        <td>{test.dob}</td>
                                        <td style={{textAlign:'center'}}>
                                        <Tippy content="View Bill">
                                            <Button  onClick={()=>setViewBill(true)} type="edit"><FaPrint /></Button>  
                                        </Tippy>
                                        </td>
                                    </tr>
                                    )
                                }
                                </tbody>
                            </Table>
                            </div>
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