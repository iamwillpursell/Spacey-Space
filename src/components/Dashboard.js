import React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap'

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
                            <Card.Body>
                                <h2 className='text-center mb-2'>Card</h2>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <h2 className='text-center mb-2'>Card</h2>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <h2 className='text-center mb-2'>Card</h2>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}