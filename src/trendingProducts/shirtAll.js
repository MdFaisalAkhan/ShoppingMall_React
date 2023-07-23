import React from 'react';
import { ProductShirtAll } from "../json";
import { Link } from 'react-router-dom';
import "./shirtAll.css";

const ShirtAll = () => {
    return (
        <div className="product-shirt">
        <h1>Tranding-Shirts</h1>
        <div className="product-manage">
        
        
        {ProductShirtAll.map((item,ind)=>{
            return(
                <div className="rrr" key={ind}>
               
                <img  src={item.image} alt=""></img>
                <span className="name-style">{item.name}</span>
                <button type="button" className="button-style">{item.button}</button>
                
                </div>
                
            )
        })}
       
        </div>
        <div className="go-back">
        <Link to="/"  className="ght">go back</Link>
        </div>
        </div>
    )
}
export default ShirtAll;