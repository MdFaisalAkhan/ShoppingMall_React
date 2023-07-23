import React, { useState, useRef, useContext } from "react";
import Validations from "../validations";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
// import "./login.css";
// import AuthContext from "../store/Auth-context";

const Contact12 = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  // const authCtx = useContext(AuthContext);
  // const isLoggedIn = authCtx.isLoggedIn;

  const [isLogin, setIsLogin] = useState(true);
  //for loading process.
  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState();

  const SwitchAuthModler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    setErrors(Validations(emailInputRef, passwordInputRef));
    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB9FE4l_5SwjKUkG30al03583YzxUJmU0c";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB9FE4l_5SwjKUkG30al03583YzxUJmU0c";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      setIsLoading(false);
      if (res.ok) {
        return res.json();
        //...
      } else {
        return res.json().then((data) => {
          let errorMessage = "Authentication failed!";
          // if (data && data.error && data.error.message) {
          //   errorMessage = data.error.message;
          // }
          
          throw new Error(errorMessage);
          // show an error..
          // console.log(data);
        });
      }
    })
    .then((data)=> {
      // authCtx.login(data.idToken);
      // history.replace("/all");
      // console.log(data);
    })
    .catch((err)=> {
      alert(err.message);
    });
  };

  //   const formValid = error => {
  //     console.log("f",error);
  //     let valid = true;
  //     Object.entries(error).forEach(val => {
  //       console.log("check",val)
  //       return val.length > 0 && (valid = false);
  //     });
  //     return valid;
  //   };

  //   let history = useHistory();

  //     const [errors, setErrors] = useState({});
  //     const [datas, setDatas] = useState({
  //         email: "",
  //         password: "",
  //     });

  // useEffect(()=>{
  //   setErrors(Validations(datas));
  // },[datas])

  //     const InputEvent = (event) => {
  //       const {name, value} = event.target;

  //       setDatas((preVal)=>{
  //         return{
  //           ...preVal,
  //           [name]: value,
  //         };

  //       });
  //     };

  //     const formSubmit =(e)=>{
  //       const {email,password,} = datas
  //       e.preventDefault();
  //       setErrors(Validations(datas));
  //       console.log("check", Validations(datas),formValid(errors));
  //       if( email !== "" && password !== ""){

  //         if (formValid(errors)){
  //           setDatas(datas);
  //           console.log("value",);

  //           history.push("/all");
  //         }
  //       }

  return (
    <React.Fragment>
      <div className="my-5">
        <h1 className="text-center">
          {isLogin ? "LogIN First For Shopping" : "Register First"}
        </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={submitHandler}>
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
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  ref={emailInputRef}
                  // onChange={InputEvent}
                  placeholder="name@example.com"
                />
                {/* {errors.email && <p>{errors.email}</p>} */}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  ref={passwordInputRef}
                  // onChange={InputEvent}
                  placeholder="More than 6 charecter"
                />
                {/* {errors.password && <p>{errors.password}</p>} */}
              </div>
              <div className="col-12 mb-4 auto">
                {!isLoading && (
                  <button className="btn btn-outline-primary" type="submit">
                    {isLogin ? "LogIn" : "SignUp"}
                  </button>
                )}
                {isLoading && <p>Sending request...</p>}
                <button
                  className="btn btn-outline-secondary"
                  type="submit"
                  onClick={SwitchAuthModler}
                >
                  {isLogin
                    ? "Create new account"
                    : "login with existing account"}
                </button>
                
              </div>
              
              <p >Forget Password<NavLink to="/passwordReset" className="dec"> <p ><b>Reset</b></p></NavLink></p>
             
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact12;