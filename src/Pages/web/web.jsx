import React from "react";
import "./web.css";
import Person from "/public/Person.svg";
import Star from "/public/star.svg";
import Pen from "/public/pen.svg";
import Mainheader from "../../Componet/mainheader/mainheadr.jsx";

export default function Web() {
  
  return (
    <>
      <div className="contianer">
        <Mainheader />
        <div className="mainWeb">
          <div className="firstLine">
            <div className="editProfile">
              <img src={Person} alt="" /> <h3>Mustafa Emad</h3>{" "}
              <div className="feedBack">
                <img src={Star} alt="" />
                <p>5.0</p>
              </div>
              <button>Edit Profile</button>
            </div>
            <div className="about">
              <div className="about-inside">
                <h5>About</h5>
                <img src={Pen} alt="" />
              </div>
              <div>
                <p>
                  GreenTech Solutions Inc.
                  <br /> Renewable Energy & Technology <br /> San Francisco,
                  California, with operations <br /> in North America and Europe
                </p>
              </div>
            </div>
          </div>
          <div className="secon-Line">
            <div className="inside-secon">
              <img src={Person} alt="" />
              <input
                type="text"
                placeholder="Mustafa Let’s Create a Project !"
              />
            </div>
            <div className="Posts"></div>
          </div>
          <div className="right-Recent"></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
