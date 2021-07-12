import React, { Component } from 'react';
import '../CSS/login.css';
import facebook from '../images/facebook.png';
import google from '../images/google.png';
import instagram from '../images/instagram.png';
import NavBar from "../Components/NavBar";
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import axios from 'axios';
// import { useState } from 'react';

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}


export default class Login extends Component {
    myfunc = () => {
		document.querySelector('.login-cont').classList.toggle('s-signup')
      }


    //   async componentDidMount() {
    //     // GET request using fetch with async/await
    //     const response = await fetch('http://localhost:3030/customers'
    //     ).then((result)=>{
    //       result.json().then((resp)=>{
    //         this.setState.({data:resp})
    //       })
    //     })
    //     // const data = await response.json();
    //     // this.setState({ totalReactPackages: data.total })
        
    // }
      

      constructor(props) {
        super(props);
        this.state = {
          firstName: "",
          lastName: "",
          email: "",
          age: "",
          no: "",
          lane: "",
          street: "",
          Bdate: "",
          Bmonth: "",
          Byear: "",
          nic: "",
          telephoneNumber: "",
          password: "",
          confirmPassword: "",

          NICfromDB: "",
          isLoaded: false,

          data: false,

          errors: {
            firstName: '',
            lastName: '',
            email: '',
            age: '',
            no: "",
            lane: "",
            street: "",
            Bdate: "",
            Bmonth: "",
            Byear: "",
            nic: '',
            telephoneNumber: '',
            password: '',
            confirmPassword: '',
            }
        };

        // this.firstNameChange = this.firstNameChange.bind(this);
        // this.lastNameChange = this.lastNameChange.bind(this);
        // this.emailChange = this.emailChange.bind(this);
        // this.ageChange = this.ageChange.bind(this);
        // this.addressChange = this.addressChange.bind(this);
        // this.nicChange = this.nicChange.bind(this);
        // this.telephoneChange = this.telephoneChange.bind(this);
        // this.passwordChange = this.passwordChange.bind(this);
        // this.confirmpasswordChange = this.confirmpasswordChange.bind(this);
        // this.signup=this.signup.bind(this);


      }

      handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
    
