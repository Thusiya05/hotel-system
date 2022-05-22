import React, { Component } from 'react';
import '../CSS/login.css';
import facebook from '../images/facebook.png';
import google from '../images/google.png';
import instagram from '../images/instagram.png';
import NavBar from "../Components/NavBar";
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';

export default class Login extends Component {
    myfunc = () => {
		document.querySelector('.login-cont').classList.toggle('s-signup')
      }
   
    render() {
        return (
            <>
            <NavBar
            path1="/" name1="Home"
            path2="/rooms/" name2="Rooms" 
            path3="/activities" name3="Activities"
            path4="/facilities" name4="Facilities" 
            path5="/aboutUs" name5="About Us" 
            pathSign="/signIn" LogName="Log In">    
        </NavBar>
            <div className="login">
                <div className="login-cont">
                    <div className="login-form login-sign-in">
                        <h2 style={{ color:"black" }}><b>Sign In</b></h2>
                            <label>
                                <span>Email Address</span>
                                <input type="email" name="Email" required></input>
                            </label>
                            <label>
                                <span>Password</span>
                                <input type="password" name="password"></input>
                            </label>
                            <div class="text-center">
                            <Link to="/manager"><Button variant="outline-dark" style={{width:"200px"}} className="submit">Sign In</Button></Link>
                            </div>
                            <p className="forgot-pass">Forgot Password ?</p>
                            <div className="social-media">
                                <ul>
                                    <li><img src={facebook} alt="Facebook.png"></img></li>
                                    <li><img src={google} alt="google.png"></img></li>
                                    <li><img src={instagram} alt="instagram.png"></img></li>
                                </ul>
                            </div>
                    </div>
                    <div className="sub-cont">
                        <div className="login-img" style={{ backgroundImage: "url(/sakshi.jpg)" }}>
                            <div className="img-text m-up">
                                <h2>New here?</h2>
                                <p>Sign up and discover great amount of new opportunities!</p>
                            </div>
                            <div className="img-text m-in">
                                <h2>One of us?</h2>
                                <p>If you already has an account, just sign in. We've missed you!</p>
                            </div>
                            <div className="img-btn" onClick={this.myfunc}>
                                <span className="m-up">Sign Up</span>
                                <span className="m-in">Sign In</span>
                            </div>
                        </div>
                        <div className="login-form sign-up">
                            <h2 style={{ color:"black" }}><b>Sign Up</b></h2>
                                <label>
                                    <span>Name</span>
                                    <input type="text"></input>
                                </label>
                                <label>
                                    <span>Email</span>
                                    <input type="email"></input>
                                </label>
                                <label>
                                    <span>Age</span>
                                    <input type="text"></input>
                                </label>
                                <label>
                                    <span>Address</span>
                                    <input type="text"></input>
                                </label>
                                <label>
                                    <span>NIC</span>
                                    <input type="text"></input>
                                </label>
                                <label>
                                    <span>Telephone Number</span>
                                    <input type="text"></input>
                                </label>
                                <label>
                                    <span>Password</span>
                                    <input type="password"></input>
                                </label>
                                <label>
                                    <span>Confirm Password</span>
                                    <input type="password"></input>
                                </label>
                                <div class="text-center">
                                    <Button variant="outline-dark" style={{width:"200px"}} className="submit">Sign Up Now</Button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}


