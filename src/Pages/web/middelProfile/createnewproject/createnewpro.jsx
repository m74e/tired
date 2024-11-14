import React, { useState } from "react";
import "./createnewpro.css";
import Upload from "../../../../assets/uploadimg.png"
import DocumendBracts  from"../../../../assets/documentcode.png"
import Arrow from "/public/whitearrow.svg";
import useStore from "../../../../zustand/store";
import AddProject from "./addProject.jsx";
const createnewpro = () => {
    const[show,setShow]=useState(false);
    const { count, setCount } = useStore();
    const openAndCancle=()=>{
        if(show==false){
            return setShow(true)
        }
        else{
            return setShow(false)  
        }

    }
    
    function counterPath() {
        if (count === 0) {
          return <AddProject />;
        } else if (count === 1) {
          return <Number />;
        } else if (count === 2) {
          return <Vaild />;
        } else if (count === 3) {
          return <Email />;
        } else if (count === 4) {
          return <div></div>;
        }
      }
    
  return (
    <>
    <div className="Plusbtn"><button onClick={openAndCancle}><p>+</p></button></div>
      <div className={`parantOfnewpro ${show ? "" : "cancle"}`}>
        <div className="bigChild">
          <h2>Create a project</h2>
          <button className={`redX ${show ? "" : "cancle"}`} onClick={openAndCancle}>X</button>
        </div>
        <div className="TwoLinesGreenOneAndGreyOne">
          <div className="LineGreenOne"></div>
          <div className="LineGreyOne"></div>
        </div>
        <h5 className="SelectRequired">Select Required Qualifications</h5>
        <div className="SelectRequiredQualifications">
          <select value="">
            <option name="" id="">
              UIUX Designer
            </option>
            <option name="" id="">
              Back-end
            </option>
            <option name="" id="">
              Front-end
            </option>
            <option name="" id="">
              Mobile app
            </option>
          </select>
          <p>Description</p>
          <input
            className="SelectRequiredQualificationsInput"
            id="SelectRequiredQualificationsInput"
            type="text"
            placeholder="Enter Description for the project"
          />
        </div>
        <div className="threebtnboth">
        <div className="twobtnboth">  <button className="btnForUpload">
            <img className="btnForUploadImg" src={Upload} alt="" />
            <p className="btnForUploadPara">media</p>
          </button>
          <button className="btnForUpload">
            <img className="btnForUploadImg" src={DocumendBracts} alt="" />
            <p className="btnForUploadPara">document</p>
          </button></div>
          <button className="NextBtnForUpload" onClick={()=>setCount(count+1)}>
            <p className="paraNextBtn">Next</p><img className="ArrowForNextBtn" src={Arrow} alt="" />
          </button>
        </div>
      </div>
      
    </>
  );
};
export default createnewpro;
