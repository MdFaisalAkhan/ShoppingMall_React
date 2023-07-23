import React, { useState, useEffect } from "react";
import Validations from "../validation";
import { useHistory } from "react-router";
import "./signup.css";
import { NavLink } from "react-router-dom";

const Register = () => {
  

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
        fullname: "",
        phone: "",
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
      const {fullname, phone,email,password,} = datas
      e.preventDefault();
      setErrors(Validations(datas));
      console.log("check", Validations(datas),formValid(errors));
      if(fullname != "" && phone != "" && email != "" && password != ""){

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
        <h1 className="text-center">Register First</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
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
              </div>
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
                <button  className="btn btn-outline-danger" type="submit" >
                  Submit
                </button>
                <p >I already have an<NavLink to="/" className="dec"> <p ><b>account</b></p></NavLink></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;