import React from 'react'
import logo from "../images/capture6.png"
import { Navbar,Nav } from 'react-bootstrap'
import {FaUserCircle} from 'react-icons/fa'

export default function NavBar({path1,name1,path2,name2,path3,name3,path4,name4,path5,name5,pathSign,LogName}){
   
       return(
         <>
           <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
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
                  <Nav.Link href={pathSign} ><FaUserCircle /> {LogName}</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
         </>
           
       )
      }
   