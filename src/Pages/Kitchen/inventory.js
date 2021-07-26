import React,{ useState } from 'react';
import Kcsidebar from '../../Components/kcsidebar'
import { Button,Form,Col,Table,Modal,Row } from 'react-bootstrap';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FaTrash,FaPen,FaSearch } from "react-icons/fa";
import axios from 'axios';

function Addingr(props){

    const url = "http://localhost:3030/addIngredient"
    const [data, setData] = useState({
        ingredient_name: "",
        ingredient_qty: "",
        reorder_level: ""
    })

    function submit(e){
        e.preventDefault();
        axios.post(url,{
            ingredientName: data.ingredient_name,
            qty: data.ingredient_qty,
            reorderLevel: data.reorder_level
        })
        .then(res=>{
            console.log(res.data)
        })
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        // console.log(newdata)
    }


    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{backgroundColor:'lightgray'}}>
          <Modal.Title id="contained-modal-title-vcenter">
            Add New Ingredient
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => submit(e)}>
                        <Row>
                            <Col md={4}></Col> 
                            <Col md={4}>
                                <Form.Group as={Col} controlId="addDiscountName">
                                <Form.Label style={{textAlign:'center'}}><h6>Item Name</h6></Form.Label>
                                <Form.Control onChange={(e)=>handle(e)} value={data.ingredient_name} id="ingredient_name" type="text" required/>
                                </Form.Group>
                            </Col>             
                        </Row>
                        <Row>
                            <Col md={4}></Col> 
                            <Col md={4}>
                                <Form.Group as={Col} controlId="addDiscountValue">
                                <Form.Label style={{textAlign:'center'}}><h6>In stock</h6></Form.Label>
                                <Form.Control  onChange={(e)=>handle(e)} value={data.ingredient_qty} id="ingredient_qty" type="text" required/>
                                </Form.Group>
                            </Col>             
                        </Row>
                        <Row>
                            <Col md={4}></Col> 
                            <Col md={4}>
                                <Form.Group as={Col} controlId="Re-Order Level">
                                <Form.Label style={{textAlign:'center'}}><h6>Re-Order Level</h6></Form.Label>
                                <Form.Control onChange={(e)=>handle(e)} value={data.reorder_level} id="reorder_level" type="text" required/>                            
                                </Form.Group>
                            </Col>             
                        </Row>
                        <div style={{textAlign:'center'}}>
                            <Button type="submit" variant="info">Add</Button> <Button onClick={props.onHide} variant="danger">Cancel</Button>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{backgroundColor:'lightgray'}}>
                    Adventure Base Camp, Kitulgala.
                </Modal.Footer>
            </Modal>
    );
}

function Editingr(props){
    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{backgroundColor:'lightgray'}}>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit item
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col md={4}></Col> 
                            <Col md={4}>
                                <Form.Group as={Col} controlId="editDiscountName">
                                <Form.Label style={{textAlign:'center'}}><h6 >Ingredient Name</h6></Form.Label>
                                <Form.Control type="text" required/>
                                </Form.Group>
                            </Col>             
                        </Row>
                        <Row>
                            <Col md={4}></Col> 
                            <Col md={4}>
                                <Form.Group as={Col} controlId="editDiscountValue">
                                <Form.Label style={{textAlign:'center'}}><h6>In stock</h6></Form.Label>
                                <Form.Control type="text" required/>
                                </Form.Group>
                            </Col>             
                        </Row>
                        {/* <Row>
                            <Col md={4}>
                                
                            </Col> 
                            <Col md={4}>
                            <Form.Group as={Col} controlId="editDiscountDescription">
                                <Form.Label style={{textAlign:'center'}}><h6>Availability</h6></Form.Label>
                                {/* <Row>
                                    <Form.Control style={{height:'5rem'}} type="Email" required/>
                                </Row> */}
                               
                                {/* </Form.Group>
                            </Col>             
                        </Row> */} */}
                        <div style={{textAlign:'center'}}>
                            <Button type="submit" variant="info">Update</Button> <Button onClick={props.onHide} variant="danger">Cancel</Button>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{backgroundColor:'lightgray'}}>
                    Adventure Base Camp, Kitulgala.
                </Modal.Footer>
            </Modal>
    );
}

