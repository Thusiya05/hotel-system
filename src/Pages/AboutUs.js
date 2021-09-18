import React,{useState,useEffect} from 'react'
import NavBar from "../Components/NavBar"
import Hero from "../Components/Hero"
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import {Container} from 'react-bootstrap'
import Map from '../Components/Map'
import img1 from '../images/base-camp-1.jpg'
import img2 from '../images/base-camp-2.jpg'
import img3 from '../images/functions-3.jpg'
import img4 from '../images/group.jpg'
import {FaPhoneAlt,FaEnvelope,FaMapMarkerAlt,FaStar} from 'react-icons/fa'
import { Col,Row,Button,Form,Modal } from 'react-bootstrap';
import Title from '../Components/Title'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};

const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    stars: {
      display: "flex",
      flexDirection: "row",
    },
    textarea: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      padding: 10,
      margin: "20px 0",
      minHeight: 100,
      width: 300
    },

}


function Review(props) {

    const url = "http://localhost:3030/customer/review/addReviewFeedback"
    const [data, setData] = useState({
    
        feedback: ""
        
    })

    function submit(e){
        e.preventDefault();
        axios.post(url,data)
        .then(res=>{
            props.setadded(!props.added);
            props.onHide();
            setData({
            
                feedback: ""
            
            })
            // alert(" FeedBack Added Successfully");
            toast.success('✅ '+' '+ res.data);
        })
        .catch(err => {
            toast.error('❌ '+' '+ err.response.data);
        })
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        // console.log(newdata)
    }

    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)
  
    const handleClick = value => {
      setCurrentValue(value)
    }
  
    const handleMouseOver = newHoverValue => {
      setHoverValue(newHoverValue)
    };
  
    const handleMouseLeave = () => {
      setHoverValue(undefined)
    }
  
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header style={{backgroundColor:'lightgray'}} closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Review Us
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form onSubmit={(e) => submit(e)}>
        <div style={styles.container}>
            <br/>
      <h2> Rate Us </h2>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
      
      <Form.Group as={Col} controlId="AddDiscountDescription">
                                <Form.Label style={{textAlign:'center'}}><h6>Description</h6></Form.Label>
                                
                                <Row>
                                    <Form.Control onChange={(e)=>handle(e)} value={data.feedback} style={{height:'5rem'}} type="text"   required/>
                                </Row>
                               
     </Form.Group>
                                
                                    
                                {/* <Row>
                                    <Form.Control style={{height:'5rem'}} type="text" required/>
                                    <Form.Control onChange={(e)=>handle(e)} value={data.feedback} type="text" placeholder="Enter Your FeedBack" required/>
                                </Row> 
                               
        </Form.Group> */}

       
        <div style={{textAlign:'center'}}>
             <Button type="submit" variant="info">Submit</Button> <Button onClick={props.onHide} variant="danger">Cancel</Button>
        </div>
      
    </div>
                              
                                
</Form>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor:'lightgray'}}>
            Adventure Base Camp, Kitulgala.
        </Modal.Footer>
      </Modal>
    );
  }
  


