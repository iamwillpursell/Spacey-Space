import React, { useRef, useState} from 'react';
import '../App.css';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [ error, setError ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        const firebaseAPI = process.env.FIREBASE_API_KEY;
        
        console.log(firebaseAPI);

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            toast.error('Error: Login Unsuccessful', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: true,
                draggable: false
            }) 
        }
        setLoading(false)
    }

    return (
        <>
        <Card>
            <Card.Body>
                <span className="d-flex align-items-center justify-content-center mb-4 emoji-size">🌎</span>
                <h2 className='text-center mb-2'>Log In</h2>
                {error && <Alert varient="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group className="my-2" id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required />
                    </Form.Group>
                    <Button disabled={loading} className="w-100 mt-4" type="submit">Log In</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center text-white mt-2">
            Need an Account? <Link to="/signup">Sign Up </Link>
        </div>
        </>
    )
}