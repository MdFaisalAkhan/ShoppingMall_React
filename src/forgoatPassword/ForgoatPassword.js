import React, { useState, useRef, useEffect } from "react";
import { Form, Button, Card, Container, Alert} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../store/AuthContext";


const ForgoatPassword = () => {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

   async function handleSubmit(e) {
        e.preventDefault()

        try{
            setMessage("")
            setError("")
            setLoading(true)
           await resetPassword(emailRef.current.value)
           setMessage('Check your inbox for reset')
        } catch {
            setError("Failed to Reset Password")
        }
        setLoading(false)
        
    }

    return(
        <>
        <Container className="d-flex align-item-center justify-content-center mt-4"
        style={{minHeight: "100vh"}}
        >
        <div className="w-100" style={{ maxWidth: "400px"}}>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-5">Reset-Password Page</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required placeholder="example@gmail.com"/>
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mt-4" type="submit">Reset Password</Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/login">Login</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-4">
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
            </div>
            </Container>
        </>
    );
};
export default ForgoatPassword;
