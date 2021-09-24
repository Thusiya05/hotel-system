import React,{ useState ,useEffect} from 'react';
import Sidebar from '../../Components/Sidebar';
import { Form, Col, Table, Button } from 'react-bootstrap'
import Title from '../../Components/Title';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FaTrash,FaPen,FaPrint,FaSearch } from "react-icons/fa";
import axios from 'axios';
// import { FaSearch } from "react-icons/fa";

function ArchivedBookings() {
  const[customers,setCustomers]=useState([])
  const[viewBill,setViewBill]=useState(false)

  useEffect(()=>{
    axios.get(`http://143.244.133.116:3030/receptionist/viewCustomers/CHECK_OUT`)
    .then(res=>{
        console.log(res.data.roomNo);
        setCustomers(res.data)
    })
    .catch(err=>{
        console.log(err);
    })
},[])
    return (
        <div className='archivedbookings'>
            <Sidebar/>
            <Title title="Archived Bookings"></Title>
            {/* <Form>
                              <Form.Row>
                                  <Form.Group as={Col} controlId="formGridFirstName">
                                  <Form.Label style={{textAlign:'center',marginLeft:"18rem"}}><h6>Start Date</h6></Form.Label>
                                  <Form.Control style={{textAlign:'center', width:"15rem", marginLeft:"18rem" }} type="date" max={new Date().toISOString().split("T")[0]} required/>
                                  </Form.Group>

                                  <Form.Group as={Col} controlId="formGridLastName">
                                  <Form.Label style={{textAlign:'center',marginRight:"18rem"}}><h6>End Date</h6></Form.Label>
                                  <Form.Control style={{textAlign:'center', width:"15rem"  }} type="date" max={new Date().toISOString().split("T")[0]} required/>
                                  </Form.Group>
                              </Form.Row>
                </Form> */}
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
            
        </div>
    )
}

export default ArchivedBookings
