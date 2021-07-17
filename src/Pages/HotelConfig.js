import React,{ useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Title from '../Components/Title';
import { Button,Form,Col,Table,Modal,Row } from 'react-bootstrap';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FaTrash,FaPen,FaSearch } from "react-icons/fa";

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
    return (
        <>
            <div className="users">
                <Sidebar />
                <br></br>
                <br></br>
                <div>
                    <div className="row">
                        <div className="col-md-3">
                            <Button variant="dark" onClick={()=>setOpen(!open)} style={{width:'10rem'}}>Discounts</Button>
                            <br></br>
                        </div>  
                        <div className="col-md-3">
                            <Button variant="dark" onClick={()=>setShow(!show)&setOpen(false)&setView(false)} style={{width:'10rem'}}>Rooms</Button>
                        </div>  
                        <div className="col-md-3">
                            <Button variant="dark" onClick={()=>setView(!view)&setShow(false)&setOpen(false)} style={{width:'10rem'}}>Room Types</Button>
                        </div>
                        <div className="col-md-3">
                            <Button variant="dark" onClick={()=>setDisplay(!display)&setShow(false)&setOpen(false)} style={{width:'10rem'}}>Outdoor Activities</Button>
                        </div>
                    </div>
                </div> 
                <br></br>
                {
                    open?
                    <div>
                    <h4 style={{textAlign:'center',fontFamily:'monospace'}}>Discounts.</h4>
                    <Button><FaSearch /></Button> <input type="text" id="myInput" name="" placeholder="Search by NIC/Name" style={{borderBottomStyle:'solid',borderWidth:'1px', width:'15rem'}}></input>
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

            </div>
        </>
    )
}

export default HotelConfig;
