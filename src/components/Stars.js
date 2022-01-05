import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export default function Home() {
    return (
        <>
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
            <div className='w-100' style={{ maxWidth: "400px" }}>
                <Link className="home-link" to="/nasaphoto">See into the stars!</Link>
            </div>
        </Container>
        </>
    )
}