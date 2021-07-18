import React from 'react'
import Kcsidebar from '../../Components/kcsidebar'
import { Container,Button } from 'react-bootstrap'
import Title from '../../Components/Title';


const Order=()=> {
    return (
        <>
            <div className="users">
                <Kcsidebar/>
                <br></br>
                <Title title="Orders"></Title>
                <div className="row">
                    <Container style={{boxShadow:'1px 2px 6px 1px gray',width:'44rem',borderRadius:'2%'}}>
                        <div className="row" style={{justifyContent:'center',alignItems:'center',borderBottomStyle:'solid',borderWidth:'1px',padding:'0.5rem'}} >
                            <div className="col-md-6">
                                <h5>Darshana Bandara</h5>
                                <h5>Room No: 12</h5>
                                <h5>Meals: Chicken Rice(f):01</h5>
                                
                            </div>
                            <div className="col-md-6">
                            <Button variant="dark"  type="submit">Finish</Button>
                            </div>
                        </div>
                        <div className="row" style={{justifyContent:'center',alignItems:'center',borderBottomStyle:'solid',borderWidth:'1px',padding:'0.5rem'}} >
                            <div className="col-md-6">
                                <h5>Lakith Kithsara</h5>
                                <h5>Room No: 10</h5>
                                <h5>Meals: Chicken Kottu(f) : 02</h5>
                                
                            </div>
                            <div className="col-md-6">
                            <Button variant="dark"  type="submit">Finish</Button>
                            </div>
                        </div> 
                        <div className="row" style={{justifyContent:'center',alignItems:'center',borderBottomStyle:'solid',borderWidth:'1px',padding:'0.5rem'}} >
                            <div className="col-md-6">
                                <h5>Thusitha Karunthilaka</h5>
                                <h5>Room No: 06</h5>
                                <h5>Meals: Nasigooreng(f) : 01</h5>
                                
                            </div>
                            <div className="col-md-6">
                            <Button variant="dark"  type="submit">Finish</Button>
                            </div>
                        </div> 
                    </Container>
                </div>
            </div>
            <br></br>
        </>
    )
}

export default Order
