import React from 'react'
import Kcsidebar from '../../Components/kcsidebar'
import { Table,Form,Button,Col } from 'react-bootstrap'

function menu() {
    return (
        <div className="AssignGuids">
            <Kcsidebar />
            <br></br>
            <br></br>
            <Table striped bordered hover size="sm" responsive id="CheckInTable">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Food Item</th>
                                        <th>Availability</th>
                                        <th>No of Items</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Water Rafting</td>
                                        {/* <td>
                                            <Form>
                                                <Form.Group as={Col} controlId="formGridState">
                                                    <Form.Label>State</Form.Label>
                                                    <Form.Select defaultValue="Choose...">
                                                        <option>Choose...</option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Form>
                                        </td> */}
                                        
                                    </tr> 
                                </tbody>
                             </Table>             
        </div>
    )
}

export default menu