        switch (name) {
          case 'firstName': 
            errors.firstName = 
              value.length < 2
                ? 'First name must be atleast 2 characters long!'
                : '';
                this.setState({firstName: event.target.value})    
            break;

          case 'lastName': 
            errors.lastName = 
              value.length < 2
                ? 'Second Name must be atleast 2 characters long!'
                : '';
                this.setState({lastName: event.target.value});
            break; 

          case 'email': 
            errors.email = 
              validEmailRegex.test(value)
                ? ''
                : 'Email is not valid!';
                this.setState({email: event.target.value});
            break;

          case 'age': 
          var letters = /^[0-9]+$/;
            errors.age = 
            !value.match(letters)
                ? 'Invalid Age!'
                : '';
                this.setState({age: event.target.value});
            break;

          case 'no': 
            errors.no = 
              value.length < 1
                ? 'Fields must be filled!'
                : '';
                this.setState({no: event.target.value});
            break;

          case 'lane': 
            errors.lane = 
              value.length < 1
                ? 'Fields must be filled!'
                : '';
                this.setState({lane: event.target.value});
            break;

          case 'street': 
            errors.street = 
              value.length < 1
                ? 'Fields must be filled!'
                : '';
                this.setState({street: event.target.value});
            break;

            case 'Bdate': 
            var letters = /^[0-9]+$/;
              errors.Bdate = 
              !value.match(letters) 
                 ? "Invalid Date!"
                 : '';
                this.setState({Bdate: event.target.value});
            break;

          case 'Bmonth': 
          var letters = /^[0-9]+$/;
          errors.Bmonth = 
          !value.match(letters) 
              ? "Invalid Month!"
              : '';
                this.setState({Bmonth: event.target.value});
            break;

          case 'Byear': 
          var letters = /^[0-9]+$/;
          errors.Byear = 
          !value.match(letters) 
              ? "Invalid Year!"
              : '';
                this.setState({Byear: event.target.value});
            break;
            
          case 'nic': 
          var letters = /^[0-9Vv]+$/;
            errors.nic = 
            !value.match(letters) 
                ? "NIC don't match!"
                : '';
                this.setState({nic: event.target.value});
                
                  // componentDidMount(){ 
                  //   const url = "http://localhost:3030/customers"; 
                  //   const response = await fetch(url);
                  //   const data = await response.json();
                  //   this.setState({NICfromDB: data.result[8]});
                  // }

                  //   if(this.state.nic==NICfromDB){
                  //     errors.nic = "nic already exists!"
                  //   }else{
                  //     errors.nic = "nic correct!"
                  //   }
                

            break;

          case 'telephoneNumber': 
          var letters = /^[0-9]+$/;
            errors.telephoneNumber = 
               !value.match(letters)
                ? "Telephone number don't match!"
                : '';
                this.setState({telephoneNumber: event.target.value});      
            break;          

          case 'password': 
            errors.password = 
              value.length < 8
                ? 'Password must be 8 characters long!'
                : '';
                this.setState({password: event.target.value});
            break;

          case 'confirmPassword': 
          errors.confirmPassword = 
            this.setState({confirmPassword: event.target.value});

          if(this.state.confirmPassword!=this.state.password){                
            errors.confirmPassword = "Password don't match!"
            }else{
            errors.confirmPassword = "Password matched!"
            }
            break;
          default:
            break;
        }
        
    
        this.setState({errors, [name]: value});
      }
    
      handleSubmit = (event) => {
        event.preventDefault();
        if(validateForm(this.state.errors)) {
          console.info('Valid Form')
        }else{
          console.error('Invalid Form')
        }
      }

    //   constructor(props){          
    //       super(props);
    //       this.state={
              
    //           firstName: "",
    //           lastName: "",
    //           email: "",
    //           age: "",
    //           addr: "",
    //           nic: "",
    //           telephoneNumber: "",
    //           password: "",
    //           confirmPassword: ""
    //       };
    
    //   }

      signup = (e) => {
        //   e.preventDefault();
        //   let customer = {
        //         firstName: this.state.firstName, 
        //         lastName:this.state.lastName,
        //         email:this.email,
        //         age:this.state.age,
        //         addr:this.state.addr,
        //         nic:this.state.nic,
        //         telephoneNumber:this.state.telephoneNumber,
        //         password:this.state.password,
        //         confirmPassword:this.state.confirmPassword};
        //         console.log('customer =>' + JSON.stringify(customer));

                axios.post("http://localhost:3030/addCustomer", 
                {
                    "cusFirstName": this.state.firstName,
                    "cusLastName": this.state.lastName,
                    "email": this.state.email,
                    "age": this.state.age,
                    "addressLineOne": this.state.no,
                    "addressLineTwo": this.state.lane,
                    "addressLineThree": this.state.street,
                    "dobDate": this.state.Bdate,
                    "dobMonth": this.state.Bmonth,
                    "dobYear": this.state.Byear,
                    "nic": this.state.nic,
                    "teleNumber": this.state.telephoneNumber,
                    "password": this.state.password
                });              
            }

    //   firstNameChange(event){
    //       this.setState({firstName: event.target.value});
    //   }
    //   lastNameChange(event){
    //     this.setState({lastName: event.target.value});
    //   }
    //   emailChange(event){
    //     this.setState({email: event.target.value});
    //   }
    //   ageChange(event){
    //     this.setState({age: event.target.value});
    //   }
    //   addressChange(event){
    //     this.setState({addr: event.target.value});
    //   }
    //   nicChange(event){
    //     this.setState({nic: event.target.value});
    //   }
    //   telephoneChange(event){
    //     this.setState({telephoneNumber: event.target.value});
    //   }
    //   passwordChange(event){
    //     this.setState({password: event.target.value});
    //   }
    //   confirmpasswordChange(event){
    //     this.setState({confirmPassword: event.target.value });
    //   }

   
    render() {
      const data=this.state.data; 
      console.warn(data);
        
        const {errors} = this.state;

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
                    <div id="loginform" className="login-form login-sign-in">
                        <h2 style={{ color:"black" }}><b>Sign In</b></h2>
                          <div class="loginFormContainer">
                            <label>
                                <span>Email Address</span>
                                <input type="email" name="Email" required></input>
                            </label>
                            <label>
                                <span>Password</span>
                                <input type="password" name="password"></input>
                            </label>

                            <br></br>
                            <br></br>
                            
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
                          <div class="signin_box">
                            <form class="signinform" onSubmit={this.handleSubmit} noValidate>
                                <label>
                                    <span>First Name</span>
                                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} noValidate required />
                                    
                                    {errors.firstName.length > 0 && 
                                                     <span id="popup" className='error'>{errors.firstName}</span>}

                                </label>
                                <label>
                                    <span>Last Name</span>
                                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} noValidate required/>
                                
                                    {errors.lastName.length > 0 && 
                                                     <span  id="popup"  className='error'>{errors.lastName}</span>}
                                
                                </label>
                                <label>
                                    <span>Email</span>
                                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} noValidate required/>
                                
                                {errors.email.length > 0 && 
                                                     <span  id="popup"  className='error'>{errors.email}</span>}
                                
                                </label>
                                <label>
                                    <span>Age</span>
                                    <input type="text" name="age" maxLength={2} value={this.state.age} onChange={this.handleChange} noValidate required/>
                                
                                {errors.age.length > 0 && 
                                                     <span  id="popup"  className='error'>{errors.age}</span>}
                                
                                </label>
                                <label>
                                    <span>Address</span>
                                    <input type="text" placeholder="No:" name="no" value={this.state.no} onChange={this.handleChange} noValidate required/>                                   
                                    {errors.no.length > 0 && 
                                                        <span  id="popup"  className='error'>{errors.no}</span>}
                                    
                                    <input type="text" placeholder="Lane:" name="lane" value={this.state.lane} onChange={this.handleChange} noValidate  required/>                                    
                                    {errors.lane.length > 0 && 
                                                        <span  id="popup"  className='error'>{errors.lane}</span>}

                                    <input type="text" placeholder="Street:" name="street" value={this.state.street} onChange={this.handleChange} noValidate  required/>                                    
                                    {errors.street.length > 0 && 
                                                        <span  id="popup"  className='error'>{errors.street}</span>}
                                    
                                </label>

                                <label>
                                    <span>Date of Birth</span>
                                    <input type="text" maxLength={2} placeholder="Date :" name="Bdate" value={this.state.Bdate} onChange={this.handleChange} noValidate  required/>                                   
                                    {errors.Bdate.length > 0 && 
                                                        <span  id="popup"  className='error'>{errors.Bdate}</span>}
                                    
                                    <input type="text" maxLength={2} placeholder="Month :" name="Bmonth" value={this.state.Bmonth} onChange={this.handleChange} noValidate required />                                    
                                    {errors.Bmonth.length > 0 && 
                                                        <span  id="popup"  className='error'>{errors.Bmonth}</span>}

                                    <input type="text" maxLength={4} placeholder="Year :" name="Byear" value={this.state.Byear} onChange={this.handleChange} noValidate  required/>                                    
                                    {errors.Byear.length > 0 && 
                                                        <span  id="popup"  className='error'>{errors.Byear}</span>}
                                    
                                </label>


                                <label>
                                    <span>NIC</span>
                                    <input type="text" name="nic" maxLength={10} value={this.state.nic} onChange={this.handleChange} noValidate  required/>
                                
                                {errors.nic.length > 0 && 
                                                     <span  id="popup"  className='error'>{errors.nic}</span>}
                                
                                </label>
                                <label>
                                    <span>Telephone Number</span>
                                    <input type="text" name="telephoneNumber" maxLength={10} value={this.state.telephoneNumber} onChange={this.handleChange} noValidate  required/>
                                
                                {errors.telephoneNumber.length > 0 && 
                                                     <span  id="popup"  className='error'>{errors.telephoneNumber}</span>}
                                
                                </label>
                                <label>
                                    <span>Password</span>
                                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} noValidate  required/>
                                
                                {errors.password.length > 0 && 
                                                     <span  id="popup"  className='error'>{errors.password}</span>}
                                
                                </label>
                                <label>
                                    <span>Confirm Password</span>
                                    <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} noValidate required />
                                
                                {errors.confirmPassword.length > 0 && 
                                                     <span  id="popup"  className='error'>{errors.confirmPassword}</span>}
                                
                                </label>
                                <div class="submitButton">
                                    <Button variant="outline-dark" style={{width:"200px"}} className="submit" onClick={this.signup}>Sign Up Now</Button>
                                </div>
                            </form>  
                          </div>  
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}


