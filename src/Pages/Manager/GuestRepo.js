import React from 'react';
import jsPDF from "jspdf";
import "jspdf-autotable";
import { Button, Form, Col } from 'react-bootstrap';
import Title from '../../Components/Title';
import Sidebar from '../../Components/Sidebar';
// import './App.css';

class GuestRepo extends React.Component {

  constructor() {
    super();
    this.state = {
      people: [
        { name: "Keanu Reeves", address: "USA", checkin: "2020/02/12", checkout: "2020/02/13"},
        { name: "Lionel Messi", address: "UK", checkin: "2020/02/12", checkout: "2020/02/13" },
        { name: "Cristiano Ronaldo", address: "Japan", checkin: "2020/02/12", checkout: "2020/02/13" },
        { name: "Jack Nicklaus", address: "China", checkin: "2020/02/12", checkout: "2020/02/13" },
      ]
    }
  }

  exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Guest Details";
    const headers = [["NAME", "ADDRESS", "CHECK_IN_DATE", "CHECK_OUT_DATE"]];

    const data = this.state.people.map(elt=> [elt.name, elt.address, elt.checkin, elt.checkout]);

    let content = {
      startY: 50,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("Guest Report.pdf")
  }

  render() {
      
    return (
        <div className= 'reports'>
            <Sidebar/>
            <Title title="Guest Details"></Title>
        <div class="text-center">
          <Form>
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
                </Form>
        <Button variant="secondary" 
            style={{
                minHeight: "5rem",
                minWidth: "10rem",
                padding: "0rem 0rem 0rem 0rem",
                marginTop: "6rem",
                textAlign: "center",
                }} 
                onClick={() => this.exportPDF()}>Download Report</Button>
      </div>
      </div>
    );
  }
}

export default GuestRepo;