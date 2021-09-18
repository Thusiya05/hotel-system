import React from 'react';
import jsPDF from "jspdf";
import "jspdf-autotable";
import { Button, Form, Col } from 'react-bootstrap';
import Title from '../../Components/Title';
import { FaFileDownload } from 'react-icons/fa';
import Sidebar from '../../Components/Sidebar';
// import './App.css';

class InventoryRepo extends React.Component {

  constructor() {
    super();
    this.state = {
      people: [
        { id: "1001", name: "sugar", amount: "20Kg" },
        { id: "1002", name: "Dhal", amount: "10Kg" },
        { id: "1003", name: "KeeriSamba", amount: "50Kg" },
        { id: "1004", name: "KakuluSamba", amount: "100Kg" },
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
    const headers = [["ID", "NAME", "AMOUNT"]];

    const data = this.state.people.map(elt=> [elt.id, elt.name, elt.amount]);

    let content = {
      startY: 50,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("Inventory Report.pdf")
  }

  render() {
      
    return (
        <div className= 'reports'>
            <Sidebar/>
            <Title title="Inventory Report"></Title>
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
                // color: "red",
                }} 
                onClick={() => this.exportPDF()}>Download Report  <FaFileDownload /></Button>
      </div>
      </div>
    );
  }
}

export default InventoryRepo;