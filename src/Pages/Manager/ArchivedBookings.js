import React from 'react';
import Sidebar from '../../Components/Sidebar';
import { Form, Col, Table, Button } from 'react-bootstrap'
import Title from '../../Components/Title';
import { FaSearch } from "react-icons/fa";

function ArchivedBookings() {
    return (
        <div className='archivedbookings'>
            <Sidebar/>
            <Title title="Archived Bookings"></Title>
            <Form>
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
                </Form>
                <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Address</th>
      <th>Mobile</th>
      <th>Check-in Date</th>
      <th>Check-out Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>01</td>
      <td>Darshana</td>
      <td>Bandara</td>
      <td>Sri Lanka</td>
      <td>+94767663705</td>
      <td>2018/07/15</td>
      <td>2018/07/17</td>
    </tr>
    <tr>
      <td>02</td>
      <td>John</td>
      <td>Link</td>
      <td>UK</td>
      <td>+25767663705</td>
      <td>2018/07/15</td>
      <td>2018/07/17</td>
    </tr>
    <tr>
      <td>03</td>
      <td>Thusitha</td>
      <td>Karunathilake</td>
      <td>Sri Lanka</td>
      <td>+947670536805</td>
      <td>2018/08/15</td>
      <td>2018/08/17</td>
    </tr>
    <tr>
      <td>04</td>
      <td>Darshana</td>
      <td>Bandara</td>
      <td>Sri Lanka</td>
      <td>+94767663705</td>
      <td>2018/07/15</td>
      <td>2018/07/17</td>
    </tr>
    <tr>
      <td>05</td>
      <td>Viraj</td>
      <td>Kohli</td>
      <td>India</td>
      <td>+90767663222</td>
      <td>2021/07/15</td>
      <td>2021/07/17</td>
    </tr>
  </tbody>
</Table>
            
        </div>
    )
}

export default ArchivedBookings
