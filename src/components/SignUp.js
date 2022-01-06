import React, { useRef, useState} from 'react';
import '../App.css';
import { Form, Button, Card, Alert, Row, Col } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const { signup } = useAuth()
    const [ error, setError ] = useState('')
    const [ loading, setLoading ] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value, firstNameRef.current.value, lastNameRef.current.value)
        } catch {
            setError(toast.error('Failed to create an account!', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
            }))
        }
        setLoading(false)
    }

    return (
        <>
        <Card>
            <Card.Body>
                <span className="d-flex align-items-center justify-content-center mb-4 emoji-size">🌎</span>
                <h2 className='text-center mb-2'>Sign Up</h2>
                {error && <Alert varient="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group id="firstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" ref={firstNameRef} required />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group id="lastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" ref={lastNameRef} required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group className="my-2" id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required />
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Confirm Your Password</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmationRef} required />
                    </Form.Group>
                    <Button disabled={loading} className="w-100 mt-4" type="submit">Sign Up</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center text-white mt-2">
            Already have an account? <Link to="/login">Log In</Link>
        </div>
        </>
    )
}