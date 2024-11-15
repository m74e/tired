import React, { useState } from "react";
import "./createnewpro.css";
import Arrow from "/public/whitearrow.svg";
import "./addproject.css";
const addProject = () => {
  const [show, setShow] = useState(false);
  const openAndCancle = () => {
    if (show == false) {
      return setShow(true);
    } else {
      return setShow(false);
    }
  };
  return (
    <>

        <div className="bigChild">
          <h2>Project Duration</h2>
          <button
            className={`redX ${show ? "" : "cancle"}`}
            onClick={openAndCancle}
          >
            X
          </button>
        </div>
        <div className="TwoLinesGreenOneAndGreyOne">
          <div className="LineGreenOne"></div>
          <div className="LineGreyOne"></div>
        </div>
        <h5 className="SelectRequired">Select Required Qualifications</h5>
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
