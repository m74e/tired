import React from "react";
import "./sidebar.css";
function Sidebar() {
  return (
    <>
      <div className="left-box">
        <div className="dec">
          <h1>
            Welcome to Your <br /> Freelancing Hub!
          </h1>
          <p>
            We’re thrilled to have you here! Whether you're a client <br />{" "}
            searching for skilled freelancers to bring your projects to life or{" "}
            <br /> a freelancer eager to find exciting opportunities, this is
            the <br /> place where connections are made, and ideas come to
            reality. <br /> Let's start building something amazing together!
          </p>
        </div>
        <div className="left-lines">
          <img className="img-line" src="./twoarrows.svg" alt="" />
        </div>
      </div>
    </>
  );
}
export default Sidebar;
