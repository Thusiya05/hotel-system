import React,{ useState, useEffect } from 'react';
import Kcsidebar from '../../Components/kcsidebar'
import { Button,Form,Col,Table,Modal,Row,Nav } from 'react-bootstrap';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FaTrash,FaPen,FaSearch } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';


function Addfood(props){
    // const Ingredients =()=>{
        // const [show,setShow]=useState(false)
        // const [editshow,setEditShow]=useState(false)
        const [Ingredients,setIngredients]=useState([])
    
        useEffect(() => {
            axios.get('http://localhost:3030/ingredients')
            .then(res => {
                // setIngredients(res.data)
                let IngredientList = res.data;
                setIngredients(
                    IngredientList.map(d => {
                      return {
                        select: false,
                        id: d.ingredientId,
                        name: d.ingredientName
                      };
                    })
                  );
            })
            .catch(err => alert(err));
 
        },[])

        const url = "http://localhost:3030/addFood";
        const urlingre = "http://localhost:3030/addFoodIngredients";
        const [data, setData] = useState({
            food_name: "",
            food_price: "",
            food_description: "",
            ingredients: ""
        })
        
        function submit(e){
            e.preventDefault();

            let ingredientListArray = [];
            Ingredients.forEach(ingredient => {
            if (ingredient.select) {
                ingredientListArray.push(ingredient.id);
            }
            });

            axios.post(url,{
                foodName: data.food_name,
                foodPrice: data.food_price,
                foodDescription: data.food_description
            })

            // axios.post(urlingre,{
            //     foodName: data.food_name,
            //     foodIngredients: ingredientListArray

            //     // Object.keys(ingredientListArray).reduce((array, key) => {
            //     //     return [...array, {key: data[key]}]
            //     // }, [])
            // })
    
            .then(function (response) {

                axios.post(urlingre,{
                    foodName: data.food_name,
                    foodIngredients: ingredientListArray
    
                    // Object.keys(ingredientListArray).reduce((array, key) => {
                    //     return [...array, {key: data[key]}]
                    // }, [])
                })

                // handle success
                // console.log(response);
                // alert(response.data);
                props.onHide();
                toast.success('✅ '+' '+ response.data);

            })
            .catch(function (error) {
                // handle error
                toast.error('❌ ' + error.response.data);
                // alert(error.response.data);
            })

            // console.log(typeof(ingredientListArray))

            
    
            
            // .then((res)=>{
            //     console.log(res.data)
            // })
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
            Add New Food Item
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => submit(e)}>
                        <Row>
                            <Col md={4}></Col> 
                            <Col md={4}>
                                <Form.Group as={Col} 
                                // controlId="addDiscountName"
                                >
                                <Form.Label style={{textAlign:'center'}}><h6>Food Name</h6></Form.Label>
                                <Form.Control onChange={(e)=>handle(e)} value={data.food_name} id="food_name" type="text" required/>
                                </Form.Group>
                            </Col>             
                        </Row>
                        <Row>
                            <Col md={4}></Col> 
                            <Col md={4}>
                                <Form.Group as={Col} 
                                // controlId="addDiscountValue"
                                >
                                <Form.Label style={{textAlign:'center'}}><h6>Price</h6></Form.Label>
                                <Form.Control onChange={(e)=>handle(e)} value={data.food_price} id="food_price" type="text" required/>
                                </Form.Group>
                            </Col>             
                        </Row>
                        <Row>
                            <Col md={4}></Col> 
                            <Col md={4}>
                                <Form.Group as={Col} 
                                // controlId="AddDiscountDescription"
                                >
                                <Form.Label style={{textAlign:'center'}}><h6>Description</h6></Form.Label>
                                <Row>
                                    <Form.Control onChange={(e)=>handle(e)} value={data.food_description} id="food_description" style={{height:'5rem'}} type="text" required/>
                                </Row>                               
                                </Form.Group>
                            </Col>             
                        </Row>

                        <Row>
                            <Col md={4}></Col> 
                            <Col md={4}>
                                <Form.Group as={Col} 
                                // controlId="Ingredients"
                                >
                                <Form.Label style={{textAlign:'center'}}><h6>Ingredients</h6></Form.Label>
                                    <Table striped bordered hover size="sm">
                                        <tbody>
                                        {
                                             Ingredients.map(
                                                ingredient =>
                                                <tr key = {ingredient.id}>
                                                    <td>
                                                        <Form.Control 
                                                        type="checkbox"
                                                        checked={ingredient.select}
                                                        value={ingredient.id}
                                                        onChange={e=>{                                                        
                                                            let value = e.target.checked;
                                                            setIngredients(
                                                                Ingredients.map(sd => {
                                                                  if (sd.id == e.target.value) {
                                                                    sd.select = value;
                                                                  }
                                                                  return sd;
                                                                })
                                                              );
                                                        }} 
                                                        // value={data.ingredients} id="ingredients"  
                                                        style={{height:'1rem'}} />{ingredient.name}
                                                    </td>
                                                </tr>
                                              )
                                        }
                                        </tbody>
                                    </Table>    
                                {/* <Form.Control type="checkbox" required/> */}
                                </Form.Group>
                            </Col>             
                        </Row>

                        <div style={{textAlign:'center'}}>
                            <Button type="submit" variant="info">Add</Button> 
                            <Button onClick={props.onHide} variant="danger">Cancel</Button>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{backgroundColor:'lightgray'}}>
                    Adventure Base Camp, Kitulgala.
                </Modal.Footer>
            </Modal>
    );
}


