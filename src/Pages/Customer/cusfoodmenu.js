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
import NavBar from '../../Components/NavBar';
import Hero from '../../Components/Hero'
import Banner from '../../Components/Banner'
import date from 'date-and-time';
import food from "../../images/food.jpg"
import '../../CSS/box.css'


function ConfirmOrder(props){
    // console.log(props.PriceofAllFoods)

    // const[date,setDate] = useState(new Date());

    const now = new Date();
    const currentDate = date.format(now,'YYYY-MM-DD');

    var [time,setTime] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setTime(new Date()), 1000 )
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


    const url = "http://143.244.133.116:3030/placeOrder";


    function submit(e){
        e.preventDefault();
        axios.post("http://143.244.133.116:3030/order/createOrderId", {
            customerId: localStorage.getItem('userId'),
            roomId: "",
            orderDate: currentDate,
            orderTime: time.toLocaleTimeString(),
            status: "PENDING",
            totalPrice: props.PriceofAllFoods
        })
        .then(function(res){
            // console.log(res.data);
            axios.post(`http://143.244.133.116:3030/order/placeOrder/${time.toLocaleTimeString()}`,{
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
            Please Confirm your Order <p style={{fontSize:'0.7em'}}>Price : {props.PriceofAllFoods} </p>
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
    const[used,setUsed] = useState(false);
    const[editFood,setEditFood]=useState(1);

    useEffect(() => {
        axios.get('http://143.244.133.116:3030/cusfoodmenu')
        .then(res => {
            setFood(res.data)
            setUsed(true);
            // console.log(foods)
        })
        .catch(err => {
            console.log(err)
        })
    },[used])

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
            toast.error('❌ '+' '+ "Please Select Foods");
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
             <NavBar> </NavBar>
             <br></br>
             <br></br>
             <br></br>
             
             <Hero hero="foodhero">

            <Banner title="Enjoy Your Meal" subtitle="People who love to eat are always the best people" children="My Orders" path="/"></Banner>

        </Hero>
        <br />

             <h4 style={{textAlign:'center',fontFamily:'monospace'}}>Food Menu.</h4>
             

             <div style={{textAlign:'center'}}>
                        <Button type="button" onClick={() => submit()} variant="info">Place Order <h3 style={DisplayPriceStyle()}> Rs. {DisplayPrice()} </h3>  </Button>

             </div>

             <br></br>
             <br></br>

         <div className="row justify-content-center features">

             <table>

             </table>

                     {
                         foods.map(
                             test=>
                            
                            <div key = {test.foodId} className="col-sm-6 col-md-4 col-lg-3 item">
                                <div className="img-cntainer">
                                <br/>
                                    <img className="rounded img-fluid pizza-img" src={food}/>
                                    <br/>
                                    <h2>{test.foodName}</h2>

                                    <div className="d-flex justify-content-around align-items-center">
                                        <h6 className="prce-top">Price : Rs.{test.price}</h6>
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
                                    </div>
                                        {/* <p>{test.foodDescription}</p> */}
                                    <br/>
                                    <br />
                                </div>
                            </div>
                             
                         )
                     }
            </div>     

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
