import React from "react";
import "./brands.css";
import {Shops} from "../json";

const Brands = () => {
  return (
    <div className="wrapper">
      
          <div className="trending-tag">
              <span><h4>NEW ARRIVALS</h4></span>
              <span className="style">VIEW ALL
              <img src="/images/btn_arrow.svg" alt="arrow"></img>
              </span>
          </div>
          <div className="card_wrap">
          {Shops.map((item, ind)=>{
              return(
                  <div className="wraper" key={ind}>
                      <img src={item.image} alt="pics"></img>
                      <span className="style9"><img src={item.button} alt=""></img></span>
                  </div>
              )
          })}
          </div>
      
    </div>
  );
};
export default Brands;