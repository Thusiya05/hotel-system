import React from 'react';
import jsPDF from "jspdf";
import "jspdf-autotable";
import { Button, Form, Col } from 'react-bootstrap';
import Title from '../../Components/Title';
import { FaFileDownload } from 'react-icons/fa';
import Sidebar from '../../Components/Sidebar';
// import './App.css';

class IncomeRepo extends React.Component {

  constructor() {
    super();
    this.state = {
      people: [
        { date: "2021/05/03", customerid: "8154", amount: "5800LKR" },
        { date: "2021/05/03", customerid: "8155", amount: "5800LKR" },
        { date: "2021/05/03", customerid: "8156", amount: "5800LKR" },
        { date: "2021/05/03", customerid: "8157", amount: "5800LKR" },
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
    const headers = [["DATE", "CUSTOMERID", "AMOUNT"]];

    const data = this.state.people.map(elt=> [elt.date, elt.customerid, elt.amount]);

    let content = {
      startY: 50,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("Income Report.pdf")
  }

  render() {
      
    return (
        <div className= 'reports'>
            <Sidebar/>
            <Title title="Income Report"></Title>
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

export default IncomeRepo;