import React from "react";
import { useState } from "react";
import "./number.css";
import { Link } from "react-router-dom";
import iraq from "/public/iraq.svg";
export default function NumberPage() {
  const [mobileNumber, setMobileNumber] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;

    if (/^\d*$/.test(value)) {
      setMobileNumber(value);
    }
  };
  const meow1 = (Event) => {
    if (mobileNumber.length < 11 || mobileNumber.length < 10) {
      return Event.preventDefault();
    }
  };
  return (
    <>
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
        <Link
          to="/vaild"
          className={`next1 ${
            mobileNumber.length == 10 || mobileNumber.length == 11
              ? "block"
              : "none"
          }`}
          onClick={meow1}
        >
          <p>Send verification code</p>
        </Link>
      </main>
    </>
  );
}
