import React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Dashboard() {
    return (
        <>
            <Container>
                <Row>
                    <h1 className="text-center text-white my-5">Hello, User</h1>
                </Row>
                <Row>
                    <Col>
                        <Card>
                        <Card.Img variant="top" src="images/apod-card.jpg" />
                            <Card.Body>
                                <Card.Title className="text-center">NASA Photo Of The Day</Card.Title>
                                <Card.Text className="py-3 text-center">
                                    NASA updates their photo of the day every 24hrs. Click below to access an interesting photo and description of the latest photo of the day. 
                                </Card.Text>
                                <Col className="d-flex justify-content-center">
                                    <Link className="link" to="/nasa-potd">
                                        <Button variant="dark" className="d-flex justify-content-center">VIEW PHOTO</Button>
                                    </Link>
                                </Col>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}