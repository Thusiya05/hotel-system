import React,{ Component } from 'react'
import logo from "../images/logo.png"
import { Navbar,Nav,Modal,Container,Row,Col,NavDropdown } from 'react-bootstrap'
import {FaUserCircle} from 'react-icons/fa'
import axios from 'axios'
import { MdSystemUpdate } from 'react-icons/md'
import { Redirect } from 'react-router'

// function MyBooking(props){
//     return(
//       <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
      
//     >
//     <Modal.Header closeButton style={{backgroundColor:'lightgray'}}>
//       <Modal.Title id="contained-modal-title-vcenter">
//         Charges
//       </Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <Container>
//               <Row>
//                   <Col sm={6}>
//                       <h6>Room Charge </h6>
//                       <h6>Activity Charges </h6>
//                       <h6>Tax</h6>
//                       <hr></hr>
//                       <h6>Total</h6>
//                   </Col>
//                   <Col sm={6}>
//                       <h6>13 500 </h6>
//                       <h6>5000 </h6>
//                       <h6>1000</h6>
//                       <hr></hr>
//                       <h6>19500</h6>
//                   </Col>
//                 </Row>
//               </Container>
//             </Modal.Body>
//             <Modal.Footer style={{backgroundColor:'lightgray'}}>
//                 Adventure Base Camp, Kitulgala.
//             </Modal.Footer>
//     </Modal>
//     );
// }

//Details of currently logged in user

    const text1 = () => {
      if (localStorage.getItem('userId') != null)
      return("Hi")
    }

    const text2 = () => {
      if (localStorage.getItem('userId') != null)
      return("👋")
    }

    const DisplyaText = () => {
      if (localStorage.getItem('userId') != null)
          return ( "Logout");
      else 
          return ( "LogIn / Sign-Up");
    }

    const RedirectTo = () => {
      if (localStorage.getItem('userId') != null)
          return("/");
      else 
          return ( "/SignIn");
    }

    const Action = () => {
      localStorage.removeItem("firstName");
      localStorage.removeItem("lastName");
      localStorage.removeItem("userId");
    }

//FoodTab Visibility

    const FoodTabRedirectTo = () => {
      if (localStorage.getItem('userId') != null)
          return("/Customer/cusfoodmenu");
    }

    const DisplyaFoodTabText = () => {
      if (localStorage.getItem('userId') != null)
          return ("Foods");
    }

    const FoodTabStyle = () => {
      if (localStorage.getItem('userId') == null)
          return ({display:'none'});
    }

//mybookings visibility

      const MyBookingsRedirectTo = () => {
        if (localStorage.getItem('userId') != null)
            return("/MyBookings");
      }

      const DisplayMyBookingsText = () => {
        if (localStorage.getItem('userId') != null)
            return ("My Bookings");
      }

      const MyBookingsStyle = () => {
        if (localStorage.getItem('userId') == null)
            return ({display:'none'});
      }

//editprofile visibility
      const EditProfileRedirectTo = () => {
        if (localStorage.getItem('userId') != null)
            return("/EditProfile");
      }

      const DisplayEditProfileText = () => {
        if (localStorage.getItem('userId') != null)
            return ("Edit Profile");
      }

      const EditProfileStyle = () => {
        if (localStorage.getItem('userId') == null)
            return ({display:'none'});
      }
    // const Allow = () => {
    //   if (localStorage.getItem("type") == "CUSTOMER"){
    //     return("/rooms/");
    //   }
      
    // }

export default class NavBar extends Component{


  render(){

       return(
         <>
           <Navbar className="new3" collapseOnSelect expand="lg" bg="light" variant="dark" fixed="top">
              <Navbar.Brand> <Nav.Link href="/" ><img src={logo} alt="ABC" ></img></Nav.Link></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  

                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href={"/rooms/"}>Rooms </Nav.Link>
                  <Nav.Link style={FoodTabStyle()} href={FoodTabRedirectTo()}> {DisplyaFoodTabText()} </Nav.Link>
                  <Nav.Link href="/activities">Activities</Nav.Link>
                  <Nav.Link href="/facilities">Facilities</Nav.Link>
                  <Nav.Link href="/aboutUs">About Us</Nav.Link>
                </Nav>
                <Nav>
                <Navbar.Text>
                  {/* <div style={{backgroundColor:"white",color:"black",height:"2rem",width:"10rem",textAlign:"center", padding:".3rem 0 0 0",borderRadius:"1.2rem"}}> */}
                    <h6>{text1()} {localStorage.getItem('firstName')} {text2()}</h6>
                  {/* </div> */}
                </Navbar.Text>
                  {/* <Nav.Link href={pathSign} ><FaUserCircle size={30} /> {LogName}</Nav.Link> */}
                  <NavDropdown variant="dark" title={<FaUserCircle size={30} />} id="basic-nav-dropdown">
                    
                    {/* <NavDropdown.Item href="/EditProfile">Edit Profile</NavDropdown.Item> */}
                    <NavDropdown.Item style={EditProfileStyle()} href={EditProfileRedirectTo()}> {DisplayEditProfileText()} </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    {/* <NavDropdown.Item href="/MyBookings">My Bookings</NavDropdown.Item> */}
                    <NavDropdown.Item style={MyBookingsStyle()} href={MyBookingsRedirectTo()}> {DisplayMyBookingsText()} </NavDropdown.Item>
                    <NavDropdown.Item href={RedirectTo()} onClick={()=>Action()}> {DisplyaText()} </NavDropdown.Item>
                  </NavDropdown>
                  {/* <Nav.Link style={{color:"white", fontSize:'20px'}}>{localStorage.getItem('firstName')} {localStorage.getItem('lastName')}</Nav.Link> */}
                </Nav>
                  {/* <Nav>
                    <Nav.Link href="#"></Nav.Link>
                  </Nav> */}
                  <Nav>
                    <Nav.Link href="#"></Nav.Link>
                  </Nav>
              </Navbar.Collapse>
            </Navbar>
            {/* <MyBooking 
              show={open}
              onHide={()=>setOpen(false)}
            /> */}
         </>
           
       )
    }

}
   