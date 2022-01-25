import React from 'react';
import { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap'

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
        <Container fluid>
            <Row>
                <Col className="d-flex justify-content-center pb-4">
                    <img src={photoData.url} alt={photoData.title}  className="photo w-100" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="text-white">{photoData.title}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="date text-white">{photoData.date}</p>
                    <p className="explanation text-white">{photoData.explanation}</p>
                </Col>
            </Row>
        </Container>
        </>
    )
}