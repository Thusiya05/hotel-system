import React,{ useState, useEffect } from 'react'
import { Button,Container,Form,Col,Table,Modal,Row,Nav } from 'react-bootstrap';
import Tippy from '@tippyjs/react';
import { FaCheck, FaPrint, FaClipboardCheck, FaMale } from "react-icons/fa";
import 'tippy.js/dist/tippy.css';
import Kcsidebar from '../../Components/kcsidebar'
import Title from '../../Components/Title';
import axios from 'axios';

function ViewOrderDerails(props){
    // console.log(props.ordersDetails)
    const[foods,setFoods]=useState([])

    useEffect(() => {    
        // console.log("hello");
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

function AssignStewardToOrder(props){
    // console.log(props.ordersDetails)
    const[stewards,setStewards]=useState([]);
    const [status3, setStatus3]=useState(false);


    useEffect(() => {    
        // console.log("hello");
        axios.get(`http://localhost:3030/api/v1/avaialableStewards`)
        .then(res => {
            // let order = res.data;
            setStewards(res.data)              
            console.log(stewards);
        })
        .catch(err => alert(err));
    },[props.ordersDetails])  
    
    function AssignSteward(empId){
        console.log(empId);
        console.log(props.ordersDetails);
        const url = "http://localhost:3030/order/assignSteward";
        setStatus3(!status3);

        axios.post(url,{
            empId: empId,
            orderId: props.ordersDetails
        })
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
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
            Order Number : {props.ordersDetails}
          </Modal.Title> 
                </Modal.Header>
                <Modal.Body>
                        <Table striped bordered hover size="sxm">
                            <thead>
                                <tr style={{backgroundColor:'red'}}>
                                    <th>AVAILABLE STEWARDS</th>                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    stewards.map(
                                        test =>
                                        <tr key = {test.empId}>
                                            <td>{test.fName} {test.lName}</td>
                                            <td>
                                                <Button onClick={()=>AssignSteward(test.empId)} variant="danger">Assign</Button>
                                            </td>
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



function Order() {
    
    const[pendingOrders,setPendingOrder] = useState([]);
    const[inProgressOrders,setInProgressOrder] = useState([]);
    const[ordersDetails,setOrderDetails] = useState(1);
    const [added, setadded] = useState(true);
    const[openView,setOpenView]=useState(false);
    const[openView2,setOpenView2]=useState(false);
    const [status1, setStatus1]=useState(false);
    const [status2, setStatus2]=useState(false);
    
    function FinishOrder(orderId){
        axios.post(`http://localhost:3030/order/finishOrder/${orderId}`);
        setStatus1(!status1);
    }
    
    function PrepareOrder(orderId){
        axios.post(`http://localhost:3030/order/prepareOrder/${orderId}`);
        setStatus2(!status2);

    }

    function SelectOrder(orderId){
        setOpenView(true);
        setOrderDetails(orderId);
        // viewOrder();
    }

    function ViewAvailableStewardList(orderId){
        setOpenView2(true);
        setOrderDetails(orderId);
        // viewOrder();
    }

    useEffect(() => {
        axios.get('http://localhost:3030/order/pendingOrders')
        .then(res => {
            setPendingOrder(res.data)
            // console.log(orders)
        })
        .catch(err => {
            console.log(err)
        })
    },[status1, status2])

    useEffect(() => {
        axios.get('http://localhost:3030/order/inprogressOrders')
        .then(res => {
            setInProgressOrder(res.data)
            // console.log(orders)
        })
        .catch(err => {
            console.log(err)
        })
    },[status1, status2])

    return (
        <>
            <div className="users">
                <Kcsidebar/>
                <br></br>

                <Title title="Orders"></Title>
                <div className="row">
            
                    <Container style={{boxShadow:'1px 2px 6px 1px gray',width:'44rem'}}>
                        
                        <div className="row" style={{justifyContent:'center',alignItems:'center',borderBottomStyle:'solid',borderWidth:'1px',padding:'0.5rem'}} >
                        <Table striped hover size="sm" responsive id="CheckInTable">
                            <thead>
                                <tr style={{backgroundColor:'red'}}>
                                    <th>PENDING ORDERS</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Room Number</th>
                                    <th>Ordered Time</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    pendingOrders.map(
                                        test=>
                                        <tr key = {test.orderId}>
                                            <td>{test.orderId}</td>
                                            <td>{test.roomId}</td>
                                            <td>{test.orderTime}</td>
                                            <td style={{textAlign:'center'}}>
                                                <Tippy content="View">
                                                    <Button onClick={()=>SelectOrder(test.orderId)} type="view"><FaPrint /></Button>
                                                </Tippy>
                                                <Tippy content="Prepare">
                                                    <Button onClick={()=>PrepareOrder(test.orderId)} type="view"><FaClipboardCheck /></Button>
                                                </Tippy>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        <ViewOrderDerails 
                            show={openView}
                            onHide={() => setOpenView(false)}
                            ordersDetails={ordersDetails}
                            setOrderDetails={setOrderDetails}
                        />
                        </Table>


                        <Table striped hover size="sm" responsive id="CheckInTable">
                            <thead>
                                <tr style={{backgroundColor:'aqua'}}>
                                    <th>IN PROGRESS</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Room Number</th>
                                    <th>Ordered Time</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    inProgressOrders.map(
                                        test=>
                                        <tr key = {test.orderId}>
                                            <td>{test.orderId}</td>
                                            <td>{test.roomId}</td>
                                            <td>{test.orderTime}</td>
                                            <td style={{textAlign:'center'}}>
                                                <Tippy content="Assign Steward">
                                                    <Button onClick={()=>ViewAvailableStewardList(test.orderId)} type="finish"><FaMale /></Button>
                                                </Tippy>
                                                {/* <Tippy content="Finished">
                                                    <Button onClick={()=>FinishOrder(test.orderId)} type="finish"><FaCheck /></Button>
                                                </Tippy> */}
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>

                        <AssignStewardToOrder 
                            show={openView2}
                            onHide={() => setOpenView2(false)}
                            ordersDetails={ordersDetails}
                            setOrderDetails={setOrderDetails}
                        />
                        </Table>
                        </div> 
                        
                    </Container>
            
                </div>
            </div>
            <br></br>
        </>
    )
}

export default Order
