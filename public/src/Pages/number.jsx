import React from "react";
import { useState } from "react";
import "./number.css";
import iraq from "/public/iraq.svg";
import useStore from "../zustand/store";
import Sidebar from "/src/Componet/sidebar.jsx";

export default function NumberPage() {
  const [mobileNumber, setMobileNumber] = useState("");
  const { count, setCount } = useStore();
  console.log(count)
  const handleInputChange = (event) => {
    const value = event.target.value;

    if (/^\d*$/.test(value)) {
      setMobileNumber(value);
    }
  };
  const checkk = (Event) => {
    if (mobileNumber.length < 11 || mobileNumber.length < 10) {
      return Event.preventDefault();
    }
    else{
      setCount(count+1)
    }
  };
  return (
    <>
    <div className="main-box">
    <Sidebar />
      <main>
         
        <div className="lines">
          <div className="one-line2"></div>
          <div className="flex">
            <div className="two-line2"></div>
            <div className="inside2"></div>
          </div>
          <div className="three-line2"></div>
        </div>
        <div className="EnterNumber">
          <div className="text">
            {" "}
            <h1>EnterNumber</h1>
            <p>
              Enter your phone number to verify your identity and the validity
              of <br />
              your number to safely activate your account on the platform.
            </p>
          </div>
          <p className="phoneNumber">Phone Number</p>
          <div className="inputNumber">
            
                <div className="insideOpt">
                  <img src={iraq} alt="Iraq flag" />
                  <p>+964</p>
                </div>
           
            <input
              maxLength={11}
              type="text"
              placeholder="Enter Your Phone Number"
              value={mobileNumber}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button
        
          className={`next1 ${
            mobileNumber.length == 10 || mobileNumber.length == 11
              ? "block"
              : "none"
          }`}
          onClick={checkk}
        >
          <p>Send verification code</p>
        </button>
        
      </main>
      </div>
    </>
  );
}
