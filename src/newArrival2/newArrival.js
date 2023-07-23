import React from "react";
import "./newArrival2.css";
import {Arrivals} from "../json";

const NewArrivals = () => {
  return (
    <div className="wrapper">
      
          <div className="trending-tag">
              <span><h4>NEW ARRIVALS</h4></span>
              <span className="style">VIEW ALL
              <img src="/images/btn_arrow.svg" alt="arrow"></img>
              </span>
          </div>
          <div className="card_wrap">
          {Arrivals.map((item, ind)=>{
              return(
                  <div className="wraper" key={ind}>
                      <img src={item.image} alt="pics"></img>
                  </div>
              )
          })}
          </div>
      
    </div>
  );
};
export default NewArrivals;