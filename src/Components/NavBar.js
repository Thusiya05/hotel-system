import React,{ useState } from 'react'
import logo from "../images/logo.png"
import { Navbar,Nav,Modal,Container,Row,Col,NavDropdown } from 'react-bootstrap'
import {FaUserCircle} from 'react-icons/fa'

function MyBooking(props){
    return(
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      
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
export default function NavBar({path1,name1,path2,name2,path3,name3,path4,name4,path5,name5,pathSign,LogName}){
        const[open,setOpen]=useState(false);
       return(
         <>
           <Navbar className="new3" collapseOnSelect expand="lg" bg="light" variant="dark" fixed="top">
              <Navbar.Brand> <Nav.Link href="/" ><img src={logo} alt="ABC" ></img></Nav.Link></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href={path1}>{name1}</Nav.Link>
                  <Nav.Link href={path2}>{name2}</Nav.Link>
                  <Nav.Link href={path3}>{name3}</Nav.Link>
                  <Nav.Link href={path4}>{name4}</Nav.Link>
                  <Nav.Link href={path5}>{name5}</Nav.Link>
                </Nav>
                <Nav>
                  {/* <Nav.Link href={pathSign} ><FaUserCircle size={30} /> {LogName}</Nav.Link> */}
                  <NavDropdown title={<FaUserCircle size={30} />} id="basic-nav-dropdown">
                    <NavDropdown.Item href="/signIn"> {LogName}</NavDropdown.Item>
                    <NavDropdown.Item href="/EditProfile">Edit Profile</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">My Bookings</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Nav>
                    <Nav.Link href="#"></Nav.Link>
                  </Nav>
              </Navbar.Collapse>
            </Navbar>
            <MyBooking 
              show={open}
              onHide={()=>setOpen(false)}
            />
         </>
           
       )
      }
   