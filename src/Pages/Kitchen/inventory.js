import React,{ useState, useEffect } from 'react';
import Kcsidebar from '../../Components/kcsidebar'
import { Button,Form,Col,Table,Modal,Row } from 'react-bootstrap';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FaTrash,FaPen,FaSearch } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import date from 'date-and-time';



function Addingr(props){

    const now = new Date();
    const currentDate = date.format(now,'M/DD/YYYY');

    const url = "http://localhost:3030/addIngredient"
    const [data, setData] = useState({
        ingredient_name: "",
        ingredient_qty: "",
        reorder_level: "",
        currentDate: "",
    })

    function submit(e){
        e.preventDefault();
        axios.post(url,{
            ingredientName: data.ingredient_name,
            qty: data.ingredient_qty,
            reorderLevel: data.reorder_level,
            currentDate: currentDate
        })
        .then(res=>{
            // props.setadded(!props.added);
            props.onHide();
            // setData({
            //     ingredient_name: "",
            //     lastName: "",
            //     reorder_level: ""                
            // })
            // alert(res.data);
            toast.success('✅ '+' '+ res.data);
        })
        .catch(err => {
            // toast.error('❌ '+' '+ err.response.data);
            console.log(err)
        })

        // .catch((error) => {
        //     // handle error
        //     // toast.error('❌ ' + error.response.data);
        //     alert(error.response.data);
            
        // })
        // .then(function () {
        //     // always executed
        // });
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
                                <Form.Group as={Col} controlId="ingredientName">
                                <Form.Label style={{textAlign:'center'}}><h6>Item Name</h6></Form.Label>
                                <Form.Control onChange={(e)=>handle(e)} value={data.ingredient_name} id="ingredient_name" type="text" required/>
                                </Form.Group>
                            </Col>             
                        </Row>
                        <Row>
                            <Col md={4}></Col> 
                            <Col md={4}>
                                <Form.Group as={Col} controlId="aingredient">
                                <Form.Label style={{textAlign:'center'}}><h6>In stock</h6></Form.Label>
                                <Form.Control  onChange={(e)=>handle(e)} value={data.ingredient_qty} id="ingredient_qty" type="text" required/>
                                </Form.Group>
                            </Col>             
                        </Row>
                        <Row>
                            <Col md={4}></Col> 
                            <Col md={4}>
                                <Form.Group as={Col} controlId="ingredientReorderLevel">
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
    console.log(props.updateIngredient);
    const [data, setData] = useState({
        id: "",
        qty: "",     
        currentDate: ""  
    })

    const now = new Date();
    const currentDate = date.format(now,'M/DD/YYYY');

    function submit(e){
        e.preventDefault();
        console.log(data.qty);
        axios.post("http://localhost:3030/updateIngredientQty",{
            ingredientId: props.updateIngredient,
            qty: data.qty,
            currentDate: currentDate
        })
        .then(res=>{
            props.onHide(true);
            toast.success('✅ '+' '+ res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
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
            Edit item
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => submit(e)}>

                        <Row>
                            <Col md={4}></Col> 
                            <Col md={4}>
                                <Form.Group as={Col} >
                                <Form.Label style={{textAlign:'center'}}><h6>In stock</h6></Form.Label>
                                <Form.Control type="text" onChange={(e)=>handle(e)} value={data.qty} id="qty" required/>
                                </Form.Group>
                            </Col>             
                        </Row>
                                             
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
    const[updateIngredient, setUpdateIngredient]=useState([]);
    const[ingredients,setIngredient]=useState([]);
    const[ingredients2,setIngredient2]=useState([]);
    const[added, setadded] = useState(true);
    const[editView,setEditView]=useState(false);
    const[addView,setAddView]=useState(false);

    function Update(ingredientId){
        // console.log(id)
        setEditView(true)
        setadded(!added);
        // setEditShow(true);
        setUpdateIngredient(ingredientId);
        // console.log(ingredientId);
    } 

    function Delete(ingredientId){
        const now = new Date();
        const currentDate = date.format(now,'M/DD/YYYY');
        console.log(currentDate)

            axios.delete(`http://localhost:3030/deleteIngredient/${ingredientId}`)
            .then(res=>{
                toast.success('✅ '+' '+ res.data);
            })
            .catch(err => {
                console.log(err)
            })

            axios.post(`http://localhost:3030/saveDeletedIngredientStatus/${ingredientId}`,{
                currentDate: currentDate
            })
    }
    
    useEffect(() => {
        axios.get('http://localhost:3030/ingredientsHaveToReFill')
        .then(res => {
            setIngredient(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[added])

    useEffect(() => {
        axios.get('http://localhost:3030/ingredientsStillNotHaveToReFill')
        .then(res => {
            setIngredient2(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    return (
        <>

        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />

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
                         <th>Re-Order Level</th>
                         <th> </th>
                     </tr>
                 </thead>
                 <tbody>
                     {/* Refillable Ingregients */}
                     {
                         ingredients.map(
                             test=>                              
                             <tr key = {test.ingredientId} style={{backgroundColor:'red'}}>
                                 <td>{test.ingredientId}</td>
                                 <td>{test.ingredientName}</td>
                                 <td>{test.qty}</td>
                                 <td>{test.reorderLevel}</td>
                                 <td style={{textAlign:'center'}}>
                                 <Tippy content="Delete">
                                     <Button onClick={()=>Delete(test.ingredientId)} type="delete"><FaTrash /></Button>
                                 </Tippy>
                                     <Tippy content="Edit">
                                     <Button onClick={()=>Update(test.ingredientId)} type="edit"><FaPen /></Button>
                                 </Tippy>                         
                                 </td>
                             </tr>
                         )                         
                     }

                     {/* Enough Ingredient QTY */}
                     {
                         ingredients2.map(
                             test=>                              
                             <tr key = {test.ingredientId}>
                                 <td>{test.ingredientId}</td>
                                 <td>{test.ingredientName}</td>
                                 <td>{test.qty}</td>
                                 <td>{test.reorderLevel}</td>
                                 <td style={{textAlign:'center'}}>
                                 <Tippy content="Delete">
                                     <Button onClick={()=>Delete(test.ingredientId)} type="delete"><FaTrash /></Button>
                                 </Tippy>
                                     <Tippy content="Edit">
                                     <Button onClick={()=>Update(test.ingredientId)} type="edit"><FaPen /></Button>
                                 </Tippy>                         
                                 </td>
                             </tr>
                         )                         
                     }
  
                                        
                 </tbody>
             </Table>
             <Editingr
                         show={editView}
                         onHide={()=> setEditView(false)} 
                         added={added} 
                         setadded={setadded} 
                         updateIngredient={updateIngredient}
                         setUpdateIngredient={setUpdateIngredient}
                     />
            </div> 
            // :null
         }
         </div>
        </>
    )
 }
export default Inventory