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


const Cusfoodmenu =()=> {
    
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
        axios.get('http://localhost:3030/cusfoodmenu')
        .then(res => {
            setFood(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])


    return (
        <>      
                
        {
             <div>
             <h4 style={{textAlign:'center',fontFamily:'monospace'}}>Food Menu.</h4>

             <br></br>
             <br></br>

             {/* <Form onSubmit={(e) => submit(e)}> */}
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
                                    {/* <Tippy content="Minus">
                                        <Button onClick={()=>Update(test.foodId)} type="minus"><FaMinus /></Button>
                                    </Tippy> */}
                                    <input type="number" min="0" id={test.foodId}
                                        // onChange={e=>{
                                        //     let value=e.target.value;
                                        //     setFood(
                                        //         foods.map(sd=>{
                                        //             if(sd.foodId==e.target.id){
                                        //                 sd.value=value;
                                        //             }
                                        //             return sd;
                                        //         })
                                        //     );
                                        // }}
                                    ></input>
                                    {/* <Tippy content="Add">
                                        <Button onClick={()=>Update(test.foodId)} type="add"><FaPlus /></Button>
                                    </Tippy> */}
                                </td>
                             </tr>
                         )
                     }
                 </tbody>
{/* 
                 <div style={{textAlign:'center'}}>
                        <Button type="submit" variant="info">Place Order</Button> 
                        <Button onClick={props.onHide} variant="danger">Cancel</Button>
                 </div> */}
             </Table>
             {/* </Form> */}
             {/* <Editfood
                         show={editView}
                         onHide={()=> setEditView(false)} 
                         editFood={editFood}
                         setEditFood={setEditFood}
                         added={added}
                         setadded={setadded}
                     /> */}
            </div> 
            // :null
         }
        </>
    )
 }
export default Cusfoodmenu
