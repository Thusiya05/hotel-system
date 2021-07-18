import React,{ useState } from 'react';
import Title from '../../Components/Title';
import RcsideBar from '../../Components/rcsidebar'
import { Button,Form,Col,Table,Modal,Row,Nav,Container } from 'react-bootstrap'
import { FaTrash,FaPen,FaPrint,FaSearch } from "react-icons/fa";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


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
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="customerFirstName">
                            <Form.Label><h6>First Name</h6></Form.Label>
                            <Form.Control type="text" required/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="customerLastName">
                            <Form.Label><h6>Last Name</h6></Form.Label>
                            <Form.Control type="text" required/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="customerEmail">
                            <Form.Label><h6>Email</h6></Form.Label>
                            <Form.Control type="Email" placeholder="Enter Email" required/>
                            </Form.Group>
                            
                            <Form.Group as={Col} controlId="customerMobile">
                            <Form.Label><h6>Mobile No:</h6></Form.Label>
                            <Form.Control type="text" placeholder="07x xxx xxx" required/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="addCheckingDate">
                            <Form.Label><h6>Check-in Date</h6></Form.Label>
                            <Form.Control type="date" required/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="addCheckoutDate">
                            <Form.Label><h6>Check-out Date</h6></Form.Label>
                            <Form.Control type="date" required/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="customerNIC">
                            <Form.Label><h6>NIC</h6></Form.Label>
                            <Form.Control type="text" required/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="addRoom">
                            <Form.Label><h6>Room</h6></Form.Label>
                            <Form.Control as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom>
                                        <option value="0">Choose..</option>
                                        <option value="1">Single Room</option>
                                        <option value="2">Double Room</option>
                                        <option value="2">Family Room</option>
                                        <option value="2">Camping</option>
                                </Form.Control>
                            </Form.Group>   
                        </Form.Row>
                        <Row>
                            <Col sm={6}>
                                <Form.Group as={Col} controlId="addMeal">
                                    <Form.Label style={{textAlign:'center'}}><h6>Meal</h6>
                                    <div>
                                            <br></br>
                                            <input class="add-User-Gender-Button" type="radio" name="gender" id="exampleRadios1" value="option1" checked /> Full bord &nbsp; &nbsp; &nbsp; 
                                            <input class="add-User-Gender-Button" type="radio" name="gender" id="exampleRadios2" value="option2" />half bord

                                    </div>
                                    </Form.Label>
                                </Form.Group>
                            </Col>
                            <Col sm={6}>
                            <Form.Group controlId="addStatus">
                            <Form.Label><h6>Room No</h6></Form.Label>
                            <Form.Control as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom>
                                        <option value="0">Choose..</option>
                                        <option value="2">1</option>
                                        <option value="3">2</option>
                                        <option value="2">3</option>
                                        <option value="3">4</option>
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
    return(
        <>
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
                                    />
                                </div>
                                <div className="col-md-6" style={{textAlign:'right'}}>
                                    <Button><FaSearch /></Button> <input type="text" id="myInput" name="" placeholder="Search by NIC/Name" style={{borderBottomStyle:'solid',borderWidth:'1px', width:'15rem'}}></input>
                                </div>
                            </div>
                            
                            <br></br>
                            <br></br>
                            <Table striped bordered hover size="sm" responsive id="CheckInTable">
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
                                        <td>Full board</td>
                                        <td>Single room</td>
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
                                    <tr>
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
                                    </tr>
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
                                <Button variant="dark"  onClick={()=>setDisplay(true)} type="submit">+ Add New Customer</Button>
                                    <AddCustomer
                                        show={display}
                                        onHide={()=> setDisplay(false)} 
                                    />
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
                                        <td>
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
                                        <Tippy content="Delete">
                                            <Button type="delete"><FaTrash /></Button>
                                        </Tippy>
                                         <Tippy content="Edit">
                                            <Button onClick={()=>setEditShow(true)} type="edit"><FaPen /></Button>
                                         </Tippy></td>  
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
                                        <Tippy content="Delete">
                                            <Button type="delete"><FaTrash /></Button>
                                        </Tippy>
                                         <Tippy content="Edit">
                                            <Button onClick={()=>setEditShow(true)} type="edit"><FaPen /></Button>
                                         </Tippy></td>
                                        
                                    </tr>
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