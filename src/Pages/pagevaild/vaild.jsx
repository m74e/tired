import React, { useState, useEffect } from "react";
import { OtpInput } from "reactjs-otp-input";
import clock from "/public/clock.svg";
import "./vaild.css";
import { Link } from "react-router-dom";
export default function OtpVerification() {
  const [otp, setOtp] = useState("");
  const [counter, setCounter] = useState(59);

  const handleChange = (otp) => setOtp(otp);


  useEffect(() => {
    if (counter > 0) {
      const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [counter]);

  const handleRefresh = () => {
    if (counter === 0) {
      setCounter(59);
    }
  };

  return (
    <>
      <main>
        <div className="lines">
          <div className="one-line1"></div>
          <div className="two-line1"></div>
          <div className="three-line1"></div>
        </div>
        <div className="info">
          <h1>Enter Your Phone Number</h1>
          <p>
            Enter your phone number to verify your identity and the validity of{" "}
            <br />
            your number to safely activate your account on the platform.
          </p>
        </div>
        <div className="otpinput">
          <OtpInput 
            className="insideotp"
            value={otp}
            onChange={handleChange}
            numInputs={6}
            separator={<span>&nbsp;</span>}
          />
        </div>
        <div className="counter">
          <img src={clock} alt="" />{" "}
          <p>00:{counter.toString().padStart(2, "0")}</p>
        </div>
        <div className="resend">
          <p>
            Didn't receive a message?{" "}
            <span
              onClick={handleRefresh}
              className={counter === 0 ? "chy" : "chn"}
            >
              Resend
            </span>
          </p>
        </div>
        <footer>
          <Link
            to="/email"
            className="next2"
          >
            <button className={`next2 ${
            otp.length!==6
              ? "block1"
              : "none1"
          }`} disabled={otp.length !== 6}  >
              Verify
            </button>
          </Link>
        </footer>
      </main>
    </>
  );
}
