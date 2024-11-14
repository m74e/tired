import React, { useState } from "react";
import Threesvg from "/public/threeother.svg";
import Computerwhand from "../../../assets/com.png";
import LikeBtn from "/public/Like.svg";
import Comment from "/public/comment.svg";
import Person from "/public/person.svg";
import NoneActive from "/public/noneActiveLike.svg";
import Createnewpro from "./createnewproject/createnewpro"; 
import AddProject from "../middelProfile/createnewproject/addProject.jsx";
import "./middel.css";
 const middel = () => {
const [show,setShow]=useState(false);
const likeButton = () => {
   if (show==true){
    return setShow(false)
   }
   else{
    return setShow(true)
   }
  };

return (
    <> <div className="secon-Line">
    <div className="inside-secon">
      <img src={Person} alt="" />
      <input className="input"
        type="text"
        placeholder="Mustafa Let’s Create a Project !"
      />
      {/* <Createnewpro/>  */}
      <AddProject/>
    </div>
    <div className="Posts">
      <div className="npersonInfo">
        <div className="everything">
          <div className="imginsideinfo">
            <img src="" alt="" />
          </div>
          <div className="nameofclient">
            <h4>Client Name</h4>
            <p>Posted 2 hours ago</p>
          </div>
        </div>
        <div className="anotherdivinInfo">
          <p>Available</p>
          <button>
            <img src={Threesvg} alt="" />
          </button>
        </div>
      </div>
      <div className="disc">
        <h2>
          Looking for Full-Stack Developer <br /> with experience +2
          years
        </h2>
        <p>
          to build a responsive, user-focused web application. Must be
          skilled in both front-end and back-end <br /> development...{" "}
          <span>See more</span>
        </p>
        <img src={Computerwhand} alt="" />
        <div className="likeBtnAndCom">
          <div className="lik">
          <button onClick={likeButton}>
          <img src={`${show==true? LikeBtn:NoneActive}`} alt="" />
            </button>
            <p>Like</p>
          </div>
          <div className="Comment">
            <img src={Comment} alt="" />
            <p>comment</p>
          </div>
        </div>
      </div>
    </div>
    <div className="Postsdicrption">
      <div className="npersonInfo">
        <div className="everything">
          <div className="imginsideinfo">
            <img src="" alt="" />
          </div>
          <div className="nameofclient">
            <h4>Client Name</h4>
            <p>Posted 2 hours ago</p>
          </div>
        </div>
        <div className="anotherdivinInfo">
          <p>Available</p>
          <button>
            <img src={Threesvg} alt="" />
          </button>
        </div>
      </div>
      <div className="disc">
        <h2>
          Looking for Full-Stack Developer <br /> with experience +2
          years
        </h2>
        <p>
          to build a responsive, user-focused web application. Must be
          skilled in both front-end and back-end <br /> development...{" "}
          <span>See more</span>
        </p>
        <h5>Duration of project</h5>
        <p>4 Months</p>
        <h5>Pricing</h5>
        <div className="price">
          <p>Hourly</p>
          <p>$50</p>
        </div>
        <div className="likeBtnAndCom">
          <div className="lik">
          <button onClick={likeButton}>
          <img src={`${show==true? LikeBtn:NoneActive}`} alt="" />
            </button>
            <p>Like</p>
          </div>
          <div className="Comment">
            <img src={Comment} alt="" />
            <p>comment</p>
          </div>
        </div>
      </div>
    </div>
    <div className="Postsdicrption">
      <div className="npersonInfo">
        <div className="everything">
          <div className="imginsideinfo">
            <img src="" alt="" />
          </div>
          <div className="nameofclient">
            <h4>Client Name</h4>
            <p>Posted 2 hours ago</p>
          </div>
        </div>
        <div className="anotherdivinInfo">
          <p>Available</p>
          <button>
            <img src={Threesvg} alt="" />
          </button>
        </div>
      </div>
      <div className="disc">
        <h2>
          Looking for Full-Stack Developer <br /> with experience +2
          years
        </h2>
        <p>
          to build a responsive, user-focused web application. Must be
          skilled in both front-end and back-end <br /> development...{" "}
          <span>See more</span>
        </p>
        <h5>Duration of project</h5>
        <p>4 Months</p>
        <h5>Pricing</h5>
        <div className="price">
          <p>Hourly</p>
          <p>$50</p>
        </div>
        <div className="likeBtnAndCom">
          <div className="lik">
            <button onClick={likeButton}>
            <img src={`${show==true? LikeBtn:NoneActive}`} alt="" />
            </button>
            <p>Like</p>
          </div>
          <div className="Comment">
            <img src={Comment} alt="" />
            <p>comment</p>
          </div>
        </div>
      </div>
    </div>
  </div></>
  )
}
export default middel