import React,{ useState ,useEffect}  from 'react';
import jsPDF from "jspdf";
import "jspdf-autotable";
import { Button, Form, Col } from 'react-bootstrap';
import Title from '../../Components/Title';
import { FaFileDownload } from 'react-icons/fa';
import Sidebar from '../../Components/Sidebar';
// import './App.css';
import axios from 'axios';

const InventoryRepo=()=> {
  const[InventoryData,setInventoryData]=useState([]);
  var[dateFrom,setDateFrom]=useState(new Date());
  var[dateTo,setDateTo]=useState(new Date());
  
  function exportPDF(){
    
    var from = dateFrom.toString();
    var to = dateTo.toString();
    console.log(from)
    // console.log(typeof(from))
    
    axios.post('http://localhost:3030/report/generateInventoryReport',{
        dateFrom: from,
        dateTo: to
    })
    .then(res => {
      setInventoryData(res.data)
      console.log(InventoryData)
    })
    .catch(err => {
      console.log(err)
    })

    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "INVENTORY REPORT";
    const Description = "Use for Orders";
    const dateStart = "From : " + dateFrom.toString();
    const dateEnds = "To    : " + dateTo.toString();

    const headers = [["Ingredient ID", "Ingredient Name", "Available Qty", "Used Qty"]];

    const data = InventoryData.map(elt=> [elt.ingredientId, elt.ingredientName, elt.availableQty, elt.usedQty]);

    let content = {
      startY: 120,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.text(Description, marginLeft, 60);
    doc.text(dateStart, marginLeft, 80);
    doc.text(dateEnds, marginLeft, 100);
    doc.autoTable(content);
    
    doc.save("Inventory Report.pdf")
  }

    return (
        <div className= 'reports'>
            <Sidebar/>
            <Title title="Inventory Report"></Title>
        <div class="text-center">
          <Form>
                              <Form.Row>
                                  <Form.Group as={Col} controlId="formGridFirstName">
                                  <Form.Label style={{textAlign:'center',marginLeft:"18rem"}}><h6>Start Date</h6></Form.Label>
                                  <Form.Control style={{textAlign:'center', width:"15rem", marginLeft:"18rem" }} 
                                     selected={dateFrom} onChange={(date) => setDateFrom(date.target.value.toString())}
                                    type="date" required/>
                                  </Form.Group>

                                  <Form.Group as={Col} controlId="formGridLastName">
                                  <Form.Label style={{textAlign:'center',marginRight:"18rem"}}><h6>End Date</h6></Form.Label>
                                  <Form.Control style={{textAlign:'center', width:"15rem"  }}
                                    selected={dateTo} onChange={(date) => setDateTo(date.target.value.toString())}
                                    type="date" max={new Date().toISOString().split("T")[0]} required/>
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
                onClick={() => exportPDF()}>Download Report  <FaFileDownload /></Button>
      </div>
      </div>
    );
  }

export default InventoryRepo;