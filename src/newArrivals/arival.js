import React from "react";
import "./arrival.css";

const Arrival = () => {
  return (
    <div className="title">
    <div className="photo">
        <img  src="/images/new_arrival.png" alt="banner"></img>
      </div>
      <div className="text-style">
        <p>
          <b>50%</b> off
        </p>
        <h1>NEW ARRIVALS</h1>
        <button className="bttn-style">Shop now</button>
      </div>
      
    </div>
  );
};
export default Arrival;