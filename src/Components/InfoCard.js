import React from 'react'
import {Card} from 'react-bootstrap'

export default function ActCard({img,title,text}) {
    return (
        <div>
             <Card style={{width:'20rem', margin:'1rem'}}>
                <Card.Img variant="top" src={img} style={{height:'300px',width:'19.9rem'}} />
                <Card.Body style={{backgroundColor:"darkgray", height:'18rem',fontFamily:'cursive'}}>
                    <Card.Title style={{fontWeight:'bolder'}}>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                </Card.Body>
            </Card> 
        </div>
    )
}
