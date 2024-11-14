import React from "react";
import "./mainheadr.css";
import Freelancer from "/public/freelancer.svg";
import Ntf from "../ntf/ntf.jsx";
export default function Mainheadr() {
  
  return (
    <header>
      <div className="contant">
        <div className="logo" >
          <img src={Freelancer} alt="" />
        </div>
        <div className="menu">
          <a href="#" className="aHome">Home</a>
          <a href="#">Dashboard</a>
          <a href="#">Settings</a>
        </div>
        <div className="searchBar">
          <input type="text" placeholder="Search" />
          <Ntf/>
        </div>
      </div>
    </header>
  );
}
