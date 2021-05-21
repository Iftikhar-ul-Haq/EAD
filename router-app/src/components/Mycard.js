import React, { useContext } from "react"
import { Card, Button } from "react-bootstrap"
import { contextdata } from "../App";


export default function Mycard(prop) {

    const func = useContext(contextdata);

    let source = `https://source.unsplash.com/500x300/?${prop.product}`
    return (
        <div className="col p-3 ">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={source} />
                <Card.Body>
                    <Card.Title>{prop.product}</Card.Title>
                    <Card.Text>
                        {prop.price}
                    </Card.Text>
                    <Button variant="primary" onClick={() => func(prop.id, prop.product, prop.price, 1)} >Add to Cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}