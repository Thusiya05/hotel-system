import React,{ useState, useEffect } from 'react';
import Kcsidebar from '../../Components/kcsidebar'
import { Button,Form,Col,Table,Modal,Row,Nav } from 'react-bootstrap';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FaTrash,FaPen,FaSearch } from "react-icons/fa";
import axios from 'axios';
import { Tab } from 'bootstrap';
import { data } from 'jquery';
import { ToastContainer, toast } from 'react-toastify';


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
         </div>
        </>
    )
 }
export default Cusfoodmenu
