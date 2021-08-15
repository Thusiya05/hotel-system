import React from 'react'
import NavBar from "../Components/NavBar"
import Footer from '../Components/Footer'
import { Container,Form,Col,Row,Table,Button } from 'react-bootstrap'

const activityschedule = () => {
    return (
        <>
            <div>
                <NavBar
                    path1="/" name1="Home"
                    path2="/rooms/" name2="Rooms" 
                    path3="/activities" name3="Activities"
                    path4="/facilities" name4="Facilities" 
                    path5="/aboutUs" name5="About Us" 
                    pathSign="/signIn" LogName="Log In">    
                </NavBar>
                <br></br>
                <br></br>
                <br></br>
        </div>
        <div>
        <br></br>
                    <br></br>
                    
            <Container style={{boxShadow:'1px 2px 6px 1px gray',width:'80rem',borderRadius:'2%',padding:'1rem',backgroundColor:'white'}}>
                    
                        <h3 style={{textAlign:'center'}}>Outdoor Activities Scheduling</h3>
                        <br></br>
                        <Form>
                              <Form.Row>
                                    <Col sm={6}>
                                        <Form.Group as={Col} controlId="formGridFirstName">
                                        <Form.Label style={{textAlign:'center'}}><h6>Select the Date</h6></Form.Label>
                                        <Form.Control type="date" required/>
                                        </Form.Group>
                                    </Col>
                               </Form.Row>
                        </Form> 

                        <Table striped bordered hover size="sm" responsive id="CheckInTable">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Activity Name</th>
                                        <th  style={{textAlign:'center'}}>Time Slot</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Water Rafting</td>
                                        <td style={{textAlign:'center'}}>
                                            <Button variant="dark" type='submit'>8.00am-10.00am</Button> <Button variant="dark" type='submit'>10.00am-12.00pm</Button> <Button variant="dark" type='submit'>2.00pm-4.00pm</Button> <Button variant="dark" type='submit' disabled>4.00pm-6.00pm</Button>
                                        </td>  
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Confidence Jump</td>
                                        <td style={{textAlign:'center'}}>
                                            <Button variant="dark" type='submit' disabled>8.00am-10.00am</Button> <Button variant="dark" type='submit'>10.00am-12.00pm</Button> <Button variant="dark" type='submit'>2.00pm-4.00pm</Button> <Button variant="dark" type='submit' disabled>4.00pm-6.00pm</Button>
                                        </td>  
                                    </tr> 
                                    <tr>
                                        <td>3</td>
                                        <td>Rope Adventure</td>
                                        <td style={{textAlign:'center'}}>
                                            <Button variant="dark" type='submit'>8.00am-10.00am</Button> <Button variant="dark" type='submit'>10.00am-12.00pm</Button> <Button variant="dark" type='submit'>2.00pm-4.00pm</Button> <Button variant="dark" type='submit' disabled>4.00pm-6.00pm</Button>
                                        </td>  
                                    </tr> 
                                    <tr>
                                        <td>4</td>
                                        <td>Nature trails with bird watching & jungle trekking</td>
                                        <td style={{textAlign:'center'}}>
                                            <Button variant="dark" type='submit'>8.00am-10.00am</Button> <Button variant="dark" type='submit' disabled>10.00am-12.00pm</Button> <Button variant="dark" type='submit' disabled>2.00pm-4.00pm</Button> <Button variant="dark" type='submit'>4.00pm-6.00pm</Button>
                                        </td>  
                                    </tr> 
                                    <tr>
                                        <td>5</td>
                                        <td>Waterfall Abseiling</td>
                                        <td style={{textAlign:'center'}}>
                                            <Button variant="dark" type='submit' disabled>8.00am-10.00am</Button> <Button variant="dark" type='submit'>10.00am-12.00pm</Button> <Button variant="dark" type='submit'>2.00pm-4.00pm</Button> <Button variant="dark" type='submit'>4.00pm-6.00pm</Button>
                                        </td>  
                                    </tr> 
                                    <tr>
                                        <td>6</td>
                                        <td>Rock sliding & Rock pool bath</td>
                                        <td style={{textAlign:'center'}}>
                                            <Button variant="dark" type='submit' disabled>8.00am-10.00am</Button> <Button variant="dark" type='submit'>10.00am-12.00pm</Button> <Button variant="dark" type='submit' >2.00pm-4.00pm</Button> <Button variant="dark" type='submit'>4.00pm-6.00pm</Button>
                                        </td>  
                                    </tr> 
                                    <tr>
                                        <td>7</td>
                                        <td>Cycling</td>
                                        <td style={{textAlign:'center'}}>
                                            <Button variant="dark" type='submit' >8.00am-10.00am</Button> <Button variant="dark" type='submit' disabled>10.00am-12.00pm</Button> <Button variant="dark" type='submit' disabled>2.00pm-4.00pm</Button> <Button variant="dark" type='submit'>4.00pm-6.00pm</Button>
                                        </td>  
                                    </tr>  
                                </tbody>
                             </Table> 
                            <div style={{textAlign:'center'}}>
                                <Button type="submit" variant="info">Submit</Button>  <Button type="cancel" variant="danger">Cancel</Button>
                            </div>
                                        
                    
            </Container>
            <br></br>
            <br></br>
        </div>
        <div>
                <Footer />
        </div>
       </>
       
    )
}

export default activityschedule
