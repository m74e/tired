import React, { useState } from "react";
import "./rightrecent.css";
import N from "/public/N.svg";
import Up from "/public/uparrow.svg";
import Down from "/public/down.svg";
import Zena from "/public/zena.svg";
import Ghoufran from "/public/ghoufran.svg";
import Huda from "/public/huda.svg";
import Moh from "/public/moh.svg";

const RightRecent = () => {
  const [show, setShow] = useState([false, false, false, false]);

  const arrowUpDown = (index) => {
    setShow((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <>
      
        <div className="right-Recent">
          <div className="MainRecent">
            <div className="textRecent">
              <h3>Your Recent Project</h3>
              <p>see all projects</p>
            </div>
            {[0, 1, 2, 3].map((index) => (
              <div key={index} className="recentWebDesignBorder">
                <div className="recentWebDesign">
                  <div className="colom">
                    <img src={N} alt="Project thumbnail" />
                    <div className="textInsideRecent">
                      <h5>Web Design Project {index + 1}</h5>
                      <p>10$/Hour</p>
                    </div>
                  </div>
                  <div
                    className="greencircal"
                    onClick={() => arrowUpDown(index)}
                  >
                    <button className="greencircal">
                      <img src={show[index] ? Up : Down} alt="Toggle arrow" />
                    </button>
                  </div>
                </div>
                {show[index] && (
                  <div className="CenterTheText">
                    <p>
                      This project involves implementing both frontend and
                      back-end functionalities, as well as integrating with
                      third-party APIs.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
           
      <div >
        <p>def</p>
      </div>
        </div>
     
    </>
  );
};

export default RightRecent;
