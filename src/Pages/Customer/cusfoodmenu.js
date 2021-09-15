import React,{ useState, useEffect } from 'react';
// import Kcsidebar from '../../Components/kcsidebar'
import { Button,Form,Col,Table,Modal,Row,Nav } from 'react-bootstrap';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FaTrash,FaPen,FaSearch,FaMinus,FaPlus} from "react-icons/fa";
import axios from 'axios';
// import { Tab } from 'bootstrap';
// import { data } from 'jquery';
import { ToastContainer, toast } from 'react-toastify';
import "../../CSS/Cusfoodmenu.css";

function ConfirmOrder(props){
    console.log(props.IdOfOrderedFoods);
    console.log(props.QtyOfOrderedFoods);
    console.log(props.NameOfOrderedFoods);

    const foodName = props.NameOfOrderedFoods;
    const food_name = foodName.map((x) => 
        <p>{x}</p>
    );

    const qty = props.QtyOfOrderedFoods;
    const food_qty = qty.map((y) => 
        <p>{y}</p>
    );
    // console.log(QtyArray);
    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{backgroundColor:'lightgray'}}>
          <Modal.Title id="contained-modal-title-vcenter">
            Please Confirm your Order
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>

                        {/* <Row>
                            <Col md={4}></Col> 
                            <Col md={4}>
                                <Form.Group as={Col} controlId="editDiscountName">
                                <Form.Label style={{textAlign:'left'}}><h6 >{food_name} {food_qty}</h6></Form.Label>
                                </Form.Group>
                            </Col>             
                        </Row> */}

                        <Table striped bordered hover size="sxm">
                            <thead>
                                <tr>
                                    <th>Food Name</th>
                                    <th>Qty</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{food_name}</td>
                                    <td>{food_qty}</td>
                                </tr>
                            </tbody>
                        </Table>

                        <div style={{textAlign:'center'}}>
                            <Button type="submit" variant="info">Confirm Order</Button> 
                            <Button onClick={props.onHide} variant="danger">Cancel Order</Button>
                        </div> 
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{backgroundColor:'lightgray'}}>
                    Adventure Base Camp, Kitulgala.
                </Modal.Footer>
            </Modal>
    );
}






const Cusfoodmenu =()=> {
    const [IdOfOrderedFoods, setIdOfOrderedFoods]=useState([])
    const [QtyOfOrderedFoods, setQtyOfOrderedFoods]=useState([])
    const [NameOfOrderedFoods, setNameOfOrderedFoods]=useState([])
    
    const [editshow,setEditShow]=useState(false)
    const[foods,setFood]=useState([]);
    const[editView,setEditView]=useState(false);    
    const [added, setadded] = useState(true);
    const[editFood,setEditFood]=useState(1);

    // function Update(foodId){
    //     // console.log(foodId)
    //     setadded(!added);
    //     setEditView(true);
    //     setEditFood(foodId);
    // }

    useEffect(() => {
        axios.get('http://localhost:3030/cusfoodmenu')
        .then(res => {
            setFood(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    function submit(){
        let foodIdArray = [];
        let foodNameArray = [];
        let QtyArray = [];
        foods.forEach(test => {
            if(test.value>0){
                foodIdArray.push(test.foodId);
                foodNameArray.push(test.foodName);
                QtyArray.push(test.value);
            }

                setIdOfOrderedFoods(foodIdArray);
                setQtyOfOrderedFoods(QtyArray);
                setNameOfOrderedFoods(foodNameArray);
            })
        // console.log(foodIdArray);
        // console.log(QtyArray);
        setEditView(true);
    }

    return (
        <>      
        {/* {...props}   */}
        {
             <div>
             <h4 style={{textAlign:'center',fontFamily:'monospace'}}>Food Menu.</h4>

             <div style={{textAlign:'center'}}>
                        <Button type="button" onClick={() => submit()} variant="info">Place Order</Button> 
                        {/* <Button onClick={props.onHide} variant="danger">Cancel</Button> */}
             </div>

             <br></br>
             <br></br>

             <Table striped bordered hover size="sm" responsive id="CheckInTable">
                 <thead>
                     <tr>
                         <th>Food Name</th>
                         <th>Price</th>
                         <th> </th>
                     </tr>
                 </thead>
                 <tbody>
                     {
                         foods.map(
                             test=>
                             <tr key = {test.foodId}>
                                 <td>{test.foodName}</td>
                                 <td>{test.price}</td>
                                 <td style={{textAlign:'center'}}>
                                    {/* <Tippy content="Minus">
                                        <Button onClick={()=>Update(test.foodId)} type="minus"><FaMinus /></Button>
                                    </Tippy> */}
                                    <input type="number" min="0" id={test.foodId}
                                        onChange={e=>{
                                            let value=e.target.value;
                                            setFood(
                                                foods.map(sd=>{
                                                    if(sd.foodId==e.target.id){
                                                        sd.value=value;
                                                    }
                                                    return sd;

                                                })
                                            );
                                        }}
                                    ></input>
                                </td>
                             </tr>
                         )
                     }
                 </tbody>

                
             </Table>
             <ConfirmOrder
                         show={editView}
                         onHide={()=> setEditView(false)} 

                         QtyOfOrderedFoods={QtyOfOrderedFoods}
                         setQtyOfOrderedFoods={setQtyOfOrderedFoods}

                         IdOfOrderedFoods={IdOfOrderedFoods}
                         setIdOfOrderedFoods={setIdOfOrderedFoods}

                         NameOfOrderedFoods={NameOfOrderedFoods}
                         setNameOfOrderedFoods={setNameOfOrderedFoods}

                         added={added}
                         setadded={setadded}
                     />
            </div> 
            // :null
         }
        </>
    )
 }
export default Cusfoodmenu
