import React from 'react';
import Sidebar from '../Components/Sidebar';
import Title from '../Components/Title';
import { Button,Form,Col } from 'react-bootstrap';

function HotelConfig() {
    return (
        <div className='HotelConfig'>
        <Sidebar/>
        <Title title="Hotel Configuration"></Title>
        <div class="text-center">
        <Button size="lg" href="./income" variant="secondary" 
            style={{
                minHeight: "10rem",
                minWidth: "10rem",
                padding: "3.5rem 0rem 0rem 0rem",
                marginTop: "5rem",
                textAlign: "center",
                }}>
            Room Discount
            </Button> <Button size="lg" href="./expenses" variant="secondary" 
            style={{
                minHeight: "10rem",
                minWidth: "10rem",
                padding: "3.5rem 0rem 0rem 0rem",
                marginTop: "5rem",
                textAlign: "center",
                }}
                >Rooms</Button> <Button size="lg" href="./guestreport" variant="secondary" 
                style={{
                    minHeight: "10rem",
                    minWidth: "10rem",
                    padding: "3.5rem 0rem 0rem 0rem",
                    marginTop: "5rem",
                    textAlign: "center",
                    }}
                    >Room Type</Button> <Button size="lg" href="./guestreport" variant="secondary" 
                    style={{
                        minHeight: "10rem",
                        minWidth: "10rem",
                        padding: "3.5rem 0rem 0rem 0rem",
                        marginTop: "5rem",
                        textAlign: "center",
                        }}
                        >Outdoor Activity</Button>
                    </div>
             </div>
      
            
        
    )
}

export default HotelConfig