function Inventory() {
    // const[open,setOpen]=useState(true);
    // const[show,setShow]=useState(false);
    // const[view,setView]=useState(false);
    // const[display,setDisplay]=useState(false);
    const[editView,setEditView]=useState(false);
    const[addView,setAddView]=useState(false);
    return (
        <>
        <div className="users">
                <Kcsidebar />
                <br></br>
                
                
        {
             <div>
             <h4 style={{textAlign:'center',fontFamily:'monospace'}}>Inventory</h4>
             <div className="row">
                 <div className="col-md-6">
                 <Button onClick={()=>setAddView(true)} variant="dark">+ Add New Item</Button>
                     <Addingr
                         show={addView}
                         onHide={()=> setAddView(false)} 
                     />  
                 </div>
                 <div className="col-md-6" style={{textAlign:'right'}}>
                 <Button><FaSearch /></Button> <input type="text" id="myInput" name="" placeholder="Search by Ingredient Name" style={{borderBottomStyle:'solid',borderWidth:'1px', width:'15rem'}}></input>
                 </div>
             </div>
             
           
             <br></br>
             <br></br>
             <Table striped bordered hover size="sm" responsive id="CheckInTable">
                 <thead>
                     <tr>
                         <th>#</th>
                         <th>Ingredient Name</th>
                         <th>In stock</th>
                         {/* <th>Description</th>
                         <th>Availability</th>
                         <th>Number of Items</th> */}
                         <th> </th>
                     </tr>
                 </thead>
                 <tbody>
                     <tr>
                         <td>1</td>
                         <td>Basmathi Rice</td>
                         <td>30Kg</td>
                         {/* <td>Chicken + Cheese + burger</td>
                         <td>Available</td>
                         <td>5</td> */}
                         <td style={{textAlign:'center'}}>
                         <Tippy content="Delete">
                             <Button type="delete"><FaTrash /></Button>
                         </Tippy>
                             <Tippy content="Edit">
                             <Button onClick={()=>setEditView(true)} type="edit"><FaPen /></Button>
                             </Tippy>
                         
                         </td>
                     </tr>
                     <tr>
                         <td>2</td>
                         <td>Sugar</td>
                         <td>10Kg</td>
                         {/* <td>For two person</td>
                         <td>Unavailable</td>
                         <td>0</td> */}
                         <td style={{textAlign:'center'}}>
                         <Tippy content="Delete">
                             <Button type="delete"><FaTrash /></Button>
                         </Tippy>
                             <Tippy content="Edit">
                             <Button onClick={()=>setEditView(true)} type="edit"><FaPen /></Button>
                             </Tippy>
                         
                         </td>
                     </tr>
                     <tr>
                         <td>3</td>
                         <td>Samba Rice</td>
                         <td>10Kg</td>
                         {/* <td>For two person</td>
                         <td>Unavailable</td>
                         <td>0</td> */}
                         <td style={{textAlign:'center'}}>
                         <Tippy content="Delete">
                             <Button type="delete"><FaTrash /></Button>
                         </Tippy>
                             <Tippy content="Edit">
                             <Button onClick={()=>setEditView(true)} type="edit"><FaPen /></Button>
                             </Tippy>
                         
                         </td>
                     </tr>
                     <tr>
                         <td>4</td>
                         <td>Salt</td>
                         <td>1Kg</td>
                         {/* <td>For two person</td>
                         <td>Unavailable</td>
                         <td>0</td> */}
                         <td style={{textAlign:'center'}}>
                         <Tippy content="Delete">
                             <Button type="delete"><FaTrash /></Button>
                         </Tippy>
                             <Tippy content="Edit">
                             <Button onClick={()=>setEditView(true)} type="edit"><FaPen /></Button>
                             </Tippy>
                         
                         </td>
                     </tr>
                 </tbody>
             </Table>
             <Editingr
                         show={editView}
                         onHide={()=> setEditView(false)} 
                     />
            </div> 
            // :null
         }
         </div>
        </>
    )
 }
export default Inventory