function Editfood(props){
    console.log(props.updateFood);
    const [data, setData] = useState({
        id: "",
        price: ""       
    })

    function submit(e){
        e.preventDefault();
        console.log(data.qty);
        axios.post("http://localhost:3030/updateFoodPrice",{
            foodId: props.updateFood,
            price: data.price
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
            Edit Food
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => submit(e)}>
                        {/* <Row>
                            <Col md={4}></Col> 
                            <Col md={4}>
                                <Form.Group as={Col} controlId="editDiscountName">
                                <Form.Label style={{textAlign:'center'}}><h6 >Food Name</h6></Form.Label>
                                <Form.Control type="text" required/>
                                </Form.Group>
                            </Col>             
                        </Row> */}
                        <Row>
                            <Col md={4}></Col> 
                            <Col md={4}>
                                <Form.Group as={Col} controlId="editDiscountValue">
                                <Form.Label style={{textAlign:'center'}}><h6>Price</h6></Form.Label>
                                <Form.Control type="text" onChange={(e)=>handle(e)} value={data.price} id="price" required/>
                                </Form.Group>
                            </Col>             
                        </Row>
                        {/* <Row>
                            <Col md={4}>
                                
                            </Col> 
                            <Col md={4}>
                            <Form.Group as={Col} controlId="editDiscountDescription">
                                <Form.Label style={{textAlign:'center'}}><h6>Availability</h6></Form.Label>
                                <Row>
                                    <Form.Control style={{height:'5rem'}} type="Email" required/>
                                </Row>
                               
                                </Form.Group>
                            </Col>             
                        </Row> */}
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

function Menu() {
    // const[open,setOpen]=useState(true);
    // const[show,setShow]=useState(false);
    // const[view,setView]=useState(false);
    // const[display,setDisplay]=useState(false);
    const[added, setadded] = useState(true);
    const[foods,setFood]=useState([]);
    const[updateFood, setUpdateFood]=useState([]);
    const[editView,setEditView]=useState(false);
    const[addView,setAddView]=useState(false);

    useEffect(() => {
        axios.get('http://localhost:3030/foods')
        .then(res => {
            setFood(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    function Update(foodId){
        // console.log(id)
        setEditView(true)
        setadded(!added);
        // setEditShow(true);
        setUpdateFood(foodId);
        // console.log(ingredientId);
    } 

    function Delete(foodId){
        console.log("hello")
            axios.delete(`http://localhost:3030/deleteFood/${foodId}`)
            .then(res=>{
                toast.success('✅ '+' '+ res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }
    


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
             <h4 style={{textAlign:'center',fontFamily:'monospace'}}>Food Menu.</h4>
             <div className="row">
                 <div className="col-md-6">
                 <Button onClick={()=>setAddView(true)} variant="dark">+ Add New Item</Button>
                     <Addfood
                         show={addView}
                         onHide={()=> setAddView(false)} 
                     />  
                 </div>
                 <div className="col-md-6" style={{textAlign:'right'}}>
                 <Button><FaSearch /></Button> <input type="text" id="myInput" name="" placeholder="Search by Food Name" style={{borderBottomStyle:'solid',borderWidth:'1px', width:'15rem'}}></input>
                 </div>
             </div>
             
           
             <br></br>
             <br></br>
             <Table striped bordered hover size="sm" responsive id="CheckInTable">
                 <thead>
                     <tr>
                         <th>#</th>
                         <th>Food Name</th>
                         <th>Price</th>
                         {/* <th>Availability</th> */}
                         {/* <th>Number of Remaining Items</th> */}
                         <th> </th>
                     </tr>
                 </thead>
                 <tbody>
                     {
                         foods.map(
                             test=>
                             <tr key = {test.foodId}>
                                 <td>{test.foodId}</td>
                                 <td>{test.foodName}</td>
                                 <td>{test.price}</td>
                                 {/* <td>Unavailable</td> */}
                                 {/* <td>{test.availableQty}</td> */}
                                 <td style={{textAlign:'center'}}>
                                    <Tippy content="Delete">
                                        <Button onClick={()=>Delete(test.foodId)} type="delete"><FaTrash /></Button>
                                    </Tippy>
                                        <Tippy content="Edit">
                                        <Button onClick={()=>Update(test.foodId)} type="edit"><FaPen /></Button>
                                    </Tippy>
                                </td>
                             </tr>
                         )
                     }
                 </tbody>
             </Table>
             <Editfood
                         show={editView}
                         onHide={()=> setEditView(false)} 
                         added={added} 
                         setadded={setadded} 
                         updateFood={updateFood}
                         setUpdateFood={setUpdateFood}
                     />
            </div> 
            // :null
         }
         </div>
        </>
    )
 }
export default Menu
