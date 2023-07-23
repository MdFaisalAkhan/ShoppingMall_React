import React from "react";
import "./blog.css";
import {Bloger} from "../json";

const Blogs = () => {
  return (
    <div className="wrapper9">
      
          <div className="trending-tag">
              <span><h4>Blogs</h4></span>
              <span className="style">VIEW ALL
              <img src="/images/btn_arrow.svg" alt="arrow"></img>
              </span>
          </div>
          <div className="card_wrap">
          {Bloger.map((item, ind)=>{
              return(
                  <>
                  <div className="wraper4" key={ind}>
                      <img src={item.image} alt="pics"></img>
                      <p>{item.date}</p>
                      <h5><b>{item.name}</b></h5>
                      <p>{item.caption}</p>
                      <span className="read"><p>{item.text}</p></span>
                  </div>
                  
                  </>
              )
          })}
          </div>
          <div className="signup">
                      <span className="signin">
                      <h4>SIGN UP FOR NEWSLETTERS</h4>
                      <p>Be the first to know about new products.</p>
                      </span>
                      <div className="form-input">Enter your email
                      <span className="signup-but">Sign Up</span>
                      </div>
                      
                  </div>
    </div>
  );
};
export default Blogs;