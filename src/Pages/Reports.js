import React from 'react'
import Sidebar from '../Components/Sidebar';
import Title from '../Components/Title';
import "../CSS/Sidebar.css";
import { Button } from 'react-bootstrap';


function Reports() {
    return (
        <div className= 'reports'>
            <Sidebar/>
            <Title title="R E P O R T S"></Title>
            <div class="text-center">
            <Button size="lg" href="./" variant="secondary" 
            style={{
                minHeight: "10rem",
                minWidth: "10rem",
                padding: "3.5rem 0rem 0rem 0rem",
                marginTop: "10rem",
                textAlign: "center",
                }}>
            Income  
            </Button> <Button size="lg" href="./manager" variant="secondary" 
            style={{
                minHeight: "10rem",
                minWidth: "10rem",
                padding: "3.5rem 0rem 0rem 0rem",
                marginTop: "10rem",
                textAlign: "center",
                }}
                >Expenses</Button> <Button size="lg" href="./manager" variant="secondary" 
                style={{
                    minHeight: "10rem",
                    minWidth: "10rem",
                    padding: "3.5rem 0rem 0rem 0rem",
                    marginTop: "10rem",
                    textAlign: "center",
                    }}
                    >Guests</Button>
            </div>
        </div>
    )
}

export default Reports
