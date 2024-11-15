import React, { useState } from "react";
import DocumendBracts from "../../../../assets/documentcode.png";
import Arrow from "/public/whitearrow.svg";
import "./create.css";
import GreenA from "/public/greena.svg";
import DownarrowG from "/public/downarrowg.svg";
import useStore from "../../../../zustand/store";
const Createp = ({ isOpen, setIsOpen }) => {
  const { ContModal, setContModal } = useStore();
  const [select, setSelect] = useState();
  const [dropdown, setDropdown] = useState(false);
  const [flect, setFlect] = useState();
  const flectImg = () => {
    setFlect(!flect);
    setDropdown(!dropdown);
  };
  const CloseWindow = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="bigChild">
        <h2>Create a project</h2>{" "}
        <button
          className={`redX ${isOpen ? "" : "cancle"}`}
          onClick={CloseWindow}
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
        <div className="btnandarr" onClick={flectImg}>
          {select ? select : "select option"}
          <button className="btndrop">
            <img className="dropimg" src={flect ? GreenA : DownarrowG} alt="" />
          </button>
        </div>
        {dropdown ? (
          <div className="selectin">
            <p onClick={() => setSelect("UI / UX")} className="">
              UI / UX
            </p>
            <p onClick={() => setSelect("Frontend")} className="">
              Frontend
            </p>
            <p onClick={() => setSelect("Backend")} className="">
              Backend
            </p>
            <p onClick={() => setSelect("Mobile")} className="">
              Mobile
            </p>
          </div>
        ) : null}
      </div>

      <p>Description</p>
      <textarea
        className="SelectRequiredQualificationsInput"
        id="SelectRequiredQualificationsInput"
        type="text"
        placeholder="Enter Description for the project"
      />

      <div className="threebtnboth">
        <div className="twobtnboth">
          {" "}
          <button className="btnForUpload">
            <img className="btnForUploadImg" src="" alt="" />
            <p className="btnForUploadPara">media</p>
          </button>
          <button className="btnForUpload">
            <img className="btnForUploadImg" src={DocumendBracts} alt="" />
            <p className="btnForUploadPara">document</p>
          </button>
        </div>
        <button
          className="NextBtnForUpload"
          onClick={() => setContModal(ContModal + 1)}
        >
          <p className="paraNextBtn">Next</p>
          <img className="ArrowForNextBtn" src={Arrow} alt="" />
        </button>
      </div>
    </>
  );
};
export default Createp;
