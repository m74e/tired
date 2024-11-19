import React, { useState } from "react";
import "./addproject.css";
import X from "/public/x.svg"
const addProject = ({ setIsOpen }) => {
  return (
    <>
      <div className="bigChild">
        <h2>Project Duration</h2>
        <button className={`redX`} onClick={() => setIsOpen(false)}>
          <img className="xBtn" src={
        X
          } alt="" />
        </button>
      </div>
      <div className="TwoLinesGreenOneAndGreenOne">
        <div className="LineGreenOne"></div>
        <div className="LineGreenOne"></div>
      </div>
      <h5 className="Project-Duration">Project Duration</h5>
      <input type="text" className="inputPriceInHour" placeholder="Duration of the project"/>
      <div className="SelectRequiredQualifications">
        <p className="PricingType">Pricing Type</p>
        <div className="TimerHourAndPro">
          <button className="preHouer">
            <p className="preHouerp2"> Per Hour</p>
          </button>
          <button className="forTheProject">
            <p className="preHouerp1"> For The Project</p>
          </button>
        </div>
        <p>Price Per Hour</p>
        <div>
          <input
            className="inputPriceInHour"
            type="text"
            placeholder="Enter Price"
          />
        </div>
      </div>
      <div className="centerthebtn">
        <button className="NextBtnForUploadadd">
          <p className="paraNextBtnadd">Add Project</p>
          <p className="NextBtnForUploadaddpara">+</p>
        </button>
      </div>
    </>
  );
};
export default addProject;
