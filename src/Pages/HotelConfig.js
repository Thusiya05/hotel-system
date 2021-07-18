import React,{ useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Title from '../Components/Title';
import { Button,Form,Col,Table,Modal,Row,Nav } from 'react-bootstrap';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FaTrash,FaPen,FaSearch } from "react-icons/fa";


function AddDiscount(props){
    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{backgroundColor:'lightgray'}}>
          <Modal.Title id="contained-modal-title-vcenter">
            Add New Discounts
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col md={4}></Col> 
                            <Col md={4}>
                                <Form.Group as={Col} controlId="addDiscountName">
                                <Form.Label style={{textAlign:'center'}}><h6>Discount Name</h6></Form.Label>
                                <Form.Control type="text" required/>
                                </Form.Group>
                            </Col>             
                        </Row>
                        <Row>
                            <Col md={4}></Col> 
                            <Col md={4}>
                                <Form.Group as={Col} controlId="addDiscountValue">
                                <Form.Label style={{textAlign:'center'}}><h6>Value</h6></Form.Label>
                                <Form.Control type="text" required/>
                                </Form.Group>
                            </Col>             
                        </Row>
                        <Row>
                            <Col md={4}>
                                
                            </Col> 
                            <Col md={4}>
                            <Form.Group as={Col} controlId="AddDiscountDescription">
                                <Form.Label style={{textAlign:'center'}}><h6>Description</h6></Form.Label>
                                <Row>
                                    <Form.Control style={{height:'5rem'}} type="text" required/>
                                </Row>
                               
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
function AddRooms(props){
    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{backgroundColor:'lightgray'}}>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Rooms
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col md={4}></Col> 
                            <Col md={4}>
                                <Form.Group as={Col} controlId="editDiscountName">
                                <Form.Label style={{textAlign:'center'}}><h6>Room Type</h6></Form.Label>
                                <Form.Control type="text" required/>
                                </Form.Group>
                            </Col>             
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={4}></Col> 
                            <Col md={4}>
                                <Form.Group controlId="formFileSm" className="mb-3">
                                    <Form.Label style={{textAlign:'center'}}><h6>Choose Image</h6></Form.Label>
                                    <Form.Control type="file" size="sm" />
                                </Form.Group>
                            </Col>             
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={4}>
                                
                            </Col> 
                            <Col md={4}>
                            <Form.Group as={Col} controlId="editDiscountDescription">
                                <Form.Label style={{textAlign:'center'}}><h6>Description</h6></Form.Label>
                                <Row>
                                    <Form.Control style={{height:'5rem'}} type="Email" required/>
                                </Row>
                               
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
function AddRoomTypes(props){
    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{backgroundColor:'lightgray'}}>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Room Types
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col md={4}></Col> 
                            <Col md={4}>
                                <Form.Group as={Col} controlId="editDiscountName">
                                <Form.Label style={{textAlign:'center'}}><h6>Room Type</h6></Form.Label>
                                <Form.Control type="text" required/>
                                </Form.Group>
                            </Col>             
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={4}></Col> 
                            <Col md={4}>
                                <Form.Group as={Col} controlId="editDiscountValue">
                                    <Form.Label style={{textAlign:'center'}}><h6>Number of Rooms</h6></Form.Label>
                                    <Form.Control type="text" required/>
                                </Form.Group>
                            </Col>             
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={4}>
                                
                            </Col> 
                            <Col md={4}>
                            <Form.Group as={Col} controlId="editDiscountDescription">
                                <Form.Label style={{textAlign:'center'}}><h6>Number Of Persons</h6></Form.Label>
                                <Form.Control type="text" required/>
                            </Form.Group>
                            </Col>             
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={4}>
                                
                            </Col> 
                            <Col md={4}>
                            <Form.Group as={Col} controlId="editDiscountDescription">
                                <Form.Label style={{textAlign:'center'}}><h6>Price</h6></Form.Label>
                                <Form.Control type="text" required/>
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
function AddOutdoorActivities(props){
    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{backgroundColor:'lightgray'}}>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Outdoor Activities
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col md={4}></Col> 
                            <Col md={4}>
                                <Form.Group as={Col} controlId="editActivityName">
                                <Form.Label style={{textAlign:'center'}}><h6>Outdoor Activity Name</h6></Form.Label>
                                <Form.Control type="text" required/>
                                </Form.Group>
                            </Col>             
                        </Row>
                        <Row>
                            <Col md={4}>
                               
                            </Col> 
                            <Col md={4}>
                            <Row>
                                <Col sm={6}>
                                    <Form.Group as={Col} controlId="editActivityDateFrom">
                                        <Form.Label style={{textAlign:'center'}}><h6>From</h6></Form.Label>
                                        <Form.Control type="text" required/>
                                    </Form.Group>
                                </Col>
                                <Col sm={6}>
                                    <Form.Group as={Col} controlId="editActivityDateTo">
                                        <Form.Label style={{textAlign:'center'}}><h6>To</h6></Form.Label>
                                        <Form.Control type="text" required/>
                                    </Form.Group>
                                </Col>    
                            </Row>
                        </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={4}>
                                
                            </Col> 
                            <Col md={4}>
                            <Form.Group as={Col} controlId="editActivityDescription">
                                <Form.Label style={{textAlign:'center'}}><h6>Description</h6></Form.Label>
                                <Row>
                                    <Form.Control style={{height:'5rem'}} type="Email" required/>
                                </Row>
                               
                                </Form.Group>
                            </Col>             
                        </Row>
                        <div style={{textAlign:'center'}}>
                            <Button type="submit" variant="info">add</Button> <Button onClick={props.onHide} variant="danger">Cancel</Button>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{backgroundColor:'lightgray'}}>
                    Adventure Base Camp, Kitulgala.
                </Modal.Footer>
            </Modal>
    );
}
function EditOutdoorActivities(props){
    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{backgroundColor:'lightgray'}}>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Outdoor Activities
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col md={4}></Col> 
                            <Col md={4}>
                                <Form.Group as={Col} controlId="editActivityName">
                                <Form.Label style={{textAlign:'center'}}><h6>Outdoor Activity Name</h6></Form.Label>
                                <Form.Control type="text" required/>
                                </Form.Group>
                            </Col>             
                        </Row>
                        <Row>
                            <Col md={4}>
                               
                            </Col> 
                            <Col md={4}>
                            <Row>
                                <Col sm={6}>
                                    <Form.Group as={Col} controlId="editActivityDateFrom">
                                        <Form.Label style={{textAlign:'center'}}><h6>From</h6></Form.Label>
                                        <Form.Control type="text" required/>
                                    </Form.Group>
                                </Col>
                                <Col sm={6}>
                                    <Form.Group as={Col} controlId="editActivityDateTo">
                                        <Form.Label style={{textAlign:'center'}}><h6>To</h6></Form.Label>
                                        <Form.Control type="text" required/>
                                    </Form.Group>
                                </Col>    
                            </Row>
                        </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={4}>
                                
                            </Col> 
                            <Col md={4}>
                            <Form.Group as={Col} controlId="editActivityDescription">
                                <Form.Label style={{textAlign:'center'}}><h6>Description</h6></Form.Label>
                                <Row>
                                    <Form.Control style={{height:'5rem'}} type="Email" required/>
                                </Row>
                               
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
function EditRoomTypes(props){
    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{backgroundColor:'lightgray'}}>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Room Types
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col md={4}></Col> 
                            <Col md={4}>
                                <Form.Group as={Col} controlId="editDiscountName">
                                <Form.Label style={{textAlign:'center'}}><h6>Room Type</h6></Form.Label>
                                <Form.Control type="text" required/>
                                </Form.Group>
                            </Col>             
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={4}></Col> 
                            <Col md={4}>
                                <Form.Group as={Col} controlId="editDiscountValue">
                                    <Form.Label style={{textAlign:'center'}}><h6>Number of Rooms</h6></Form.Label>
                                    <Form.Control type="text" required/>
                                </Form.Group>
                            </Col>             
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={4}>
                                
                            </Col> 
                            <Col md={4}>
                            <Form.Group as={Col} controlId="editDiscountDescription">
                                <Form.Label style={{textAlign:'center'}}><h6>Number Of Persons</h6></Form.Label>
                                <Form.Control type="text" required/>
                            </Form.Group>
                            </Col>             
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={4}>
                                
                            </Col> 
                            <Col md={4}>
                            <Form.Group as={Col} controlId="editDiscountDescription">
                                <Form.Label style={{textAlign:'center'}}><h6>Price</h6></Form.Label>
                                <Form.Control type="text" required/>
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
function EditRooms(props){
    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{backgroundColor:'lightgray'}}>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Rooms
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col md={4}></Col> 
                            <Col md={4}>
                                <Form.Group as={Col} controlId="editDiscountName">
                                <Form.Label style={{textAlign:'center'}}><h6>Room Type</h6></Form.Label>
                                <Form.Control type="text" required/>
                                </Form.Group>
                            </Col>             
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={4}></Col> 
                            <Col md={4}>
                                <Form.Group controlId="formFileSm" className="mb-3">
                                    <Form.Label style={{textAlign:'center'}}><h6>Choose Image</h6></Form.Label>
                                    <Form.Control type="file" size="sm" />
                                </Form.Group>
                            </Col>             
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={4}>
                                
                            </Col> 
                            <Col md={4}>
                            <Form.Group as={Col} controlId="editDiscountDescription">
                                <Form.Label style={{textAlign:'center'}}><h6>Description</h6></Form.Label>
                                <Row>
                                    <Form.Control style={{height:'5rem'}} type="Email" required/>
                                </Row>
                               
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
function EditDiscount(props){
    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{backgroundColor:'lightgray'}}>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Discounts
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col md={4}></Col> 
                            <Col md={4}>
                                <Form.Group as={Col} controlId="editDiscountName">
                                <Form.Label style={{textAlign:'center'}}><h6>Discount Name</h6></Form.Label>
                                <Form.Control type="text" required/>
                                </Form.Group>
                            </Col>             
                        </Row>
                        <Row>
                            <Col md={4}></Col> 
                            <Col md={4}>
                                <Form.Group as={Col} controlId="editDiscountValue">
                                <Form.Label style={{textAlign:'center'}}><h6>Value</h6></Form.Label>
                                <Form.Control type="text" required/>
                                </Form.Group>
                            </Col>             
                        </Row>
                        <Row>
                            <Col md={4}>
                                
                            </Col> 
                            <Col md={4}>
                            <Form.Group as={Col} controlId="editDiscountDescription">
                                <Form.Label style={{textAlign:'center'}}><h6>Description</h6></Form.Label>
                                <Row>
                                    <Form.Control style={{height:'5rem'}} type="Email" required/>
                                </Row>
                               
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
function HotelConfig() {
    const[open,setOpen]=useState(true);
    const[show,setShow]=useState(false);
    const[view,setView]=useState(false);
    const[display,setDisplay]=useState(false);
    const[editView,setEditView]=useState(false);
    const[addView,setAddView]=useState(false);
    return (
        <>
            <div className="users">
                <Sidebar />
                <br></br>
                
                <div>
                <Nav fill variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link onClick={()=>setOpen(!open)&setShow(false)&setView(false)&setDisplay(false)} style={{width:'10rem'}}>Discounts</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={()=>setShow(!show)&setOpen(false)&setView(false)&setDisplay(false)} style={{width:'10rem'}}>Rooms</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={()=>setView(!view)&setOpen(false)&setShow(false)&setDisplay(false)} style={{width:'10rem'}}>Room Types</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link style={{width:'20rem'}} onClick={()=>setDisplay(!display)&setShow(false)&setOpen(false)&setView(false)} style={{width:'10rem'}}>Activities</Nav.Link>
                    </Nav.Item>
                </Nav>
                </div> 
                <br></br>
                {
                    open?
                    <div>
                    <h4 style={{textAlign:'center',fontFamily:'monospace'}}>Discounts.</h4>
                    <div className="row">
                        <div className="col-md-6">
                        <Button onClick={()=>setAddView(true)} variant="dark">+ Add New Discounts</Button>
                            <AddDiscount
                                show={addView}
                                onHide={()=> setAddView(false)} 
                            />  
                        </div>
                        <div className="col-md-6" style={{textAlign:'right'}}>
                        <Button><FaSearch /></Button> <input type="text" id="myInput" name="" placeholder="Search by Discount Name" style={{borderBottomStyle:'solid',borderWidth:'1px', width:'15rem'}}></input>
                        </div>
                    </div>
                    
                  
                    <br></br>
                    <br></br>
                    <Table striped bordered hover size="sm" responsive id="CheckInTable">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Discount Name</th>
                                <th>Value</th>
                                <th>Description</th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Family Discount</td>
                                <td>30%</td>
                                <td>Enjoy with Your family</td>
                                <td style={{textAlign:'center'}}>
                                <Tippy content="Delete">
                                    <Button type="delete"><FaTrash /></Button>
                                </Tippy>
                                    <Tippy content="Edit">
                                    <Button onClick={()=>setEditView(true)} type="edit"><FaPen /></Button>
                                    </Tippy>
                                
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Mega Discount</td>
                                <td>40%</td>
                                <td>Enjoy with our Packages</td>
                                <td style={{textAlign:'center'}}>
                                <Tippy content="Delete">
                                    <Button type="delete"><FaTrash /></Button>
                                </Tippy>
                                    <Tippy content="Edit">
                                    <Button onClick={()=>setEditView(true)} type="edit"><FaPen /></Button>
                                    </Tippy>
                                
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <EditDiscount
                                show={editView}
                                onHide={()=> setEditView(false)} 
                            />
                   </div> :null
                }
                {
                    show?
                    <div>
                    <h4 style={{textAlign:'center',fontFamily:'monospace'}}>Rooms.</h4>
                    <div className="row">
                        <div className="col-md-6">
                        <Button onClick={()=>setAddView(true)} variant="dark">+ Add New Room</Button>
                            <AddRooms 
                                show={addView}
                                onHide={()=>setAddView(false)}
                            /> 
                        </div>
                        <div className="col-md-6" style={{textAlign:'right'}}>
                            <Button><FaSearch /></Button> <input type="text" id="myInput" name="" placeholder="Search by Room Number" style={{borderBottomStyle:'solid',borderWidth:'1px', width:'15rem'}}></input>
                        </div>
                    </div>
                    <br></br>
                    
                    <Table striped bordered hover size="sm" responsive id="CheckInTable">
                        <thead>
                            <tr>
                                <th>Room Number</th>
                                <th>Room Type</th>
                                <th>Description</th>
                                <th>image</th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Single Rooms</td>
                                <td>For One Person</td>
                                <td>image1</td>
                                <td style={{textAlign:'center'}}>
                                <Tippy content="Delete">
                                    <Button type="delete"><FaTrash /></Button>
                                </Tippy>
                                    <Tippy content="Edit">
                                    <Button onClick={()=>setEditView(true)} type="edit"><FaPen /></Button>
                                    </Tippy>
                                
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Double Rooms</td>
                                <td>For 2 Person</td>
                                <td>image2</td>
                                <td style={{textAlign:'center'}}>
                                <Tippy content="Delete">
                                    <Button type="delete"><FaTrash /></Button>
                                </Tippy>
                                    <Tippy content="Edit">
                                    <Button onClick={()=>setEditView(true)} type="edit"><FaPen /></Button>
                                    </Tippy>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <EditRooms
                        show={editView}
                        onHide={()=> setEditView(false)} 
                    />
                   </div> :null 
                }
                {
                    view?
                    <div>
                    <h4 style={{textAlign:'center',fontFamily:'monospace'}}>Room Types.</h4>
                    <div className="row">
                        <div className="col-md-6">
                        <Button onClick={()=>setAddView(true)} variant="dark">+ Add New Type</Button>
                            <AddRoomTypes 
                                show={addView}
                                onHide={()=>setAddView(false)}
                            />
                        </div>
                        <div className="col-md-6" style={{textAlign:'right'}}>
                        <Button><FaSearch /></Button> <input type="text" id="myInput" name="" placeholder="Search by Room Type" style={{borderBottomStyle:'solid',borderWidth:'1px', width:'15rem'}}></input>
                          
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <Table striped bordered hover size="sm" responsive id="CheckInTable">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Room Type</th>
                                <th>Number Of Rooms</th>
                                <th>Number of Persons</th>
                                <th>Price</th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Single Rooms</td>
                                <td>5</td>
                                <td>1</td>
                                <td>100$</td>
                                <td style={{textAlign:'center'}}>
                                <Tippy content="Delete">
                                    <Button type="delete"><FaTrash /></Button>
                                </Tippy>
                                    <Tippy content="Edit">
                                    <Button onClick={()=>setEditView(true)} type="edit"><FaPen /></Button>
                                    </Tippy>
                                
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Double Rooms</td>
                                <td>3</td>
                                <td>2</td>
                                <td>200$</td>
                                <td style={{textAlign:'center'}}>
                                <Tippy content="Delete">
                                    <Button type="delete"><FaTrash /></Button>
                                </Tippy>
                                    <Tippy content="Edit">
                                    <Button onClick={()=>setEditView(true)} type="edit"><FaPen /></Button>
                                    </Tippy>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <EditRoomTypes
                        show={editView}
                        onHide={()=> setEditView(false)} 
                    />
                   </div> :null 
                }
                {
                    display?
                    <div>
                    <h4 style={{textAlign:'center',fontFamily:'monospace'}}>Outdoor Activities</h4>
                    <div className="row">
                        <div className="col-md-6">
                        <Button onClick={()=>setAddView(true)} variant="dark">+ Add New Activity</Button>
                            <AddOutdoorActivities 
                                show={addView}
                                onHide={()=>setAddView(false)}
                            />
                        </div>
                        <div className="col-md-6" style={{textAlign:'right'}}>
                            <Button><FaSearch /></Button> <input type="text" id="myInput" name="" placeholder="Search by Discount Activity" style={{borderBottomStyle:'solid',borderWidth:'1px', width:'15rem'}}></input>
                            
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <Table striped bordered hover size="sm" responsive id="CheckInTable">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Activity Name</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Description</th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Water Rafting</td>
                                <td>10am</td>
                                <td>1pm</td>
                                <td>get adventure here</td>
                                <td style={{textAlign:'center'}}>
                                <Tippy content="Delete">
                                    <Button type="delete"><FaTrash /></Button>
                                </Tippy>
                                <Tippy content="Edit">
                                    <Button onClick={()=>setEditView(true)} type="edit"><FaPen /></Button>
                                </Tippy>
                                
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Cycling</td>
                                <td>4pm</td>
                                <td>6.30pm</td>
                                <td>Good Exercise</td>
                                <td style={{textAlign:'center'}}>
                                <Tippy content="Delete">
                                    <Button type="delete"><FaTrash /></Button>
                                </Tippy>
                                <Tippy content="Edit">
                                    <Button onClick={()=>setEditView(true)} type="edit"><FaPen /></Button>
                                </Tippy>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <EditOutdoorActivities
                        show={editView}
                        onHide={()=> setEditView(false)} 
                    />
                   </div> :null 
                }    

            </div>
        </>
    )
}

export default HotelConfig;