const AboutUs = () => {
    const [cart,setCart]=useState(false);
    const [employees,setEmployees]=useState([])
    const [added, setadded] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3030/customer/review/reviewFeedback')
        .then(res => {
            setEmployees(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[added])
   
    return (
        <>
            <div>
                <NavBar
                    path1="/" name1="Home"
                    path2="/rooms/" name2="Rooms" 
                    path3="/activities" name3="Activities"
                    path4="/facilities" name4="Facilities" 
                    path5="/aboutUs" name5="About Us" 
                    pathSign="/signIn" LogName="Log In">    
                </NavBar>
                <br></br>
                <br></br>
                <br></br>
            </div>
            <Hero hero="aboutus">
                <Banner title="We Guide You" subtitle="Know about us and Get touch with us." children="return Home" path="/"></Banner>
            </Hero>
            <div className="activity-info">
                <containerFluid>
                    <h3>Adventure Base Camp - Kitulgala</h3>
                    <p>Located in a sleepy village just 2.5 km from Kitulgala , Adventure Base Camp is a real hideout to enjoy the essence of 
                    nature with rare rafting experience. It is situated bordering the beautiful Kelani Ganga. This amazing place is considered 
                    one of the best hide-outs in the Kithulgala jungle for adventure and nature lovers. It is an exclusive resort offering the 
                    ultimate in adventure activity, relaxation and seclusion from the hustle and bustle of city life.</p>
                    <Container>
                        <div className="row">
                            <div className="col-md-4 col-sm-4">
                                    <img src={img1} alt="activity1"></img>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <img src={img2} alt="activity1"></img>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <img src={img3} alt="activity1" style={{height:'15rem'}}></img>
                                </div>    
                        </div>
                        <div>
                   
      </div>
                        <br></br>
                        <div className="row">
                            <div className="col-md-8 col-sm-8" style={{padding:'3rem 0 0 0'}}>
                                <p>Mr.Upul Nayanajith , who is an expert started this in year 2000, as the very first professional rafting center in Sri Lanka,
                                    ‘Adventure Base Camp’ grew in to one of the biggest adventure, leisure and outward bound training centers in Kithulgala.</p>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <img src={img4} alt="activity1"></img>
                                </div>
                            
                        </div>
                    </Container>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="row">
                        <div className="col-md-6 col-sm-6"style={{padding:"2rem 6rem 0 2rem"}}>
                            <div style={{boxShadow:'1px 2px 6px 1px gray', width:'30rem',height:'30rem',alignItems:'center'}}>
                              <div style={{backgroundColor:"lightBlue"}}>
                                <h3 style={{textAlign:'center',padding:'2rem 0 2rem 0'}}>Get touch with us</h3>
                              </div>  
                                <br></br>
                                        <div className="contacts" style={{alignItems:'center',backgroundColor:"white"}}> 
                                        <br></br>         
                                            <p style={{textAlign:'center',fontSize:'1.2rem'}}><FaPhoneAlt size={45} color={'goldenrod'}/><br></br> <br></br>+94 77 306 9903<br></br>+94 77 603 7136</p>
                                            <br></br>
                                            <p style={{textAlign:'center',fontSize:'1.5rem',fontFamily:"sans-serif"}}><FaEnvelope size={45} color={'goldenrod'}/> <br></br>info@abckitulgala.com</p>
                                            <br></br>
                                            <p></p>
                                        </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6" style={{padding:"2rem 0 0 13rem"}}>
                            <div style={{boxShadow:'1px 2px 6px 1px gray', width:'30rem',height:'30rem',alignItems:'center'}}>
                              <div style={{backgroundColor:"lightBlue"}}>
                                  <h3 style={{textAlign:'center',padding:'2rem 0 2rem 0'}}>Our Location</h3>
                              </div>    
                                <br></br>
                                <div style={{backgroundColor:"white"}}>
                                  <p style={{textAlign:'center',position:"static"}}><FaMapMarkerAlt size={45} color={'goldenrod'}/></p>
                                    <Map />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <Button variant="dark" onClick={()=>setCart(true)}>Review Us</Button>
                    <Review 
                        show={cart}
                        onHide={() => setCart(false)}
                        added={added} 
                        setadded={setadded}
                    ></Review>   
                </containerFluid>
            </div>
            <section className="services">
        <Title title="Customer Feedbacks" />
        <br/>
        <br/>
        <div className="services-center">
              <article className="service">
                 <div>

                            
                        <tbody>
                        {  
                            employees.map(
                               
                        test =>
                                
                        <tr key = {test.id}>  
                        <br/>
                            <td>{test.feedback}</td>
                           
                            {/* <td>{employee.password}</td> */}
                            {/* <td style={{textAlign:'center'}}>
                            <Tippy content="Delete">
                                <Button onClick={()=>Delete(test.id)} type="delete"><FaTrash /></Button>
                            </Tippy>
                             <Tippy content="Edit">
                                <Button onClick={()=>Update(test.id)} type="edit"><FaPen /></Button>
                             </Tippy>
                             </td> */}
                        </tr>
                            )
                        }
                    </tbody>
                         
                                     
                        </div>
              </article>  
        </div>
      </section>
            <div>
                <Footer />
            </div>

        </>
        
    )
}


export default AboutUs
