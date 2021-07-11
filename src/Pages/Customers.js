import React,{ useState } from 'react';
import Title from '../Components/Title';
import Sidebar  from '../Components/Sidebar';
import { Button,Form,Col,Table, Collapse,Popover,OverlayTrigger } from 'react-bootstrap'
// import { FaTrash,FaPen } from "react-icons/fa";



const Customers=()=>{
    const[show,setShow]=useState(false)
    return(
        <>
            <div className="customers">
                <Sidebar />
                <Title title="C u s t o m e r s"></Title>
                <div>
                    <Button variant="dark" onClick={()=>setShow(!show)}>Checkin Customers</Button>
                        {
                            show?
                            <Table striped bordered hover size="sm" responsive>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Mobile No</th>
                                        <th>Email</th>
                                        <th>Checkin Date</th>
                                        <th>CheckOut Date</th>
                                        <th>Meal</th>
                                        <th>Room</th>
                                        <th>Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>0717365756</td>
                                        <td>darshana@gmail.com</td>
                                        <td>2021-07-23</td>
                                        <td>2021-07-25</td>
                                        <td>Full bord</td>
                                        <td>Single</td>
                                        <td>New</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Lakith</td>
                                        <td>Rathnayaka</td>
                                        <td>0779685478</td>
                                        <td>lakith@gmail.com</td>
                                        <td>2021-07-23</td>
                                        <td>2021-07-25</td>
                                        <td>half bord</td>
                                        <td>Double</td>
                                        <td>New</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td colSpan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </Table>:null
                        }
                </div>

            </div>
           
        </>
    )
}
export default Customers;       