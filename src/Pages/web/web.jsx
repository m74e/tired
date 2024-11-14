import React, { useState } from "react";
import "./web.css";
import LeftEditProfile from "./leftEditProfile/lefteditprofile1.jsx";
import Mainheader from "../../Componet/mainheader/mainheadr.jsx";
import Middel from "./middelProfile/middel.jsx";
import Rightrecent from "./rightrecent/rightrecentinside.jsx";

export default function Web() {
 

  return (
    <>
      <div className="contianer">
        <Mainheader />
        <div className="mainWeb">
          <LeftEditProfile />
          <Middel />
          <Rightrecent />
        </div>
      </div>
    </>
  );
}
