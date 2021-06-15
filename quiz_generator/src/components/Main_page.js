import React from 'react'
import { Form, Col, Button, Container, Row, Table } from "react-bootstrap"
import Body_button from './Body_button'
import Body_table from './Body_table'


export default function Main_page(props) {

    console.log()
    if (0) {


        return (
            <div className="border" >
                <Form className="p-3">
                    <Row className="my-3">
                        <Form.Group controlId="quizTitle">
                            <Form.Label>Quiz Title</Form.Label>
                            <Form.Control type="Text" placeholder="Enter Quiz Title" />
                        </Form.Group>
                    </Row>

                    <Row className="my-3">
                        <Form.Group controlId="totalPoints">
                            <Form.Label>Total Points</Form.Label>
                            <Form.Control type="Text" placeholder="Enter the points of the Quiz" />
                        </Form.Group>
                    </Row>
                    <Row className="my-3">
                        <Col>
                            <Form.Group as={Col} controlId="timeAllowed">
                                <Form.Label>Time Allowed (minutes)</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Col>

                        <Col >
                            <Form.Group as={Col} controlId="deadline">
                                <Form.Label>Deadline</Form.Label>
                                <Form.Control type="Date" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
                <h1 className="text-center">Questions</h1>
                <Body_button />


            </div>

        );
    }
    else {
        return (
            <div className="border" >
                <Form className="p-3">
                    <Row className="my-3">
                        <Form.Group controlId="quizTitle">
                            <Form.Label>Quiz Title</Form.Label>
                            <Form.Control type="Text" placeholder="Enter Quiz Title" />
                        </Form.Group>
                    </Row>

                    <Row className="my-3">
                        <Form.Group controlId="totalPoints">
                            <Form.Label>Total Points</Form.Label>
                            <Form.Control type="Text" placeholder="Enter the points of the Quiz" />
                        </Form.Group>
                    </Row>
                    <Row className="my-3">
                        <Col>
                            <Form.Group as={Col} controlId="timeAllowed">
                                <Form.Label>Time Allowed (minutes)</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Col>

                        <Col >
                            <Form.Group as={Col} controlId="deadline">
                                <Form.Label>Deadline</Form.Label>
                                <Form.Control type="Date" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
                <h1 className="text-center">Questions</h1>
                <Body_table />


            </div>

        );

    }
}
