import React, { Component } from 'react'
import logo from "../images/capture6.png"
import { Navbar,Nav } from 'react-bootstrap'

export default class NavBar extends Component {
   render(){
       return(
         <>
           <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
              <Navbar.Brand><img src={logo} alt="ABC" ></img></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/rooms/">Rooms</Nav.Link>
                  <Nav.Link href="/aboutUs">About Us</Nav.Link>
                  <Nav.Link href="/activities">Activities</Nav.Link>
                  <Nav.Link href="/facilities">Facilities</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="/signIn" >Login/Signup</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
         </>
           
       )
      }
   }