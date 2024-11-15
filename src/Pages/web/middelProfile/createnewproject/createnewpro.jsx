import React, { useState } from "react";
import "./createnewpro.css";
import DocumendBracts from "../../../../assets/documentcode.png";
import Arrow from "/public/whitearrow.svg";
import AddProject from "./addProject.jsx";
const ProjectModal = ({ children, isOpen }) => {
  return (
    <>
      <div className={`parantOfnewpro ${isOpen ? "" : "cancle"}`}>
        {children}
      </div>
    </>
  );
};
export default ProjectModal;
