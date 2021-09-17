import React, { useState, useEffect } from 'react'
import { Container,Button, Table } from 'react-bootstrap'
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
import { FaCheck, FaEarlybirds} from "react-icons/fa";
import Stesidebar from '../../Components/stesidebar';
import Title from '../../Components/Title';
import axios from 'axios';

const AssignedRooms=()=> {
    const[tasks,setTasks] = useState([]);
    const[added,setAdded] = useState(false);
    const[finish,setFinish] = useState(false);
    console.log(localStorage.getItem('userId')) 

    useEffect(() => {
        axios.get(`http://localhost:3030/api/v1/assignedTasks/${localStorage.getItem('userId')}`)
        .then(res => {
            setTasks(res.data); 
            console.log(tasks);
            setAdded(true);
        })
        .catch(err => {
            console.log(err)
        })
    },[added])

    function Done(orderId){
        axios.post(`http://localhost:3030/order/finishOrder/${orderId}`);
        setFinish(true);
        // setFinish(!finish);
    }
    
    function tableVisibility(){
        if(tasks.orderId==0){
            return({display:'none'});
        }
    }

    function textVisibility(){
        if(tasks.orderId!=0){
            return({display:'none'});
        }
    }
    


    return (
        <>
            <div className="users">
                <Stesidebar/>
                <br></br>
                <Title title="Today Jobs"></Title>
                <div className="row">
                    <Container style={{width:'44rem',borderRadius:'2%'}}>      

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>


                        <h2 style={textVisibility()}>You do not have any assignments yet...!</h2>
                        <h1 style={{color:'red'}}>
                            <Tippy content="Completed">
                                <FaEarlybirds />
                            </Tippy>
                        </h1>

                        <Table striped hover size="sm" responsive id="CheckInTable" style={tableVisibility()}>
                            <thead>
                                <tr style={{backgroundColor:'red'}}>
                                    <th>NEW</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Room Number</th>
                                    <th>Customer Name</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr key = {tasks.orderId}>
                                            <td>{tasks.orderId}</td>
                                            <td>{tasks.roomId}</td>
                                            <td>{tasks.customerName}</td>
                                            <td style={{textAlign:'center'}}>
                                                <Tippy content="Completed">
                                                    <Button onClick={()=>Done(tasks.orderId)} type="done"><FaCheck /></Button>
                                                </Tippy>                                        
                                            </td>
                                    </tr>
                            </tbody>
                        </Table>
                    </Container>
                    
                </div>
            </div>
            <br></br>
        </>
    )
}
export default AssignedRooms;
