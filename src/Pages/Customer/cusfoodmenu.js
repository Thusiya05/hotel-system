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

    // const[date,setDate] = useState(new Date());

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });
    
    const foodName = props.NameOfOrderedFoods;
    const food_name = foodName.map((x) => 
        <p>{x}</p>
    );

    const qty = props.QtyOfOrderedFoods;
    const food_qty = qty.map((y) => 
        <p>{y}</p>
    );


    const url = "http://localhost:3030/placeOrder";


    function submit(e){
        e.preventDefault();
        axios.post("http://localhost:3030/order/createOrderId", {
            customerId: localStorage.getItem('userId'),
            roomId: "",
            orderDate: date.toLocaleDateString(),
            orderTime: date.toLocaleTimeString(),
            status: "PENDING"
        })
        .then(function(res){
            // console.log(res.data);
            axios.post(`http://localhost:3030/order/placeOrder/${date.toLocaleTimeString()}`,{
                customerId: localStorage.getItem('userId'),
                foIdList: props.IdOfOrderedFoods,
                qtyList: props.QtyOfOrderedFoods
                // fiIdList: fiIdArray,
                // ingredientsQtyList: ingredientQtyArray
            })            
            props.onHide();
            toast.success('✅ '+' '+ res.data);
        })
        .catch(function(err){
            console.log(err.data);
            toast.error('❌ ' + err.res.data);
        })
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
            Please Confirm your Order
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => submit(e)}>

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
                                    {/* <p> Time : {date.toLocaleTimeString()}</p>
                                     <p> Date : {date.toLocaleDateString()}</p> */}
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
    const [PriceofAllFoods, setPriceofAllFoods]=useState([])
    const [NameOfOrderedFoods, setNameOfOrderedFoods]=useState([])
    
    const [editshow,setEditShow]=useState(false)
    const[foods,setFood]=useState([]);
    const[editView,setEditView]=useState(false);    
    const [added, setadded] = useState(true);
    const[editFood,setEditFood]=useState(1);

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
        let PriceArray = [];
        foods.forEach(test => {
            if(test.value>0){
                foodIdArray.push(test.foodId);
                foodNameArray.push(test.foodName);
                QtyArray.push(test.value);
                PriceArray.push(test.Total_Price);                
            }
                setIdOfOrderedFoods(foodIdArray);
                setQtyOfOrderedFoods(QtyArray);
                setNameOfOrderedFoods(foodNameArray);
                setPriceofAllFoods((PriceArray.reduce((a,v) =>  a = a + v , 0 )));
            })
        if(foodIdArray.length<=0){
            alert("Please Select Foods");
        }else{
            setEditView(true);
        }
    }

    function DisplayPrice(){
        if(PriceofAllFoods!=null){
            return(PriceofAllFoods);
        }

    }
    function DisplayPriceStyle(){
        if(PriceofAllFoods==0){
            return({display:'none'});
        }
    }    
    return (
        <>      
        {/* {...props}   */}

        
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
        
        {
             <div>
             <h4 style={{textAlign:'center',fontFamily:'monospace'}}>Food Menu.</h4>
             

             <div style={{textAlign:'center'}}>
                        <Button type="button" onClick={() => submit()} variant="info">Place Order <h3 style={DisplayPriceStyle()}> $ {DisplayPrice()} </h3>  </Button>

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
                                    <input class="number_increment_decrement_box" type="number" min="0" id={test.foodId}
                                        onChange={e=>{
                                            let value=e.target.value;
                                            let Total_Price=0;
                                            setFood(
                                                foods.map(sd=>{
                                                    if(sd.foodId==e.target.id){
                                                        sd.value=value;
                                                        sd.Total_Price=Total_Price+(sd.value*test.price);
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

                         PriceofAllFoods={PriceofAllFoods}
                         setPriceofAllFoodss={setPriceofAllFoods}

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
