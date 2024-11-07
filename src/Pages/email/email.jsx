import React, { useState } from "react";
import "./email.css";
import Eye from "/public/eye.svg"; 
import Green from "/public/greeneye.svg";
export default function Email() {
  const [inputType, setInputType] = useState("password");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  // Toggle input type between 'password' and 'text'
  const typeChanger = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  return (
    <>
      <main>
        <div className="lines">
          <div className="one-line"></div>
          <div className="two-line"></div>
          <div className="three-line"></div>
        </div>
        <div className="enInfo">
          <h1>Enter Your Information</h1>
          <p>
            Please enter your personal information to complete the registration <br />
            process.
          </p>
          <div className="inputname">
            <p>Name</p>
            <input type="text" placeholder="Enter your Full name" maxLength={50} value={name} onChange={(el)=>{ 
              setname(el.target.value)
            }} />
          </div>
          <div className="inputname">
            <p>Email</p>
            <input type="email" placeholder="Enter your Email Address" value={email} onChange={(el)=>{ 
              setemail(el.target.value)
            }} />
          </div>
          <div className="inputname">
            <p>Password</p>
            <div className="inside">
              <input type={inputType}  placeholder="Enter Password" value={pass} onChange={(el)=>{ 
              setpass(el.target.value)
            }} />
              <button type="button" className="eyebtn" onClick={typeChanger}>
                <img className="internalimg" src={`${inputType!=="text" ? Eye:Green }`} alt="Toggle visibility" />
              </button>
            </div>
          </div>
        </div>
        <button className= {`next3 ${name!=="" &&pass.length>7 && email!=="" ? "block2" : "none2"}  `} >
          <p>Complete registration</p>
        </button>
      </main>
    </>
  );
}
