import React from "react";
import "./title.css";

const Title = () => {
  return (
    <div className="title">
      <div className="text-style">
        <p>
          <b>50%</b> off
        </p>
        <br></br>
        <h1>Summer</h1>
        <br></br>
        <p>Collections</p>
        <br></br>
        <button className="bttn-style">Shop now</button>
      </div>
      <div className="photo">
        <img  src="/images/banner_img.png" alt="banner"></img>
      </div>
    </div>
  );
};
export default Title;
