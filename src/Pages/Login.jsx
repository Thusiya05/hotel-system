import React, { Component } from 'react';
import '../CSS/login.css';
import facebook from '../images/facebook.png';
import google from '../images/google.png';
import instagram from '../images/instagram.png';
import NavBar from "../Components/NavBar";
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import axios from 'axios';



export default class Login extends Component {
    myfunc = () => {
		document.querySelector('.login-cont').classList.toggle('s-signup')
      }

      constructor(props){          
          super(props);
          this.state={
              firstName: "",
              lastName: "",
              email: "",
              age: "",
              addr: "",
              nic: "",
              telephoneNumber: "",
              password: "",
              confirmPassword: ""
          };
          this.firstNameChange = this.firstNameChange.bind(this);
          this.lastNameChange = this.lastNameChange.bind(this);
          this.emailChange = this.emailChange.bind(this);
          this.ageChange = this.ageChange.bind(this);
          this.addressChange = this.addressChange.bind(this);
          this.nicChange = this.nicChange.bind(this);
          this.telephoneChange = this.telephoneChange.bind(this);
          this.passwordChange = this.passwordChange.bind(this);
          this.confirmpasswordChange = this.confirmpasswordChange.bind(this);
          this.signup=this.signup.bind(this);
      }

      signup = (e) => {
          e.preventDefault();
          let customer = {
                firstName: this.state.firstName, 
                lastName:this.state.lastName,
                email:this.email,
                age:this.state.age,
                addr:this.state.addr,
                nic:this.state.nic,
                telephoneNumber:this.state.telephoneNumber,
                password:this.state.password,
                confirmPassword:this.state.confirmPassword};
                console.log('customer =>' + JSON.stringify(customer));

                axios.post("http://localhost:3030/addCustomer", 
                {
                    "cusFirstName": this.state.firstName,
                    "cusLastName": this.state.lastName,
                    "email": this.state.email,
                    "age": this.state.age,
                    "address": this.state.addr,
                    "nic": this.state.nic,
                    "teleNumber": this.state.telephoneNumber,
                    "password": this.state.password
                });              
            }

      firstNameChange(event){
          this.setState({firstName: event.target.value});
      }
      lastNameChange(event){
        this.setState({lastName: event.target.value});
      }
      emailChange(event){
        this.setState({email: event.target.value});
      }
      ageChange(event){
        this.setState({age: event.target.value});
      }
      addressChange(event){
        this.setState({addr: event.target.value});
      }
      nicChange(event){
        this.setState({nic: event.target.value});
      }
      telephoneChange(event){
        this.setState({telephoneNumber: event.target.value});
      }
      passwordChange(event){
        this.setState({password: event.target.value});
      }
      confirmpasswordChange(event){
        this.setState({confirmPassword: event.target.value });
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
                                <span className="m-in">Log In</span>
                            </div>
                        </div>
                        <div className="login-form sign-up">
                            <h2 style={{ color:"black" }}><b>Sign Up</b></h2>
                                <label>
                                    <span>First Name</span>
                                    <input type="text" value={this.state.firstName} onChange={this.firstNameChange}></input>
                                </label>
                                <label>
                                    <span>Last Name</span>
                                    <input type="text" value={this.state.lastName} onChange={this.lastNameChange}></input>
                                </label>
                                <label>
                                    <span>Email</span>
                                    <input type="email" value={this.state.email} onChange={this.emailChange}></input>
                                </label>
                                <label>
                                    <span>Age</span>
                                    <input type="text" value={this.state.age} onChange={this.ageChange}></input>
                                </label>
                                <label>
                                    <span>Address</span>
                                    <input type="text" value={this.state.addr} onChange={this.addressChange}></input>
                                </label>
                                <label>
                                    <span>NIC</span>
                                    <input type="text" value={this.state.nic} onChange={this.nicChange}></input>
                                </label>
                                <label>
                                    <span>Telephone Number</span>
                                    <input type="text" value={this.state.telephoneNumber} onChange={this.telephoneChange}></input>
                                </label>
                                <label>
                                    <span>Password</span>
                                    <input type="password" value={this.state.password} onChange={this.passwordChange}></input>
                                </label>
                                <label>
                                    <span>Confirm Password</span>
                                    <input type="password" value={this.state.confirmPassword} onChange={this.confirmpasswordChange}></input>
                                </label>
                                <div class="text-center">
                                    <Button variant="outline-dark" style={{width:"200px"}} className="submit" onClick={this.signup}>Sign Up Now</Button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}


