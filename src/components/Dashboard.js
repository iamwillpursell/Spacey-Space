import React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap'
import { useState, useEffect } from 'react';

const apodApiKey = process.env.REACT_APP_APOD_API_KEY;

export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apodApiKey}` 
            )

            const data = await res.json();
            setPhotoData(data);
        }
    }, []);

    if (!photoData) return <div />;

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
                                <img src={photoData.url} alt={photoData.title} width="100%" className="photo" />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <p className="date">{photoData.date}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <p className="explanation">{photoData.explanation}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )}
