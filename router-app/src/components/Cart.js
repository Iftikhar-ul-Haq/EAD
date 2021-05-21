import React from "react"
import { Table, Row, Col, Container } from "react-bootstrap"
import Mytable from "./Mytable"

export default function Cart(prop) {
    return (

        <Table striped bordered hover>
            <thead>
                <tr>

                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                <Mytable add={prop.add} />

            </tbody>
        </Table>

    )

}