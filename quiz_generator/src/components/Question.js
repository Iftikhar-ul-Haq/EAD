import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'


export default function Question() {
    return (
        <div className="border p-3">
            <h1>Question</h1>
            <Form className="p-3" >
                <Row>
                    <Form.Group>

                        <Form.Control type="textarea" />
                    </Form.Group>
                </Row>
                <Row className="my-2">
                    <Col>
                        <Form.Label>Type</Form.Label>
                        <Form.Check
                            type="radio"
                            label="Single Choice"

                        />
                        <Form.Check
                            type="radio"
                            label="Multiple Choice"

                        />
                    </Col>
                    <Col>
                        <Form.Label>Points</Form.Label>
                        <Form.Control type="text" />
                    </Col>
                </Row>
            </Form>
            <div className="border   d-flex justify-content-center align-items-center" style={{ height: "500px" }}>

                <Button primary >Add Choice </Button>





            </div>



        </div>
    )
}
