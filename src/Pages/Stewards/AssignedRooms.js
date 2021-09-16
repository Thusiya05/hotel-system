import React from 'react'
import { Container,Button, Table } from 'react-bootstrap'
import Stesidebar from '../../Components/stesidebar';
import Title from '../../Components/Title';

const AssignedRooms=()=> {
    return (
        <>
            <div className="users">
                <Stesidebar/>
                <br></br>
                <Title title="Today Jobs"></Title>
                <div className="row">
                    <Container style={{width:'44rem',borderRadius:'2%'}}>
                       
                    <Table striped hover size="sm" responsive id="CheckInTable">
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
                                {/* {
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
                                } */}
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
