import React, { useState, useRef, useEffect } from "react";
import { Form, Button, Card, Container, Alert} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../store/AuthContext";
import "./signup.css";

const Signup = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

   async function handleSubmit(e) {
        e.preventDefault()

        if(passwordRef.current.value !== 
        passwordConfirmRef.current.value) {
            return setError("Password do not match")
        }
        try{
            setError("")
            setLoading(true)
           await signup(emailRef.current.value, passwordRef.current.value)
           history.push("/")
        } catch {
            setError("Failed to create an account")
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
                    <h2 className="text-center mb-5">Sign Up</h2>
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
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required placeholder="password same as above"/>
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mt-4" type="submit">Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-4">
                Already have an account? <Link to="/login">Log In</Link>
            </div>
            </div>
            </Container>
        </>
    );
};
export default Signup;