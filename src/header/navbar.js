import React, { useState } from 'react';
import "./navbar.css";
import { Alert } from "react-bootstrap";
import { useAuth } from '../store/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';





const Navbar = () => {
    const [error, setError] = useState("")
    const {currentUser} =useAuth()
    console.log("rtr",currentUser);
    return (
        <div className="qwert">
        <div className="navbar">
            <div className="middle_navbar">
            {error && <Alert variant="danger">{error}</Alert>}
                <span className="nav-link"><FontAwesomeIcon icon={faPhoneAlt} className="red"></FontAwesomeIcon>+91-7643562432</span>
                <span className="nav-link"><FontAwesomeIcon icon={faEnvelope} className="red"></FontAwesomeIcon>{currentUser.email}</span>
            </div>
        </div>
        </div>
    )
}
export default Navbar;