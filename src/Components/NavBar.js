import React, { Component } from 'react'
import {Link} from "react-router-dom"
import logo from "../images/capture6.png"
import {FaBars} from "react-icons/fa"



export default class NavBar extends Component {
   render(){
       return(
            <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
             <span className="navbar-brand"><img src={logo} alt="ABC" ></img></span>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">{FaBars}</span>
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/rooms/">Rooms</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/aboutUs/">About Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/activities">Activities</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/facilities">Facilities</Link>
                  </li>
                </ul>
                  
                
                {/* <span className="navbar-text">
                  Navbar text with an inline element
                </span> */}
              </div>
            </div>
          </nav>
       )
      }
   }