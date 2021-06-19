import React from 'react'

export default function Card({img,title,text}) {
    return (
        <div>
             <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={img} style={{height:'300px'}} />
                <Card.Body style={{backgroundColor:"darkgray"}}>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                </Card.Body>
            </Card> 
        </div>
    )
}
