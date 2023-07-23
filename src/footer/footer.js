import React from "react";
import {Footer} from "../json";
import "./footer.css";

const Footers = () => {
    return (
        <div className="footer">
        
        {Footer.map((item,ind)=> {
            return(
                
                <div className="row-col" key={ind}>
                <ul>
                    <span className="cateogry"><h4>{item.heading}</h4></span>
                    <li>
                    <span className="nav-link"><p>{item.name1}</p></span>
                    <span className="nav-link"><p>{item.name2}</p></span>
                    <span className="nav-link"><p>{item.name3}</p></span>
                    <span className="nav-link"><p>{item.name4}</p></span>
                    <span className="nav-link"><p>{item.name5}</p></span>
                    <span className="nav-link"><p>{item.name6}</p></span>
                    <span className="nav-link"><p>{item.name7}</p></span>
                    <span className="nav-link"><p>{item.name8}</p></span>
                    
                    
                    </li>
                    </ul>
                </div>
                
            )
        })}
        <div className="contact">
        <span className="head-brand"><p>ISO + BRANDS</p></span>
                    <span className="head-brand1"><p>Well Curated 3 Lakhs+ products</p></span>
                    <span className="head-brand"><p>FREE SHIPPING</p></span>
                    <span className="head-brand1"><p>For order Above INR 1000</p></span>
                    <span className="head-brand"><p>GENUINE PRODUCTS</p></span>
                    <span className="head-brand2"><p>FOLLOW US</p>
                    <img src="/images/fb.svg" alt=""></img>
                    <img src="/images/" alt=""></img>
                    <img src="/images/" alt=""></img>
                    <img src="/images/" alt=""></img>
                    <img src="/images/" alt=""></img>
                    </span>
                    </div>
        </div>
    )
};
export default Footers;
