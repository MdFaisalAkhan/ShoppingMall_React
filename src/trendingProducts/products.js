import React, { useState } from "react";
import "./products.css";
import {Product} from "../json";
import { useHistory } from "react-router";

const Products = () => {
  const [data, setData] = useState(Product);
  const history = useHistory();

  const handleChange = (e) => {

    let word= e.target.value;

    if( word === "button"){
      setData(history.push("/shirtAll"));
    }
  }

  return (
    <div className="wrapper">
      
          <div className="trending-tag">
              <span><h4>TRENDING PRODUCTS</h4></span>
              <span className="style">VIEW ALL
              <img src="/images/btn_arrow.svg" alt="arrow"></img>
              </span>
          </div>
          <div className="card_wrap">
          {data.map((item, ind)=>{
              return(
                  <div className="wrapers" key={ind}>
                      <img src={item.image} alt="pics"></img>
                      <span className="favorate"><img src={item.heart} alt="dill"></img></span>
                      <span className="name"><h4>{item.name}</h4></span>
                      <br></br>
                      <span className="data"><p>{item.caption}</p></span>
                      <br></br>
                      <button className="style5" type="button" 
                      value="button" onClick={handleChange}
                      >
                      {item.button}</button>
                  </div>
              )
          })}
          </div>
      
    </div>
  );
};
export default Products;