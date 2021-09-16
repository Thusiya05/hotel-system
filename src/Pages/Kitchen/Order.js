import React,{ useState, useEffect } from 'react'
import { Button,Container,Form,Col,Table,Modal,Row,Nav } from 'react-bootstrap';
import Tippy from '@tippyjs/react';
import { FaCheck, FaPrint } from "react-icons/fa";
import 'tippy.js/dist/tippy.css';
import Kcsidebar from '../../Components/kcsidebar'
import Title from '../../Components/Title';
import axios from 'axios';

function ViewOrderDerails(props){
    console.log(props.ordersDetails)
    const[foods,setFoods]=useState([])

    useEffect(() => {    
        console.log("hello");
        axios.get(`http://localhost:3030/order/findByoderNumber/${props.ordersDetails}`)
        .then(res => {
            // console.log(res.data); 
            // let order = res.data;
            setFoods(res.data)              
        })
        .catch(err => alert(err));
    },[props.ordersDetails])    

    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{backgroundColor:'lightgray'}}>
          <Modal.Title id="contained-modal-title-vcenter">
            Order Number : {props.ordersDetails}
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <Table striped bordered hover size="sxm">
                            {/* <thead>
                                <tr>
                                    <th>Food Name</th>
                                    <th>Qty</th>
                                </tr>
                            </thead> */}
                            <tbody>
                                {
                                    foods.map(
                                        test =>
                                        <tr>
                                            <td>{test.foodName}</td>
                                            <td>{test.qty}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>

                        <div style={{textAlign:'center'}}>
                            <Button onClick={props.onHide} variant="danger">Back</Button>
                        </div> 
                </Modal.Body>
                <Modal.Footer style={{backgroundColor:'lightgray'}}>
                    Adventure Base Camp, Kitulgala.
                </Modal.Footer>
            </Modal>
    );
}


const Order =() =>{

    const[orders,setOrder] = useState([]);
    const[ordersDetails,setOrderDetails] = useState(1);
    const[openView,setOpenView]=useState(false);


    function SelectOrder(orderId){
        setOpenView(true);
        setOrderDetails(orderId);
        // viewOrder();
    }

    useEffect(() => {
        axios.get('http://localhost:3030/order/allOrders')
        .then(res => {
            setOrder(res.data)
            // console.log(orders )
        })
        .catch(err => {
            console.log(err)
        })
    },[])


    return (
        <>
            <div className="users">
                <Kcsidebar/>
                <br></br>

                <Title title="Orders"></Title>
                <div className="row">
            
                    <Container style={{boxShadow:'1px 2px 6px 1px gray',width:'44rem'}}>
                        
                        <div className="row" style={{justifyContent:'center',alignItems:'center',borderBottomStyle:'solid',borderWidth:'1px',padding:'0.5rem'}} >
                        <Table striped bordered hover size="sm" responsive id="CheckInTable">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Room Number</th>
                                    <th>Ordered Time</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map(
                                        test=>
                                        <tr key = {test.orderId}>
                                            <td>{test.orderId}</td>
                                            <td>{test.roomId}</td>
                                            <td>{test.orderTime}</td>
                                            <td>{test.status}</td>                                            
                                            <td style={{textAlign:'center'}}>
                                                <Tippy content="View">
                                                    <Button  onClick={()=>SelectOrder(test.orderId)} type="edit"><FaPrint /></Button>
                                                </Tippy>
                                                <Tippy content="Finished">
                                                    <Button type="edit"><FaCheck /></Button>
                                                </Tippy>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                        <ViewOrderDerails 
                            show={openView}
                            onHide={() => setOpenView(false)}
                            ordersDetails={ordersDetails}
                            setOrderDetails={setOrderDetails}
                        />
                        </div> 
                        
                    </Container>
            
                </div>
            </div>
            <br></br>
        </>
    )
}

export default Order
