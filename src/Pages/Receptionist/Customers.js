import React,{ useState ,useEffect} from 'react';
import RcsideBar from '../../Components/rcsidebar'
import { Button,Form,Col,Table,Modal,Row,Nav,Container } from 'react-bootstrap'
import { FaTrash,FaPen,FaPrint,FaSearch } from "react-icons/fa";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


function ShowBill(props){
    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
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
                  <div className="center" 
                            style={{justifyContent:'center',textAlign:'center'}}>
                                    <Button href="./Payment" 
                                    type="submit" 
                                    variant="info" 
                                    style={{width:'10rem'} }>
                                        Print</Button> 
                  </div>
                </Container>
              </Modal.Body>
              <Modal.Footer style={{backgroundColor:'lightgray'}}>
                  Adventure Base Camp, Kitulgala.
              </Modal.Footer>
      </Modal>

    );
}

function EditPendingCustomer(props) {

    const [data, setData] = useState({
        bookingStatus:"ACTIVE"
    })

    function submitt(e){
        e.preventDefault();
        console.log(data)
        console.log(props.realId)
        axios.put(`/receptionist/updateBookingStatus/${props.realId}`,data)
        .then(res=>{
            props.setadded(!props.added);
            props.onHide();
            toast.success('✅ '+' '+ res.data);
       })
       .catch(err => {
           toast.error('❌ '+' '+ err.response.data);
           // props.onHide();
       })
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        // console.log(newdata)
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{backgroundColor:'lightgray'}}>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Customer Details
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e)=>submitt(e)}>
                        <Form.Row style={{textAlign:"center"}}>
                            <Form.Group as={Col}></Form.Group>
                            <Form.Group as={Col} controlId="bookingStatus">
                            <Form.Label><h6>Booking Status</h6></Form.Label>
                            <Form.Control onChange={(e)=>handle(e)}  as="select" className="my-1 mr-sm-2"  value={data.bookingStatus} id="bookingStatus" custom>
                                        <option value="ACTIVE">Active</option>
                                        <option value="CHECK_OUT">Checkout</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col}></Form.Group>
                        </Form.Row>
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

