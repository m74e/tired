import React, { useState } from "react";
import "./createnewpro.css";

const projectModal = ({ children, isOpen }) => {
  return (
    <>
    
      <div className={` ${isOpen ? "parantOfnewpro" : "cancle"}`}>
        {children}
      </div>
    </>
  );
};
export default projectModal;
