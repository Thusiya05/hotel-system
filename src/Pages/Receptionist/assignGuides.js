import React,{ useState } from 'react'
import RcsideBar from '../../Components/rcsidebar'
import Title from '../../Components/Title';
import { Table,Button, Container,Modal,Form } from 'react-bootstrap'
import { FaPen,FaSearch } from 'react-icons/fa';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

function AddGuides(props){
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
        <Modal.Header closeButton  style={{backgroundColor:'lightgray'}}>
          <Modal.Title id="contained-modal-title-vcenter">
            Assign Guides
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Row style={{justifyContent:'center',textAlign:'center'}}>
                            <Form.Group controlId="customerFirstName">
                            <Form.Label><h6>Assign</h6></Form.Label>
                            <Form.Control as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom>
                                        <option value="0">Choose..</option>
                                        <option value="2">Kelum</option>
                                        <option value="3">Damith</option>
                                        <option value="2">Santha</option>
                                        <option value="3">Tharindu</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>          
                    </Form>
                    <br></br>
                    <div style={{textAlign:'center'}}>
                        <Button type="submit" variant="info">Submit</Button> <Button type="submit" variant="danger">Cancel</Button>
                       
                    </div>
                </Modal.Body>
                <Modal.Footer style={{backgroundColor:'lightgray'}}>
                    Adventure Base Camp, Kitulgala.
                </Modal.Footer>
        </Modal>
      ); 
}

function EditGuides(props){
    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton  style={{backgroundColor:'lightgray'}}>
            <Modal.Title id="contained-modal-title-vcenter">
            Assign Guides
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Row style={{justifyContent:'center',textAlign:'center'}}>
                            <Form.Group controlId="customerFirstName">
                            <Form.Label><h6>Assign</h6></Form.Label>
                            <Form.Control as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom>
                                        <option value="0">Choose..</option>
                                        <option value="2">Kelum</option>
                                        <option value="3">Damith</option>
                                        <option value="2">Santha</option>
                                        <option value="3">Tharindu</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>          
                    </Form>
                    <br></br>
                    <div style={{textAlign:'center'}}>
                        <Button type="submit" variant="info">Submit</Button> <Button type="submit" variant="danger">Cancel</Button>
                        
                    </div>
                </Modal.Body>
                <Modal.Footer style={{backgroundColor:'lightgray'}}>
                    Adventure Base Camp, Kitulgala.
                </Modal.Footer>
        </Modal>
    ); 
    
}

const AssignGuides=()=> {
    const[view,setView]=useState(false)
    const[show,setShow]=useState(false)
    return (
        <>
            <div className="users">
                <RcsideBar />
                <Title title="Assign Guides"></Title>
                <br></br>
                <Button><FaSearch /></Button> <input type="text" id="myInput" name="" placeholder="Search by NIC/Name" style={{borderBottomStyle:'solid',borderWidth:'1px', width:'12rem'}}></input>
                <br></br>
                <br></br>
                <div className="row">
                    <Container style={{boxShadow:'1px 2px 6px 1px gray',width:'45rem'}}>
                        <div className="row" style={{justifyContent:'center',alignItems:'center',borderBottomStyle:'solid',borderWidth:'1px',padding:'0.5rem'}} >
                            <div className="col-sm-4">
                                <h5>Darshana Bandara</h5>
                                <h5>NIC: 199732504553</h5>
                                {/* <h5>Room No: 12</h5> */}
                            </div>
                            <div className="col-sm-4">
                            <Button variant="dark" onClick={()=>setView(true)} type="submit">Assign Guides</Button>
                            <AddGuides
                                show={view}
                                onHide={()=> setView(false)} 
                            />
                        {/* </div>    */}
                            </div>
                        </div>
                        <div className="row" style={{justifyContent:'center',alignItems:'center',borderBottomStyle:'solid',borderWidth:'1px',padding:'0.5rem'}} >
                            <div className="col-sm-4">
                                <h5>Lakith Kithsara</h5>
                                <h5>NIC: 975624588V</h5>
                                {/* <h5>Room No: 14</h5> */}
                            </div>
                            <div className="col-sm-4">
                            <Button variant="dark" onClick={()=>setView(true)} type="submit">Assign Guides</Button>
                            <AddGuides
                                show={view}
                                onHide={()=> setView(false)} 
                            />
                            </div>
                        </div>  
                    </Container>
                </div>
                <br></br>
                <div>
                    <Table striped bordered hover size="sm" responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Customer Name</th>
                                {/* <th>Room No</th> */}
                                <th>Guide Name</th>
                                <th>From</th>
                                <th>To</th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark Otto</td>
                                {/* <td>12</td> */}
                                <td>Kasun</td>
                                <td>25/7/2021</td>
                                <td>28/7/2021</td>
                                <td> 
                                <Tippy content="Edit">
                                    <Button onClick={()=>setShow(true)} type="edit"><FaPen /></Button>
                                </Tippy>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Lakith Rathnayaka</td>
                                {/* <td>14</td> */}
                                <td>Damith</td>
                                <td>25/7/2021</td>
                                <td>28/7/2021</td>
                                <td> 
                                <Tippy content="Edit">
                                    <Button onClick={()=>setShow(true)} type="edit"><FaPen /></Button>
                                </Tippy>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Thusitha Rathnayaka</td>
                                {/* <td>15</td> */}
                                <td>Kelum</td>
                                <td>25/7/2021</td>
                                <td>28/7/2021</td>
                                <td> 
                                <Tippy content="Edit">
                                    <Button onClick={()=>setShow(true)} type="edit"><FaPen /></Button>
                                </Tippy>
                                </td>
                            </tr>
                        </tbody>
                    </Table> 
                    <EditGuides
                        show={show}
                        onHide={()=> setShow(false)} 
                    />
                </div>  
            </div>
           
           
        </>
    )
}
export default AssignGuides;