const Customers=()=>{
    const[display,setDisplay]=useState(false)
    const[show,setShow]=useState(true)
    const[open,setOpen]=useState(false)
    const[view,setView]=useState(false)
    const[editshow,setEditShow]=useState(false)
    const[viewBill,setViewBill]=useState(false)
    const[added,setadded]=useState(true)
    const[status,setStatus]=useState("ACTIVE")
    const[customers,setCustomers]=useState([])
    const[realId,setRealId]=useState([])

    function pending(){
    //    const stat = "PENDING";
        setOpen(!open)
        setShow(false);
        setView(false);
        setStatus("PENDING");
        setadded(!added);

    }
    function active(){
            setOpen(false)
            setShow(!show);
            setView(false);
            setStatus("ACTIVE");
            setadded(!added);
    
        }

    function checkOut(){
        //    const stat = "PENDING";
            setOpen(false)
            setShow(false);
            setView(!view);
            setStatus("CHECK_OUT");
            setadded(!added);
    
        }

    function updateStatus(id){
        setadded(!added);
        setEditShow(true);
        setRealId(id);
    }

    function DeleteStatus(realBookId){
        axios.delete(`/receptionist/deleteBooking/${realBookId}`)
        .then(res =>{
            toast.success('✅ '+' '+ res.data);
            setadded(!added);
        })
    }

    useEffect(()=>{
        axios.get(`/receptionist/viewCustomers/${status}`)
        .then(res=>{
            console.log(res.data.roomNo);
            setCustomers(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    },[added])
    return(
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
            <div className="customers">
                <RcsideBar />
                <br></br>
                <div>
                <Nav fill variant="tabs" defaultActiveKey="/home" style={{position:"fixed",width:"80%"}}>
                    <Nav.Item>
                        <Nav.Link onClick={()=>pending()}>Pending Customers</Nav.Link>  
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link onClick={()=>active()}>Check In Customers</Nav.Link>  
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link onClick={()=>checkOut()}>Check Out Customers</Nav.Link>  
                    </Nav.Item>
                </Nav>
                    <br></br>
                    <br></br>
                    <br></br>

                        {
                            show?
                            <div>
                            <div>
                                <h4 style={{textAlign:'center',fontFamily:'monospace'}}>Check In Customers.</h4>
                                <div className="row">
                                    <div className="col-md-6">
                                    </div>
                                    <div className="col-md-6" style={{textAlign:'right'}}>
                                    <Button><FaSearch /></Button><input type="text" id="myInput" name="" placeholder="Search by NIC/Name" style={{borderBottomStyle:'solid',borderWidth:'1px', width:'15rem'}}></input>
                                    </div>
                                </div>
                            </div>
                           

                                <div  style={{overflowX:'auto',maxWidth:'100%'}}>

                                <Table striped bordered hover size="sm" responsive="lg" id="CheckInTable" style = {{tableLayout:'fixed', width:'200%'}} >
                                <thead>
                                    <tr>
                                        <th style={{width:'100%'}}>#</th>
                                        <th style={{width:'100%'}}>First Name</th>
                                        <th style={{width:'100%'}}>Last Name</th>
                                        <th style={{width:'100%'}}>NIC</th>
                                        <th style={{width:'100%'}}>Mobile No</th>
                                        <th style={{width:'200%'}}>Email</th>
                                        <th style={{width:'200%'}}>Address</th>
                                        <th style={{width:'100%'}}>Dob</th>
                                        <th style={{width:'100%'}}>Room No</th>
                                        <th style={{width:'100%'}}>check In Date</th>
                                        <th style={{width:'100%'}}>check Out Date</th>
                                        <th style={{width:'100%'}}> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    customers.map(
                                        (test,index)=>
                                        
                                    <tr key={test.email}>
                                        <td>{index+1}</td>
                                        <td>{test.firstName}</td>
                                        <td>{test.lastName}</td>
                                        <td>{test.nic}</td>
                                        <td>{test.contactNo}</td>
                                        <td>{test.email}</td>
                                        <td>{test.address}</td>
                                        <td>{test.dob}</td>
                                        <td>{test.roomNo.map(e=>e+' , ')}</td>
                                        <td>{test.checkInDate}</td>
                                        <td>{test.checkoutDate}</td>
                                        <td style={{textAlign:'center'}}>
                                        <Tippy content="View Bill">
                                            <Button  onClick={()=>setViewBill(true)} type="edit"><FaPrint /></Button>  
                                        </Tippy>
                                        <Tippy content="Edit">
                                            <Button onClick={()=>updateStatus(test.realBookId)} type="edit"><FaPen /></Button>
                                         </Tippy>
                                        </td>
                                    </tr>
                                    )
                                }
                                   
                                </tbody> 
                            </Table>
                            <EditPendingCustomer
                                show={editshow}
                                onHide={()=> setEditShow(false)}  
                                setadded = {setadded}
                                added = {added}
                                realId={realId}
                                setRealId={setRealId}
                            />
                                </div>
                            {/* <EditPendingCustomer
                                show={editshow}
                                onHide={()=> setEditShow(false)} 
                            /> */}
                            <ShowBill
                                show={viewBill}
                                onHide={()=>setViewBill(false)}
                                    />
                            </div>:null
                            
                        }

                        {
                            open?
                            <div>
                            <h4 style={{textAlign:'center',fontFamily:'monospace'}}>Pending Customers</h4>
                            <div className="row">
                            <div className="col-md-6">
                               
                               </div>
                                
                                <div className="col-md-6" style={{textAlign:'right'}}>
                                    <Button><FaSearch /></Button> <input type="text" id="myInput" name="" placeholder="Search by NIC/Name" style={{borderBottomStyle:'solid',borderWidth:'1px', width:'15rem'}}></input>
                                </div>
                            </div>
                            <div  style={{overflowX:'auto',maxWidth:'100%'}}>
                            <Table striped bordered hover size="sm" responsive="lg" id="pendingTable" style = {{tableLayout:'fixed', width:'200%'}} >
                                <thead>
                                    <tr>
                                        <th style={{width:'100%'}}>#</th>
                                        <th style={{width:'100%'}}>First Name</th>
                                        <th style={{width:'100%'}}>Last Name</th>
                                        <th style={{width:'100%'}}>NIC</th>
                                        <th style={{width:'100%'}}>Mobile No</th>
                                        <th style={{width:'200%'}}>Email</th>
                                        <th style={{width:'200%'}}>Address</th>
                                        <th style={{width:'100%'}}>Dob</th>
                                        <th style={{width:'100%'}}>Room No</th>
                                        <th style={{width:'100%'}}>check In Date</th>
                                        <th style={{width:'100%'}}>check Out Date</th>
                                        
                                        <th style={{width:'100%'}}> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    customers.map(
                                        (test,index)=>
                                    <tr key={test.email}>
                                        <td>{index+1}</td>
                                        <td>{test.firstName}</td>
                                        <td>{test.lastName}</td>
                                        <td>{test.nic}</td>
                                        <td>{test.contactNo}</td>
                                        <td>{test.email}</td>
                                        <td>{test.address}</td>
                                        <td>{test.dob}</td>
                                        <td>{test.roomNo.map(e=>e+' , ')}</td>
                                        <td>{test.checkInDate}</td>
                                        <td>{test.checkoutDate}</td>
                                        <td style={{textAlign:'center'}}>
                                        <Tippy content="View Bill">
                                            <Button  onClick={()=>setViewBill(true)} type="edit"><FaPrint /></Button>  
                                        </Tippy>
                                        <Tippy content="Delete">
                                            <Button onClick={()=>DeleteStatus(test.realBookId)} type="delete"><FaTrash /></Button>
                                        </Tippy>
                                         <Tippy content="Edit">
                                            <Button onClick={()=>updateStatus(test.realBookId)} type="edit"><FaPen /></Button>
                                         </Tippy>
                                        
                                        </td>
                                    </tr>
                                    )
                                }
                                </tbody>
                            </Table>
                            <EditPendingCustomer
                                show={editshow}
                                onHide={()=> setEditShow(false)}  
                                setadded = {setadded}
                                added = {added}
                                realId={realId}
                                setRealId={setRealId}
                            />
                            </div>
                            {/* <EditPendingCustomer
                                show={editshow}
                                onHide={()=> setEditShow(false)} 
                            /> */}
                            <ShowBill
                                show={viewBill}
                                onHide={()=>setViewBill(false)}
                            />
                            </div>:null
                            
                        }

                        {
                            view?
                            <div>
                            <h4 style={{textAlign:'center',fontFamily:'monospace'}}>Checkout Customers</h4>
                            <div className="row">
                                <div className="col-md-6">
                               
                                </div>
                                <div className="col-md-6" style={{textAlign:'right'}}>
                                    <Button><FaSearch /></Button> <input type="text" id="myInput" name="" placeholder="Search by NIC/Name" style={{borderBottomStyle:'solid',borderWidth:'1px', width:'15rem'}}></input>
                                </div>
                            </div>
                            <br></br>
                            <br></br>
                            <div  style={{overflowX:'auto',maxWidth:'100%'}}>

                            <Table striped bordered hover size="sm" responsive="lg" id="pendingTable" style = {{tableLayout:'fixed', width:'200%'}} >
                                <thead>
                                    <tr>
                                        <th style={{width:'100%'}}>#</th>
                                        <th style={{width:'100%'}}>First Name</th>
                                        <th style={{width:'100%'}}>Last Name</th>
                                        <th style={{width:'100%'}}>NIC</th>
                                        <th style={{width:'100%'}}>Mobile No</th>
                                        <th style={{width:'100%'}}>Email</th>
                                        <th style={{width:'100%'}}>Address</th>
                                        <th style={{width:'100%'}}>Dob</th>
                                        <th style={{width:'100%'}}>Room No</th>
                                        <th style={{width:'100%'}}>check In Date</th>
                                        <th style={{width:'100%'}}>check Out Date</th>
                                        <th style={{width:'100%'}}> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    customers.map(
                                        (test,index)=>
                                    <tr key={test.email}>
                                        <td>{index+1}</td>
                                        <td>{test.firstName}</td>
                                        <td>{test.lastName}</td>
                                        <td>{test.nic}</td>
                                        <td>{test.contactNo}</td>
                                        <td>{test.email}</td>
                                        <td>{test.address}</td>
                                        <td>{test.dob}</td>
                                        <td>{test.roomNo.map(e=>e+' , ')}</td>
                                        <td>{test.checkInDate}</td>
                                        <td>{test.checkoutDate}</td>
                                        <td style={{textAlign:'center'}}>
                                        <Tippy content="View Bill">
                                            <Button  onClick={()=>setViewBill(true)} type="edit"><FaPrint /></Button>  
                                        </Tippy>
                                        </td>
                                    </tr>
                                    )
                                }
                                </tbody>
                            </Table>
                            </div>
                            <ShowBill
                                show={viewBill}
                                onHide={()=>setViewBill(false)}
                            />
                            </div>:null
                            
                        }
                </div>

            </div>
           
        </>
    )
}
export default Customers;       