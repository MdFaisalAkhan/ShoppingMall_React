import React, { useState } from "react";
// import { useContext } from "react";
import "./header1.css";
import { useAuth } from '../store/AuthContext';
import { NavLink, useHistory } from "react-router-dom";
import { Button, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
// import AuthContext from "../store/Auth-context";
const Navbar1 = () => {
  const {logout} =useAuth()
  const [error, setError] = useState("")
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try{
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  // const authCtx = useContext(AuthContext);

  // const isLoggedIn = authCtx.isLoggedIn;

  const [showRightBar, setshowRightBar] = useState(false);
  return (
    <div className="navbar1">
      <div className="left_navbar">
        <h3><b>Logo</b></h3>
        {error && <Alert variant="danger">{error}</Alert>}
      </div>
      <div className="right-bar" id={showRightBar ? "hidden" : ""}>
        <div className="navbar-right">
          <div className="searchbar">
            <span className="search-bar">
              <input type="text"></input>
              <FontAwesomeIcon
                icon={faSearch}
                className="gray"
              ></FontAwesomeIcon>
            </span>
          </div>
          <div className="user">
            <FontAwesomeIcon icon={faUser} className="color"></FontAwesomeIcon>
          </div>
          <div className="user1">
            <FontAwesomeIcon
              icon={faShoppingBag}
              className="color"
            ></FontAwesomeIcon>
            <span className="notify">4</span>

          </div>
          <NavLink to= "/update-profile" className="update-profile" type="submit">
                  Update Profile
                </NavLink>
                {/* )} */}
                {/* {isLoggedIn && ( */}
                  <div className="text-2">
                <Button variant="link" onClick={handleLogout}>Log Out</Button>
            </div>
        </div>
      </div>
      {/* {!isLoggedIn && ( */}
      
                {/* )} */}
      {/* <button onClick={()=> setshowRightBar(!showRightBar)}className="hide-bttn">menue</button> */}
    </div>
  );
};
export default Navbar1;
