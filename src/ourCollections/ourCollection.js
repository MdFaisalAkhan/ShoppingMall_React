import React from "react";
import "./ourCollrction.css";
import {OurCollection} from "../json";

const OurCollections = () => {
  return (
    <div className="wrapper1">
    <div className="heading"><h4>OUR COLLECTIONS</h4></div>
          <div className="card_wrap2">
          {OurCollection.main.map((item, ind)=>{
              return(
                  <div className="column1" key={ind}>
                      <img src={item.image} alt="pics"></img>
                      <span className="per">{item.per}</span>
                      <span className="off"><h4>{item.off}</h4></span>
                      <span className="data"><h4>{item.name}</h4></span>
                  </div>
              )
          })}
          <div className="column2">
          {OurCollection.main2.map((item, ind)=>{
              return(
                  <div className="product" key={ind}>
                      <img src={item.image} alt="pics"></img>
                      <span className="per">{item.per}</span>
                      <span className="off"><h4>{item.off}</h4></span>
                      <span className="data"><h4>{item.name}</h4></span>
                  </div>
              )
          })}
          </div>
          <div className="column2">
          {OurCollection.main4.map((item, ind)=>{
              return(
                  <div className="product" key={ind}>
                      <img src={item.image} alt="pics"></img>
                      <span className="per">{item.per}</span>
                      <span className="off"><h4>{item.off}</h4></span>
                      <span className="data"><h4>{item.name}</h4></span>
                  </div>
              )
          })}
          </div>
          {OurCollection.main6.map((item, ind)=>{
              return(
                  <div className="column1" key={ind}>
                      <img src={item.image} alt="pics"></img>
                      <span className="per">{item.per}</span>
                      <span className="off"><h4>{item.off}</h4></span>
                      <span className="data"><h4>{item.name}</h4></span>
                  </div>
              )
          })}
          </div>
      
    </div>
  );
};
export default OurCollections;