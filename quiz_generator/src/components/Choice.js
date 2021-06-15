import React from 'react'
import { Form, Row, Button, Col } from 'react-bootstrap'

export default function Choice() {
    return (
        <div className="border p-3">
            <h1>Choice</h1>
            <Form>
                <Row className="">
                    <Form.Group>
                        <Form.Control type="textarea" placeholder="Enter your choice" />
                    </Form.Group>
                </Row>
                <Row className="p-3">
                    <Form.Check
                        type="checkbox"
                        label="Correct Option"
                    />
                </Row>

                <div className="d-flex justify-content-end ">

                    <Button variant="light" className="mx-3 border" >Cancel</Button>


                    <Button primary>Add Choice</Button>

                </div>
            </Form>

        </div >
    )
}
