import React, { useState, useEffect } from "react";
import Validations from "../validations";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import "./login.css";

const Contact = () => {
  

  const formValid = error => {
    console.log("f",error);
    let valid = true;
    Object.entries(error).forEach(val => {
      console.log("check",val)
      return val.length > 0 && (valid = false);
    });
    return valid;
  };

  let history = useHistory();
  
    const [errors, setErrors] = useState({});
    const [datas, setDatas] = useState({
        email: "",
        password: "",
    });

useEffect(()=>{
  setErrors(Validations(datas));
},[datas])

    const InputEvent = (event) => {
      const {name, value} = event.target;

      setDatas((preVal)=>{
        return{
          ...preVal,
          [name]: value,
        };
        
      });
    };

    const formSubmit =(e)=>{
      const {email,password,} = datas
      e.preventDefault();
      setErrors(Validations(datas));
      console.log("check", Validations(datas),formValid(errors));
      if( email !== "" && password !== ""){

        if (formValid(errors)){
          setDatas(datas);
          console.log("value",);
  
          history.push("/all");
        }
      }
      
      
      
    }
     
    
    
      

  return (
    <React.Fragment>
      <div className="my-5">
        <h1 className="text-center">LogIN First For Shopping</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              {/* <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={datas.fullname}
                  onChange={InputEvent}
                  placeholder="Enter Your Name"
                />
                {errors.fullname && <p>{errors.fullname}</p>}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Phone No.
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={datas.phone}
                  onChange={InputEvent}
                  placeholder="Mobile Number"
                />
                {errors.phone && <p>{errors.phone}</p>}
              </div> */}
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={datas.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
                {errors.email && <p>{errors.email}</p>}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="password"
                  value={datas.password}
                  onChange={InputEvent}
                  placeholder="More than 6 charecter"
                />
                {errors.password && <p>{errors.password}</p>}
              </div>
              <div className="col-12 mb-4 auto">
                <button  className="btn btn-outline-primary" type="submit" >
                  Log In
                </button>
                <NavLink to="/signup"  className="btn btn-outline-danger" type="submit" >
                  Sign Up
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
// import * as firebase from "firebase"


// const firebaseConfig = {
//   apiKey: "AIzaSyCQoXS6jaYMy6yXuEXPtCaLQvrRQ5-84fY",
//   authDomain: "auth-development-71390.firebaseapp.com",
//   projectId: "auth-development-71390",
//   storageBucket: "auth-development-71390.appspot.com",
//   messagingSenderId: "336818764339",
//   appId: "1:336818764339:web:5a6e07bf384526582d8146"
//   };
//   if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig)
// }

// export default firebase;