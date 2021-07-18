import React from 'react';
import Sidebar from '../Components/Sidebar';
import { Table, Button, Form, Col,Row } from 'react-bootstrap'
import Title from '../Components/Title';
import { FaSearch } from "react-icons/fa";

function guest() {
    return (
        <div className='guest'>
        <Sidebar/>
        <Title title="Guest List"></Title>
        
        <br></br><br></br>
       
          <Row>
            <Col sm={6}>
              <Form.Label style={{textAlign:'center'}}><h6>Check-in Date</h6></Form.Label>
              <Form.Control type="date" required/>
            </Col>
            <Col sm={6}>
            <Form.Label style={{textAlign:'center'}}><h6>Check-out Date</h6></Form.Label>
                        <Form.Control type="date" required/>
            </Col>
          </Row>
          <div className="row">
          <div className="col-md-6">
            {/* <Form.Label style={{textAlign:'center'}}><h6>Room Type</h6></Form.Label> */}
            <Form.Control as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom>
                <option value="1">-Filter by Room Type-</option>
                <option value="2">Single Room</option>
                <option value="3">Double Room</option>
                <option value="3">Family Room</option>
            </Form.Control>
          </div>
          <div className="col-md-6" style={{textAlign:"right"}}>
            <Button><FaSearch /></Button> <input type="text" id="myInput" name="" placeholder="Search by NIC/Name" style={{borderBottomStyle:'solid',borderWidth:'1px', width:'25rem'}}></input>
          </div>
          
        </div>

         

        <br></br>
        <br></br>
           
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
      <th>No. of Guests</th>
      <th>No. of Rooms</th>
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
      <td>5</td>
      <td>2</td>
    </tr>
    <tr>
      <td>02</td>
      <td>John</td>
      <td>Link</td>
      <td>UK</td>
      <td>+25767663705</td>
      <td>2018/07/15</td>
      <td>2018/07/17</td>
      <td>5</td>
      <td>3</td>
    </tr>
    <tr>
      <td>03</td>
      <td>Thusitha</td>
      <td>Karunathilake</td>
      <td>Sri Lanka</td>
      <td>+947670536805</td>
      <td>2018/08/15</td>
      <td>2018/08/17</td>
      <td>2</td>
      <td>1</td>
    </tr>
    <tr>
      <td>04</td>
      <td>Darshana</td>
      <td>Bandara</td>
      <td>Sri Lanka</td>
      <td>+94767663705</td>
      <td>2018/07/15</td>
      <td>2018/07/17</td>
      <td>6</td>
      <td>3</td>
    </tr>
    <tr>
      <td>05</td>
      <td>Viraj</td>
      <td>Kohli</td>
      <td>India</td>
      <td>+90767663222</td>
      <td>2021/07/15</td>
      <td>2021/07/17</td>
      <td>10</td>
      <td>4</td>
    </tr>
  </tbody>
</Table>
        </div>
    )
}

export default guest
