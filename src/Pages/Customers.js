import React from 'react';
import Title from '../Components/Title';
import Sidebar  from '../Components/Sidebar';
import { Button,Form,Col,Table, Collapse,Popover,OverlayTrigger } from 'react-bootstrap'
import { FaTrash,FaPen } from "react-icons/fa";

const Customers=()=>{
    return(
        <>
            <div className="customers">
                <Sidebar />
                <Title title="C u s t o m e r s"></Title>
                <div>
                {/* <Button variant="dark" onClick={()=>setShow(!show)}aria-controls="form" aria-expanded={show}>+ Add New User</Button> */}
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label><h6>Name</h6></Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label><h6>Email</h6></Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Form.Row>
                    </Form>    
                </div>
            </div>
           
        </>
    )
}
export default Customers;       