import React,{ useState,useEffect } from 'react';
import Sidebar from '../../Components/Sidebar';
import { Button,Form,Col,Table,Modal,Row,Nav } from 'react-bootstrap';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FaTrash,FaPen,FaSearch } from "react-icons/fa";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


function AddDiscount(props){
    const history = useHistory();
    const url = "http://localhost:3030/manager/addDiscounts"
    const [data,setData]=useState({
       discountName:"",
       description:"",
       value:"",
       fromDate:"",
       toDate:"",
       roomTypeID:""
    })

    function submit(e){
        e.preventDefault();
        axios.post(url,data)
        .then(res=>{
            props.setadded(!props.added);
            props.onHide();
            setData({
                discountName:"",
                description:"",
                value:"",
                fromDate:"",
                toDate:"",
                roomTypeID:""
            })
            // alert(res.data);
            toast.success('✅ '+' '+ res.data);
        })
        .catch(err=>{
            // alert(err.response.data);
            toast.error('❌ '+' '+ err.response.data)
        })
    }
    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }
    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{backgroundColor:'lightgray'}}>
          <Modal.Title id="contained-modal-title-vcenter">
            Add New Discounts
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e)=>submit(e)}>
                        <Row> 
                            <Col md={6}>
                                <Form.Group as={Col} controlId="discountName">
                                <Form.Label style={{textAlign:'center'}}><h6>Discount Name</h6></Form.Label>
                                <Form.Control onChange={(e)=>handle(e)} value={data.discountName} type="text" required/>
                                </Form.Group>
                            </Col>             
                       
                            
                            <Col md={6}>
                                <Form.Group as={Col} controlId="value">
                                <Form.Label style={{textAlign:'center'}}><h6>Value</h6></Form.Label>
                                <Form.Control onChange={(e)=>handle(e)} value={data.value} type="text" required/>
                                </Form.Group>
                            </Col>             
                        </Row>
                        <Row> 
                            <Col md={6}>
                                <Form.Group as={Col} controlId="fromDate">
                                <Form.Label style={{textAlign:'center'}}><h6>From</h6></Form.Label>
                                <Form.Control onChange={(e)=>handle(e)} value={data.fromDate}type="date" required/>
                                </Form.Group>
                            </Col>             
                       
                            
                            <Col md={6}>
                                <Form.Group as={Col} controlId="toDate">
                                <Form.Label style={{textAlign:'center'}}><h6>To</h6></Form.Label>
                                <Form.Control onChange={(e)=>handle(e)} value={data.toDate} type="date" required/>
                                </Form.Group>
                            </Col>             
                        </Row>
                        <Row>
                            <Col md={4}>    
                            </Col> 
                            <Col md={4}>
                            <Form.Group as={Col} controlId="roomTypeID">
                                <Form.Label style={{textAlign:'center'}}><h6>Room Type ID</h6></Form.Label>
                                <Row>
                                    <Form.Control onChange={(e)=>handle(e)} value={data.roomTypeID} type="text" required/>
                                </Row>
                               
                                </Form.Group>
                            </Col>             
                        </Row>
                        <Row>
                            <Col md={4}>
                                
                                
                            </Col> 
                            <Col md={4}>
                            <Form.Group as={Col} controlId="description">
                                <Form.Label style={{textAlign:'center'}}><h6>Description</h6></Form.Label>
                                <Row>
                                    <Form.Control style={{height:'5rem'}} onChange={(e)=>handle(e)} value={data.description} type="text" required/>
                                </Row>
                               
                                </Form.Group>
                            </Col>             
                        </Row>
                        <div style={{textAlign:'center'}}>
                            <Button type="submit" variant="info">Add</Button> <Button onClick={props.onHide} variant="danger">Cancel</Button>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{backgroundColor:'lightgray'}}>
                    Adventure Base Camp, Kitulgala.
                </Modal.Footer>
            </Modal>
    );
}
function AddRooms(props){
    const history = useHistory;
    const url = "http://localhost:3030/manager/addRooms"
    const [data,setData]=useState({
        roomNo:"",
        roomTypeID:""
    })

    function submit(e){
        e.preventDefault();
        axios.post(url,data)
        .then(res=>{
            props.setadded(!props.added);
            props.onHide();
            setData({
                roomNo:"",
                roomTypeID:""
            })
            toast.success('✅ '+' '+ res.data);
        })
        .catch(err =>{
            toast.error('❌ '+' '+ err.response.data)
        })
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }

    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{backgroundColor:'lightgray'}}>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Rooms
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e)=>submit(e)}>
                        <Row>
                            <Col md={4}>
                                
                            </Col> 
                            <Col md={4}>
                                <Form.Group as={Col} controlId="roomNo">
                                <Form.Label style={{textAlign:'center'}}><h6>Room No</h6></Form.Label>
                                <Form.Control  onChange={(e)=>handle(e)} value={data.roomNo} type="text" required/>
                                </Form.Group>
                            </Col>             
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={4}></Col> 
                            <Col md={4}>
                                <Form.Group as={Col} controlId="roomTypeID">
                                <Form.Label style={{textAlign:'center'}}><h6>Room Type ID</h6></Form.Label>
                                <Form.Control  onChange={(e)=>handle(e)} value={data.roomTypeID} type="text" required/>
                                </Form.Group>
                            </Col>             
                        </Row>
                        <br></br>
                        <div style={{textAlign:'center'}}>
                            <Button type="submit" variant="info">Add</Button> <Button onClick={props.onHide} variant="danger">Cancel</Button>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{backgroundColor:'lightgray'}}>
                    Adventure Base Camp, Kitulgala.
                </Modal.Footer>
            </Modal>
    );
}
function AddRoomTypes(props){
    const url = "http://localhost:3030/manager/addRoomType"
    const [data,setData]= useState({
        roomTypeID:"",
        roomTypes:"",
        description:"",
        image:"",
        // no_of_rooms:"",
        no_of_persons:"",
        price:""
    })

    function submit(e){
        e.preventDefault();
        axios.post(url,data)
        .then(res=>{
            props.setadded(!props.added);
            props.onHide();
            setData({
                roomTypeID:"",
                roomTypes:"",
                description:"",
                image:"",
                // no_of_rooms:"",
                no_of_persons:"",
                price:""
            })
            toast.success('✅ '+' '+ res.data);
        })
        .catch(err =>{
            toast.error('❌ '+' '+ err.response.data)
        })
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }
    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{backgroundColor:'lightgray'}}>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Room Types
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e)=>submit(e)}>
                        <Row>
                            <Col md={6}>
                            <Form.Group as={Col} controlId="roomTypeID">
                                <Form.Label style={{textAlign:'center'}}><h6>Room Type ID</h6></Form.Label>
                                <Form.Control onChange={(e)=>handle(e)} value={data.roomTypeID} type="text" required/>
                                </Form.Group>
                            </Col> 
                            <Col md={6}>
                            <Form.Group as={Col} controlId="roomTypes">
                                    <Form.Label style={{textAlign:'center'}}><h6>Room Type</h6></Form.Label>
                                    <Form.Control onChange={(e)=>handle(e)} value={data.roomTypes} type="text" required/>
                                    </Form.Group>
                            </Col>             
                        </Row>
                        <br></br>
                        <Row>
                            {/* <Col md={6}>
                            <Form.Group as={Col} controlId="no_of_rooms">
                                <Form.Label style={{textAlign:'center'}}><h6>Number Of Rooms</h6></Form.Label>
                                <Form.Control onChange={(e)=>handle(e)} value={data.no_of_rooms} type="text" required/>
                                </Form.Group>
                            </Col>  */}
                            <Col md={6}>
                                <Form.Group as={Col} controlId="no_of_persons">
                                <Form.Label style={{textAlign:'center'}}><h6>No Of Persons</h6></Form.Label>
                                <Form.Control onChange={(e)=>handle(e)} value={data.no_of_persons} type="text" required/>
                                </Form.Group>
                            </Col>   
                            <Col md={6}>
                                 <Form.Group controlId="image" className="mb-3">
                                    <Form.Label style={{textAlign:'center'}}><h6>Choose Image</h6></Form.Label>
                                    <Form.Control onChange={(e)=>handle(e)} value={data.image} type="file" size="sm" />
                                    {/* <Form.Control type="text" required/> */}
                                </Form.Group> 
                            </Col>           
                        </Row>
                        
                        <Row>
                            
                            <Col md={6}>
                                <Form.Group as={Col} controlId="price">
                                <Form.Label style={{textAlign:'center'}}><h6>Price</h6></Form.Label>
                                <Form.Control onChange={(e)=>handle(e)} value={data.price} type="text" required/>
                                </Form.Group>
                            </Col>  
                            
                            <Col md={6}>
                                <Form.Group as={Col} controlId="description">
                                <Form.Label style={{textAlign:'center'}}><h6>Description</h6></Form.Label>
                                <Row>
                                    <Form.Control style={{height:'5rem'}} onChange={(e)=>handle(e)} value={data.description} type="text" required/>
                                </Row>
                               
                                </Form.Group>
                            </Col>             
                        </Row>
                        {/* <br></br>
                        <Row>
                                       
                        </Row>  */}
                        <div style={{textAlign:'center'}}>
                            <Button type="submit" variant="info">Add</Button> <Button onClick={props.onHide} variant="danger">Cancel</Button>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{backgroundColor:'lightgray'}}>
                    Adventure Base Camp, Kitulgala.
                </Modal.Footer>
            </Modal>
    );
}
function AddOutdoorActivities(props){

    // const url = "http://localhost:3030/manager/activity/addActivity"
    const url = "http://localhost:3030/outdoor-activities";
    const [data,setData]= useState({
        activityName:"",
        checkInTime:"",
        checkOutTime:"",
        description:""
        
    })

    function submit(e){
        e.preventDefault();
        axios.post(url,data)
        .then(res=>{
            props.setadded(!props.added);
            props.onHide();
            setData({
                outdoorActivityName:"",
                // checkInTime:"",
                // checkOutTime:"",
                // description:""
            })
            toast.success('✅ '+' '+ res.data);
        })
        .catch(err =>{
            toast.error('❌ '+' '+ err.response.data)
        })
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }
    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{backgroundColor:'lightgray'}}>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Outdoor Activities
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form  onSubmit={(e) => submit(e)}>
                        <Row>
                            <Col md={4}></Col> 
                            <Col md={4}>
                                <Form.Group as={Col} controlId="outdoorActivityName">
                                <Form.Label style={{textAlign:'center'}}><h6>Outdoor Activity Name</h6></Form.Label>
                                <Form.Control onChange={(e)=>handle(e)} value={data.outdoorActivityName} type="text" required/>
                            
                                </Form.Group>
                            </Col>             
                        </Row>
                        {/* <Row>
                            <Col md={3}></Col> 
                            <Col md={3}>
                                <Form.Group as={Col} controlId="checkInTime">
                                <Form.Label style={{textAlign:'center'}}><h6>From</h6></Form.Label>
                                <Form.Control onChange={(e)=>handle(e)} value={data.checkInTime} type="text" required/>
                                </Form.Group>
                            </Col> 
                            
                            <Col md={3}>
                                <Form.Group as={Col} controlId="checkOutTime">
                                <Form.Label style={{textAlign:'center'}}><h6>To</h6></Form.Label>
                                <Form.Control onChange={(e)=>handle(e)} value={data.checkOutTime} type="text" required/>
                                </Form.Group>
                            </Col>
                            <Col md={3}></Col>                 
                        </Row> */}
                       
                        {/* <br></br>
                        <Row>
                            <Col md={4}>
                                
                            </Col> 
                            <Col md={4}>
                            <Form.Group as={Col} controlId="description">
                                <Form.Label style={{textAlign:'center'}}><h6>Description</h6></Form.Label>
                                <Form.Control onChange={(e)=>handle(e)} value={data.description} type="text" required/>
                               
                                </Form.Group>
                            </Col>             
                        </Row> */}
                        <div style={{textAlign:'center'}}>
                            <Button type="submit" variant="info">Add</Button> <Button onClick={props.onHide} variant="danger">Cancel</Button>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{backgroundColor:'lightgray'}}>
                    Adventure Base Camp, Kitulgala.
                </Modal.Footer>
            </Modal>
    );
}
function EditOutdoorActivities(props){
    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{backgroundColor:'lightgray'}}>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Outdoor Activities
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col md={4}></Col> 
                            <Col md={4}>
                                <Form.Group as={Col} controlId="editActivityName">
                                <Form.Label style={{textAlign:'center'}}><h6>Outdoor Activity Name</h6></Form.Label>
                                <Form.Control type="text" required/>
                                </Form.Group>
                            </Col>             
                        </Row>
                        <Row style={{textAlign:'center', justifyContent: 'center', alignItems: 'center'}}>
                            <tr><td >
                                    <Button variant="dark" type='submit'>8.00am-10.00am</Button> <Button variant="dark" type='submit'>10.00am-12.00pm</Button> <Button variant="dark" type='submit'>2.00pm-4.00pm</Button> <Button variant="dark" type='submit' >4.00pm-6.00pm</Button>
                                </td> 
                            </tr>
                            </Row>
                        {/* <Row>
                            <Col md={4}>
                               
                            </Col> 
                            <Col md={4}>
                            <Row>
                                <Col sm={6}>
                                    <Form.Group as={Col} controlId="editActivityDateFrom">
                                        <Form.Label style={{textAlign:'center'}}><h6>From</h6></Form.Label>
                                        <Form.Control type="time" required/>
                                    </Form.Group>
                                </Col>
                                <Col sm={6}>
                                    <Form.Group as={Col} controlId="editActivityDateTo">
                                        <Form.Label style={{textAlign:'center'}}><h6>To</h6></Form.Label>
                                        <Form.Control type="time" required/>
                                    </Form.Group>
                                </Col>    
                            </Row> */}
                        {/* </Col>
                        </Row> */}
                        <br></br>
                        <Row>
                            <Col md={4}>
                                
                            </Col> 
                            <Col md={4}>
                            <Form.Group as={Col} controlId="editActivityDescription">
                                <Form.Label style={{textAlign:'center'}}><h6>Description</h6></Form.Label>
                                <Row>
                                    <Form.Control style={{height:'5rem'}} type="Email" required/>
                                </Row>
                               
                                </Form.Group>
                            </Col>             
                        </Row>
                        <div style={{textAlign:'center'}}>
                            <Button type="submit" variant="info">Update</Button> <Button onClick={props.onHide} variant="danger">Cancel</Button>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{backgroundColor:'lightgray'}}>
                    Adventure Base Camp, Kitulgala.
                </Modal.Footer>
            </Modal>
    );
}
function EditRoomTypes(props){
    const[data,setData] = useState({
        roomTypeID:"",
        roomTypes:"",
        description:"",
        image:"",
        // no_of_rooms:"",
        no_of_persons:"",
        price:""
    })

    function submitt(e){
        e.preventDefault();
        // console.log(data);
        axios.put(`http://localhost:3030/manager/updateRoomType/${props.editRoomType}`,data)
        .then(res=>{
             props.setadded(!props.added);
             props.onHide();
             toast.success('✅ '+' '+ res.data);
        })
        .catch(err => {
            toast.error('❌ '+' '+ err.response.data)
            props.onHide();
        })
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }

    useEffect(() =>{
        axios.get(`http://localhost:3030/manager/viewUpdateRoomTypeDetails/${props.editRoomType}`)
        .then((res)=>{
            setData(res.data);
        })
    },[props.added])

    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{backgroundColor:'lightgray'}}>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Room Types
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={(e) => submitt(e)}>
                        <Row>
                            <Col md={6}>
                            <Form.Group as={Col} controlId="roomTypeID">
                                <Form.Label style={{textAlign:'center'}}><h6>Room Type ID</h6></Form.Label>
                                <Form.Control onChange={(e)=>handle(e)} value={data.roomTypeID} type="text" disabled/>
                                </Form.Group>
                            </Col> 
                            <Col md={6}>
                            <Form.Group as={Col} controlId="roomTypes">
                                    <Form.Label style={{textAlign:'center'}}><h6>Room Type</h6></Form.Label>
                                    <Form.Control onChange={(e)=>handle(e)} value={data.roomTypes} type="text" required/>
                                    </Form.Group>
                            </Col>             
                        </Row>
                        <br></br>
                        <Row>
                            {/* <Col md={6}>
                            <Form.Group as={Col} controlId="no_of_rooms">
                                <Form.Label style={{textAlign:'center'}}><h6>Number Of Rooms</h6></Form.Label>
                                <Form.Control onChange={(e)=>handle(e)} value={data.no_of_rooms} type="text" required/>
                                </Form.Group>
                            </Col>  */}
                            <Col md={6}>
                                <Form.Group as={Col} controlId="no_of_persons">
                                <Form.Label style={{textAlign:'center'}}><h6>No Of Persons</h6></Form.Label>
                                <Form.Control onChange={(e)=>handle(e)} value={data.no_of_persons} type="text" required/>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                 <Form.Group controlId="image" className="mb-3">
                                    <Form.Label style={{textAlign:'center'}}><h6>Choose Image</h6></Form.Label>
                                    <Form.Control onChange={(e)=>handle(e)} value={data.image} type="file" size="sm" />
                                    {/* <Form.Control type="text" required/> */}
                                </Form.Group> 
                            </Col>              
                        </Row>
                        
                        <Row>
                            
                            <Col md={6}>
                                <Form.Group as={Col} controlId="price">
                                <Form.Label style={{textAlign:'center'}}><h6>Price</h6></Form.Label>
                                <Form.Control onChange={(e)=>handle(e)} value={data.price} type="text" required/>
                                </Form.Group>
                            </Col>  
                            <Col md={4}>
                                <Form.Group as={Col} controlId="description">
                                <Form.Label style={{textAlign:'center'}}><h6>Description</h6></Form.Label>
                                <Row>
                                    <Form.Control style={{height:'5rem'}} onChange={(e)=>handle(e)} value={data.description} type="text" required/>
                                </Row>
                               
                                </Form.Group>
                            </Col>              
                        </Row>
                        
                        
                        <div style={{textAlign:'center'}}>
                            <Button type="submit" variant="info">Update</Button> <Button onClick={props.onHide} variant="danger">Cancel</Button>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{backgroundColor:'lightgray'}}>
                    Adventure Base Camp, Kitulgala.
                </Modal.Footer>
            </Modal>
    );
}
function EditRooms(props){

    const[data,setData] = useState({
        roomNo:"",
        roomTypeID:""
    })


    function submitt(e){
        e.preventDefault();
        // console.log(data);
        axios.put(`http://localhost:3030/manager/updateRooms/${props.editRoom}`,data)
        .then(res=>{
             props.setadded(!props.added);
             props.onHide();
             toast.success('✅ '+' '+ res.data);
        })
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }

    useEffect(() =>{
        axios.get(`http://localhost:3030/manager/viewUpdateRoomDetails/${props.editRoom}`)
        .then((res)=>{
            setData(res.editRoom);
        })
    },[props.added])

    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{backgroundColor:'lightgray'}}>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Rooms
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => submitt(e)}>
                        <Row>
                            <Col md={4}></Col> 
                            <Col md={4}>
                                <Form.Group as={Col} controlId="editRoomNo">
                                <Form.Label style={{textAlign:'center'}}><h6>Room No</h6></Form.Label>
                                <Form.Control value={data.roomNo} type="text" disabled/>
                                </Form.Group>
                            </Col>             
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={4}></Col> 
                            <Col md={4}>
                                <Form.Group as={Col} controlId="roomTypeID">
                                <Form.Label style={{textAlign:'center'}}><h6>Room Type ID</h6></Form.Label>
                                <Form.Control onChange={(e)=>handle(e)} value={data.roomTypeID} type="text" required/>
                                </Form.Group>
                            </Col>             
                        </Row>
                        <br></br>
                        <div style={{textAlign:'center'}}>
                            <Button type="submit" variant="info">Update</Button> <Button onClick={props.onHide} variant="danger">Cancel</Button>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{backgroundColor:'lightgray'}}>
                    Adventure Base Camp, Kitulgala.
                </Modal.Footer>
            </Modal>
    );
}
function EditDiscount(props){

    const[data,setData] = useState({
        discountName:"",
        value:"",
        fromDate:"",
        toDate:"",
        roomTypeID:"",
        description:""
    })

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }

    function submit(e){
        e.preventDefault();
        // console.log(data);
        axios.put(`http://localhost:3030/manager/updateDiscounts/${props.editDiscount}`,data)
        .then(res=>{
             props.setadded(!props.added);
             props.onHide();
             toast.success('✅ '+' '+ res.data);
        })
    }

    useEffect(() =>{
        axios.get(`http://localhost:3030/manager/viewDiscountUpdateDetails/${props.editDiscount}`)
        .then((res)=>{
            setData(res.data);
            console.log(res.data);
        })
    },[props.editDiscount])

    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{backgroundColor:'lightgray'}}>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Discounts
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={(e) => submit(e)}>
                        <Row> 
                            <Col md={6}>
                                <Form.Group as={Col} controlId="discountName">
                                <Form.Label style={{textAlign:'center'}}><h6>Discount Name</h6></Form.Label>
                                <Form.Control onChange={(e)=>handle(e)} value={data.discountName} type="text" required/>
                                </Form.Group>
                            </Col>             
                            <Col md={6}>
                                <Form.Group as={Col} controlId="value">
                                <Form.Label style={{textAlign:'center'}}><h6>Value</h6></Form.Label>
                                <Form.Control onChange={(e)=>handle(e)} value={data.value} type="text" required/>
                                </Form.Group>
                            </Col>             
                        </Row>
                        <Row> 
                            <Col md={6}>
                                <Form.Group as={Col} controlId="fromDate">
                                <Form.Label style={{textAlign:'center'}}><h6>From</h6></Form.Label>
                                <Form.Control onChange={(e)=>handle(e)} value={data.fromDate} type="date" required/>
                                </Form.Group>
                            </Col>             
                            <Col md={6}>
                                <Form.Group as={Col} controlId="toDate">
                                <Form.Label style={{textAlign:'center'}}><h6>To</h6></Form.Label>
                                <Form.Control onChange={(e)=>handle(e)} value={data.toDate} type="date" required/>
                                </Form.Group>
                            </Col>             
                        </Row>
                        <Row>
                            <Col md={4}>    
                            </Col> 
                            <Col md={4}>
                            <Form.Group as={Col} controlId="roomTypeID">
                                <Form.Label style={{textAlign:'center'}}><h6>Room Type ID</h6></Form.Label>
                                <Row>
                                    <Form.Control onChange={(e)=>handle(e)} value={data.roomTypeID} type="text" required/>
                                </Row>
                                </Form.Group>
                            </Col>             
                        </Row>
                        <Row>
                            <Col md={4}>    
                            </Col> 
                            <Col md={4}>
                            <Form.Group as={Col} controlId="description">
                                <Form.Label style={{textAlign:'center'}}><h6>Description</h6></Form.Label>
                                <Row>
                                    <Form.Control style={{height:'5rem'}} onChange={(e)=>handle(e)} value={data.description} type="text" required/>
                                </Row>
                                </Form.Group>
                            </Col>             
                        </Row>
                        <div style={{textAlign:'center'}}>
                            <Button type="submit" variant="info">Update</Button> <Button onClick={props.onHide} variant="danger">Cancel</Button>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{backgroundColor:'lightgray'}}>
                    Adventure Base Camp, Kitulgala.
                </Modal.Footer>
            </Modal>
    );
}
function HotelConfig() {
    const[open,setOpen]=useState(true);
    const[show,setShow]=useState(false);
    const[view,setView]=useState(false);
    const[display,setDisplay]=useState(false);
    const[editView,setEditView]=useState(false);
    const[addView,setAddView]=useState(false);
    const[added, setadded] = useState(true);
    const[roomTypes,setRoomTypes]=useState([]);
    const[rooms,setRooms]= useState([]);
    const[discounts,setDiscounts]=useState([]);
    const[editRoomType,setEditRoomType]=useState([]);
    const[editRoom,setEditRoom]=useState([]);
    const[editDiscount,setEditDiscounts]=useState([]);
    const[addActivity,setaddActivity]=useState([]);

    function UpdateRoomType(id){
        // console.log(id);
        setadded(!added);
        setEditView(true);
        setEditRoomType(id);    
    }

    function UpdateRoom(id){
        setadded(!added);
        setEditView(true);
        setEditRoom(id);
    }

    function UpdateDiscounts(id){
        setadded(!added);
        setEditView(true);
        setEditDiscounts(id);
    }

    function DeleteRoomType(roomTypeID){
        axios.delete(`http://localhost:3030/manager/deleteRoomType/${roomTypeID}`)
        .then(res =>{
            toast.success('✅ '+' '+ res.data);
            setadded(!added);
        })
    }

    function DeleteRoom(roomNo){
        axios.delete(`http://localhost:3030/manager/deleteRoom/${roomNo}`)
        .then(res =>{
            toast.success('✅ '+' '+ res.data);
            setadded(!added);
        })
    }

    useEffect(() => {
            axios.get('http://localhost:3030/manager/viewRoomTypes')
            .then(res=>{
                setRoomTypes(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    },[added])

    useEffect(() => {
        axios.get('http://localhost:3030/manager/viewRooms')
        .then(res=>{
            setRooms(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [added])

    useEffect(() => {
        axios.get('http://localhost:3030/manager/viewDiscounts')
        .then(res=>{
            setDiscounts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [added])

    useEffect(() => {
        //let url = 'http://localhost:3030/manager/activity/viewActivity';
        let url = 'http://localhost:3030/outdoor-activities';
        axios.get(url)
        .then(res=>{
            setaddActivity(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [added])

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="users">
                <Sidebar />
                <br></br>
                
                <div>
                <Nav fill variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link onClick={()=>setOpen(!open)&setShow(false)&setView(false)&setDisplay(false)} style={{width:'10rem'}}>Discounts</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={()=>setShow(!show)&setOpen(false)&setView(false)&setDisplay(false)} style={{width:'10rem'}}>Rooms</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={()=>setView(!view)&setOpen(false)&setShow(false)&setDisplay(false)} style={{width:'10rem'}}>Room Types</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link style={{width:'20rem'}} onClick={()=>setDisplay(!display)&setShow(false)&setOpen(false)&setView(false)} style={{width:'10rem'}}>Activities</Nav.Link>
                    </Nav.Item>
                </Nav>
                </div> 
                <br></br>
                {
                    open?
                    <div>
                    <h4 style={{textAlign:'center',fontFamily:'monospace'}}>Discounts.</h4>
                    <div className="row">
                        <div className="col-md-6">
                        <Button onClick={()=>setAddView(true)} variant="dark">+ Add New Discounts</Button>
                            <AddDiscount
                                show={addView}
                                onHide={()=> setAddView(false)} 
                                added={added} 
                                setadded={setadded}
                            />  
                        </div>
                        <div className="col-md-6" style={{textAlign:'right'}}>
                        <Button><FaSearch /></Button> <input type="text" id="myInput" name="" placeholder="Search by Discount Name" style={{borderBottomStyle:'solid',borderWidth:'1px', width:'15rem'}}></input>
                        </div>
                    </div>
                    
                  
                    <br></br>
                    <br></br>
                    <Table striped bordered hover size="sm" responsive id="CheckInTable">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Discount Name</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Value</th>
                                <th>Description</th>
                                <th>Room Type</th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            discounts.map(
                                test =>
                            <tr key={test.discountID}>
                                <td>{test.discountID}</td>
                                <td>{test.discountName}</td>
                                <td>{test.fromDate}</td>
                                <td>{test.toDate}</td>
                                <td>{test.value}</td>
                                <td>{test.description}</td>
                                <td>{test.roomTypes}</td>
                                <td style={{textAlign:'center'}}>
                                <Tippy content="Delete">
                                    <Button type="delete"><FaTrash /></Button>
                                </Tippy>
                                    <Tippy content="Edit">
                                    <Button onClick={()=>UpdateDiscounts(test.discountID)} type="edit"><FaPen /></Button>
                                    </Tippy>
                                
                                </td>
                            </tr>
                            )
                        }
                        </tbody>
                    </Table>
                    <EditDiscount
                                show={editView}
                                onHide={()=> setEditView(false)}
                                added = {added}
                                setadded = {setadded}
                                editDiscount = {editDiscount}
                                setEditDiscounts = {setEditDiscounts}
                            />
                   </div> :null
                }
                {
                    show?
                    <div>
                    <h4 style={{textAlign:'center',fontFamily:'monospace'}}>Rooms.</h4>
                    <div className="row">
                        <div className="col-md-6">
                        <Button onClick={()=>setAddView(true)} variant="dark">+ Add New Room</Button>
                            <AddRooms 
                                show={addView}
                                onHide={()=>setAddView(false)}
                                added={added} 
                                setadded={setadded}
                            /> 
                        </div>
                        <div className="col-md-6" style={{textAlign:'right'}}>
                            <Button><FaSearch /></Button> <input type="text" id="myInput" name="" placeholder="Search by Room Number" style={{borderBottomStyle:'solid',borderWidth:'1px', width:'15rem'}}></input>
                        </div>
                    </div>
                    <br></br>
                    
                    <Table striped bordered hover size="sm" responsive id="CheckInTable">
                        <thead>
                            <tr>
                                <th>Room Number</th>
                                <th>Room Type ID</th>
                                <th>Room Type</th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                rooms.map( 
                                    test=>
                                        <tr key= {test.roomNo}>
                                            <td>{test.roomNo}</td>
                                            <td>{test.roomTypeID}</td>
                                            <td>{test.roomTypes}</td>
                                            <td style={{textAlign:'center'}}>
                                            <Tippy content="Delete">
                                                <Button onClick={()=>DeleteRoom(test.roomNo)} type="delete"><FaTrash /></Button>
                                            </Tippy>
                                                <Tippy content="Edit">
                                                <Button onClick={()=>UpdateRoom(test.roomNo)} type="edit"><FaPen /></Button>
                                                </Tippy>
                                            
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </Table>
                    <EditRooms
                        show={editView}
                        onHide={()=> setEditView(false)} 
                        editRoom = {editRoom}
                        setEditRoom = {setEditRoom}
                        added = {added}
                        setadded = {setadded}
                    />
                   </div> :null 
                }
                {
                    view?
                    <div>
                    <h4 style={{textAlign:'center',fontFamily:'monospace'}}>Room Types.</h4>
                    <div className="row">
                        <div className="col-md-6">
                        <Button onClick={()=>setAddView(true)} variant="dark">+ Add New Type</Button>
                            <AddRoomTypes 
                                show={addView}
                                onHide={()=>setAddView(false)}
                                added={added} 
                                setadded={setadded} 
                            />
                        </div>
                        <div className="col-md-6" style={{textAlign:'right'}}>
                        <Button><FaSearch /></Button> <input type="text" id="myInput" name="" placeholder="Search by Room Type" style={{borderBottomStyle:'solid',borderWidth:'1px', width:'15rem'}}></input>
                          
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <Table striped bordered hover size="sm" responsive id="CheckInTable">
                        <thead>
                            <tr>
                                <th style={{width:'5rem',paddingBottom:'.5rem'}}>RoomType ID</th>
                                <th style={{width:'9rem',paddingBottom:'2rem'}}>Room Type</th>
                                {/* <th style={{width:'5rem'}}>Number Of Rooms</th> */}
                                <th style={{width:'5rem'}}>Number of Persons</th>
                                <th style={{paddingBottom:'2rem'}}>Description</th>
                                <th style={{paddingBottom:'2rem'}}>Image</th>
                                <th style={{paddingBottom:'2rem'}}>Price</th>
                                <th style={{width:'7rem',textAlign:'center'}}> </th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            roomTypes.map(
                                test =>
                                <tr key={test.roomTypeID}>
                                    <td>{test.roomTypeID}</td>
                                    <td>{test.roomTypes}</td>
                                    {/* <td>{test.no_of_rooms}</td> */}
                                    <td>{test.no_of_persons}</td>
                                    <td>{test.description}</td>
                                    <td>{test.image}</td>
                                    <td>{test.price}</td>
                                    <td style={{textAlign:'center'}}>
                                <Tippy content="Delete">
                                    <Button onClick={()=>DeleteRoomType(test.roomTypeID)} type="delete"><FaTrash /></Button>
                                </Tippy>
                                    <Tippy content="Edit">
                                    <Button onClick={()=>UpdateRoomType(test.roomTypeID)} type="edit"><FaPen /></Button>
                                    </Tippy>
                                
                                </td>
                            </tr>
                            )
                        }
                        </tbody>
                    </Table>
                    <EditRoomTypes
                        show={editView}
                        onHide={()=> setEditView(false)} 
                        editRoomType={editRoomType}
                        setEditRoomType = {setEditRoomType}
                        added = {added}
                        setadded = {setadded}
                    />
                   </div> :null 
                }
                {
                    display?
                    <div>
                    <h4 style={{textAlign:'center',fontFamily:'monospace'}}>Outdoor Activities</h4>
                    <div className="row">
                        <div className="col-md-6">
                        <Button onClick={()=>setAddView(true)} variant="dark">+ Add New Activity</Button>
                            <AddOutdoorActivities 
                                show={addView}
                                onHide={()=>setAddView(false)}
                                added={added} 
                                setadded={setadded}
                            />
                        </div>
                        <div className="col-md-6" style={{textAlign:'right'}}>
                            <Button><FaSearch /></Button> <input type="text" id="myInput" name="" placeholder="Search by Discount Activity" style={{borderBottomStyle:'solid',borderWidth:'1px', width:'15rem'}}></input>
                            
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <Table striped bordered hover size="sm" responsive id="CheckInTable">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Activity Name</th>
                                {/* <th>From</th>
                                <th>To</th>
                                <th>Description</th> */}
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            addActivity.map(
                                (test,index) =>
                                // <tr key={test.id}>
                                //     <td>{test.activityId}</td>
                                //     <td>{test.activityName}</td>
                                //     <td>{test.checkInTime}</td>
                                //     <td>{test.checkOutTime}</td>
                                //     <td>{test.description}</td>
                                //     <td style={{textAlign:'center'}}>
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{test.outdoorActivityName}</td>
                                    {/* <td>{test.checkInTime}</td>
                                    <td>{test.checkOutTime}</td>
                                    <td>{test.description}</td> */}
                                    <td style={{textAlign:'center'}}>
                                <Tippy content="Delete">
                                    <Button onClick={()=>DeleteRoomType(test.roomTypeID)} type="delete"><FaTrash /></Button>
                                </Tippy>
                                    {/* <Tippy content="Edit">
                                    <Button onClick={()=>UpdateRoomType(test.roomTypeID)} type="edit"><FaPen /></Button>
                                    </Tippy> */}
                                
                                </td>
                            </tr>
                            )
                        }
                        </tbody>
                    </Table>
                    <EditOutdoorActivities
                        show={editView}
                        onHide={()=> setEditView(false)} 
                    />
                   </div> :null 
                }    

            </div>
        </>
    )
}

export default HotelConfig;
