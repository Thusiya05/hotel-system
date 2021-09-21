import React from 'react'
import Sidebar from '../../Components/Sidebar';
import Title from '../../Components/Title';
import "../../CSS/Sidebar.css";
import { Button,Form,Col } from 'react-bootstrap';




function Reports() {
    return (
        <div className= 'reports'>
            <Sidebar/>
            <Title title="R E P O R T S"></Title>
            <div class="text-center">
                {/* <Form>
                              <Form.Row>
                                  <Form.Group as={Col} controlId="formGridFirstName">
                                  <Form.Label style={{textAlign:'center',marginLeft:"18rem"}}><h6>Start Date</h6></Form.Label>
                                  <Form.Control style={{textAlign:'center', width:"15rem", marginLeft:"18rem" }} type="date" required/>
                                  </Form.Group>

                                  <Form.Group as={Col} controlId="formGridLastName">
                                  <Form.Label style={{textAlign:'center',marginRight:"18rem"}}><h6>End Date</h6></Form.Label>
                                  <Form.Control style={{textAlign:'center', width:"15rem"  }} type="date" max={new Date().toISOString().split("T")[0]} required/>
                                  </Form.Group>
                              </Form.Row>
                </Form> */}
            <Button 
            size="lg" href="./InventoryRepo" variant="secondary" 
            style={{
                minHeight: "10rem",
                minWidth: "10rem",
                padding: "3.5rem 0rem 0rem 0rem",
                marginTop: "5rem",
                textAlign: "center",
                }}
                >Inventory Reports</Button> <Button size="lg" href="./IncomeRepo" variant="secondary" 
            style={{
                minHeight: "10rem",
                minWidth: "10rem",
                padding: "3.5rem 0rem 0rem 0rem",
                marginTop: "5rem",
                textAlign: "center",
                }}>
            Income Report 
            </Button> <Button 
                size="lg" href="./OrderRepo" variant="secondary" 
                style={{
                    minHeight: "10rem",
                    minWidth: "10rem",
                    padding: "3.5rem 0.5rem 0.5rem 0.5rem",
                    marginTop: "5rem",
                    textAlign: "center",
                    }}
                    >Food Order Report</Button> <Button 
                    size="lg" href="./GuestRepo" variant="secondary" 
                    style={{
                    minHeight: "10rem",
                    minWidth: "10rem",
                    padding: "3.5rem 0rem 0rem 0rem",
                    marginTop: "5rem",
                    textAlign: "center",
                    }}
                    >Guest Details</Button>
            </div>
        </div>
    )
}

export default Reports
