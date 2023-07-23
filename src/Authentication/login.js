import React, { useState, useRef, useEffect } from "react";
import { Form, Button, Card, Container, Alert} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../store/AuthContext";
import "./signup.css";

const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

   async function handleSubmit(e) {
        e.preventDefault()

        try{
            setError("")
            setLoading(true)
           await login(emailRef.current.value, passwordRef.current.value)
           history.push("/")
        } catch {
            setError("Failed to log in")
        }
        setLoading(false)
        
    }

    return(
        <>
        <Container className="d-flex align-item-center justify-content-center mt-5"
        style={{minHeight: "100vh"}}
        >
        <div className="w-100" style={{ maxWidth: "400px"}}>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-5">Log In Page</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required placeholder="example@gmail.com"/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required placeholder="atlist 7 charecter"/>
                        </Form.Group>
                        <Button disabled={loading} className="yellow-btn" type="submit">Log In</Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/forgoat-Password">Forgoat Password?</Link>
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
export default Login;
