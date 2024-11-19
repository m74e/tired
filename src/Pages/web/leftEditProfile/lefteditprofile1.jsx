import React, { useState } from "react";
import "./lefteditprofile.css";
import Star from "/public/star.svg";
import Pen from "/public/pen.svg";
import Person from "/public/person.svg";
import { Link } from "react-router-dom";
const LeftEditProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Mustafa Emad");

  const handleEditClick = () => {
    setIsEditing((prev) => !prev);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <div className="firstLine">
        <div className="editProfile">
          <img src={Person} alt="" />

          <h3 onClick={handleEditClick}>{name}</h3>

          <div className="feedBack">
            <img src={Star} alt="" />
            <p>5.0</p>
          </div>
         <Link to="/edit"> <button>Edit Profile</button></Link>
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
        <div className="projectHistory">
          <div className="headerProject">
            <h3>Projects History</h3>
            <div className="headerProjectRight">
              <p>+</p>
              <img src={Pen} alt="" />
            </div>
          </div>
          <div className="projectName">
            <div className="greenContant">
              <div className="greenLeftCircl"></div>
              <div className="greenLineFitcontant"></div>
            </div>
            <div className="greenLeftCirclText">
              <h3>project Name</h3>
              <p>22 Jan 2024 - 11 May 2024. </p>
              <div className="rightTheLineParaghraph">
                <p>
                  Developed a task management web <br /> application designed to
                  help users <br /> organize, prioritize, and track their <br />{" "}
                  daily tasks efficiently.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="projectName">
            <div className="greenContant">
              <div className="greenLeftCircl"></div>
              <div className="greenLineFitcontant"></div>
            </div>
            <div className="greenLeftCirclText">
              <h3>project Name</h3>
              <p>22 Jan 2024 - 11 May 2024. </p>
              <div className="rightTheLineParaghraph">
                <p>
                  Developed a task management web <br /> application designed to
                  help users <br /> organize, prioritize, and track their <br />{" "}
                  daily tasks efficiently.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LeftEditProfile;
