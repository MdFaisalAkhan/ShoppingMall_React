import React from "react";
import "./cateogrie.css";
import {Cateogrie} from "../json";

const Cateogries = () => {
  return (
    <div className="inner-background">
      <div className="background">
          <div className="cateogrie-tag">
              <span><h4>CATEGORIES</h4></span>
              <span className="style">VIEW ALL
              <img src="/images/btn_arrow.svg" alt="arrow"></img>
              </span>
          </div>
          <div className="card_wrap">
          {Cateogrie.map((item, ind)=>{
              return(
                  <div className="wraper" key={ind}>
                      <img src={item.image} alt="pics"></img>
                      <span className="style1">{item.button}</span>
                  </div>
              )
          })}
          </div>
      </div>
    </div>
  );
};
export default Cateogries;
