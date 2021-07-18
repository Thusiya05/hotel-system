import React from 'react'
import { Container,Button } from 'react-bootstrap'
import GuideSidebar from '../../Components/GuideSidebar';
import Title from '../../Components/Title';
import { HiOutlineCheckCircle } from "react-icons/hi";

const GuideHistory=()=> {
    return (
        <>
            <div className="users">
                <GuideSidebar/>
                <br></br>
                <Title title="H i s t o r y"></Title>
                <div className="row">
                    <Container style={{boxShadow:'1px 2px 6px 1px gray',width:'44rem',borderRadius:'2%'}}>
                        <div className="row" style={{justifyContent:'center',alignItems:'center',borderBottomStyle:'solid',borderWidth:'1px',padding:'0.5rem'}} >
                            <div className="col-md-6">
                                <h5>Darshana Bandara</h5>
                                <h5>Package Id : 01</h5>
                                <h5>Date : 2021.08.10</h5>
                            </div>
                            <div className="col-md-6">
                            <HiOutlineCheckCircle size={80} color={'green'}/>
                            </div>
                        </div>
                        <div className="row" style={{justifyContent:'center',alignItems:'center',borderBottomStyle:'solid',borderWidth:'1px',padding:'0.5rem'}} >
                            <div className="col-md-6">
                                <h5>Lakith Bandara</h5>
                                <h5>Package Id : 01</h5>
                                <h5>Date : 2021.08.15</h5>
                            </div>
                            <div className="col-md-6">
                            <HiOutlineCheckCircle size={80} color={'green'}/>
                            </div>
                        </div> 
                        <div className="row" style={{justifyContent:'center',alignItems:'center',borderBottomStyle:'solid',borderWidth:'1px',padding:'0.5rem'}} >
                            <div className="col-md-6">
                                <h5>Thusitha Bandara</h5>
                                <h5>Package Id : 03</h5>
                                <h5>Date : 2021.08.18</h5>
                            </div>
                            <div className="col-md-6">
                            <HiOutlineCheckCircle size={80} color={'green'}/>
                            </div>
                        </div> 
                    </Container>
                </div>
            </div>
            <br></br>
        </>
    )
}
export default GuideHistory;
