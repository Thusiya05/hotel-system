import React,{ useState, useEffect } from 'react';
import Kcsidebar from '../../Components/kcsidebar'
import { Button,Form,Col,Table,Modal,Row,Nav } from 'react-bootstrap';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FaTrash,FaPen,FaSearch } from "react-icons/fa";
import axios from 'axios';
//import { Tab } from 'bootstrap';
//import { data } from 'jquery';
import { ToastContainer, toast } from 'react-toastify';



function Editfood(props){
    console.log(props.editFood)
    const [Ingredients,setIngredients]=useState([])
    
    useEffect(() => {
        axios.get(`http://localhost:3030/foodIngredientById/${props.editFood}`)
        .then(res => {
            let IngredientList = res.data;
            setIngredients(
                IngredientList.map(d => {
                  return {
                    fiId: d.fiId,
                    ingredientId: d.ingredientId
                    
                  };
                })
              );
        })
        .catch(err => alert(err));

    },[props.added])
    
    // const url = "http://localhost:3030/addFoodIngredientsQty";
    // const [data, setData] = useState({
    //     id: "",
    //     ingredient_qty: ""
    // })


    function submit(e){
        e.preventDefault();
        let fiIdArray = [];
        let ingredientQtyArray = [];
        Ingredients.forEach(test => {
            console.log(test.fiId)
            if(test.value!=null){
                ingredientQtyArray.push(test.value);
                fiIdArray.push(test.fiId);
            }
        });
        console.log(ingredientQtyArray);
        console.log(fiIdArray);
        axios.post(`http://localhost:3030/updateRecipe/${props.editFood}`,
         {
            fiIdList: fiIdArray,
            ingredientsQtyList: ingredientQtyArray
        }
        )
        .then(res=>{
            props.setadded(!props.added);
            props.onHide();
            toast.success('✅ '+' '+ res.data);
       })
       .catch(err => {
           toast.error('❌ '+' '+ err.response.data);
           // props.onHide();
       })
    }

    // function handle(e){
    //     const newdata={...data}
    //     newdata[e.target.id] = e.target.value
    //     setData(newdata)
    //     // console.log(newdata)
    // }

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
                                
                                <Row>
                                    <Col md={4}></Col> 
                                        <Col md={4}>
                                            <Form.Group as={Col} >
                                            <Form.Label style={{textAlign:'center'}}><h6>Update Food Recipe</h6></Form.Label>
                                        
                                            <Table>
                                                <tbody>
                                                    {
                                                    Ingredients.map(
                                                        test =>
                                                        <tr key = {test.fiId}>
                                                            <td style={{ display:'inline-flex'}}>
                                                                {test.ingredientId} 
                                                                <Form.Control 
                                                                    type="text" id={test.fiId} style={{width:'15rem', padding:'0.5rem', marginLeft:'2rem'}}
                                                                    onChange={e=>{
                                                                        let value=e.target.value;
                                                                        setIngredients(
                                                                            Ingredients.map(sd=>{
                                                                                if(sd.fiId == e.target.id){
                                                                                    sd.value=value;
                                                                                }
                                                                                return sd;
                                                                            })
                                                                            );
                                                                    }} 
                                                                required/>    
                                                            </td> 
                                                        </tr>
                                                    ) 
                                                    }
                                                </tbody>
                                            </Table>                             
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

const Recipe =()=> {
    // const[open,setOpen]=useState(true);
    // const[show,setShow]=useState(false);
    // const[view,setView]=useState(false);
    // const[display,setDisplay]=useState(false);
    const [editshow,setEditShow]=useState(false)
    const[foods,setFood]=useState([]);
    const[editView,setEditView]=useState(false);    
    const [added, setadded] = useState(true);
    const[editFood,setEditFood]=useState(1);

    function Update(foodId){
        // console.log(foodId)
        setadded(!added);
        setEditView(true);
        setEditFood(foodId);
    }

    useEffect(() => {
        axios.get('http://localhost:3030/foods')
        .then(res => {
            setFood(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])


    return (
        <>
        <div className="users">
                <Kcsidebar />
                <br></br>
                
                
        {
             <div>
             <h4 style={{textAlign:'center',fontFamily:'monospace'}}>Food Menu.</h4>
             <div className="row">
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
                                 <td style={{textAlign:'center'}}>
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
                         editFood={editFood}
                         setEditFood={setEditFood}
                         added={added}
                         setadded={setadded}
                     />
            </div> 
            // :null
         }
         </div>
        </>
    )
 }
export default Recipe
