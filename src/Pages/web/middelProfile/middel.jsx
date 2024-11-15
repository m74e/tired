import React, { useState } from "react";
import Threesvg from "/public/threeother.svg";
import Computerwhand from "../../../assets/com.png";
import LikeBtn from "/public/Like.svg";
import Comment from "/public/comment.svg";
import Person from "/public/person.svg";
import NoneActive from "/public/noneActiveLike.svg";
import ProjectModal from "./createnewproject/createnewpro";
import Createp from "./modal/create.jsx";
import AddProject from "../middelProfile/createnewproject/addProject.jsx";
import "./middel.css";
import useStore from "../../../zustand/store.js";
const middel = () => {
  const { ContModal, setContModal } = useStore();
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const likeButton = () => {
    setShow(!show);
  };
  const openAndCancle = () => {
    {
      setIsOpen(!isOpen);
    }
  };

  function ModalPath() {
    if (ContModal === 0) {
      return (
        <ProjectModal isOpen={isOpen} setIsOpen={setIsOpen}>
          <Createp isOpen={isOpen} setIsOpen={setIsOpen} />
        </ProjectModal>
      );
    } else if (ContModal === 1) {
      return (
        <ProjectModal isOpen={isOpen} setIsOpen={setIsOpen}>
          <AddProject/>
        </ProjectModal>
      );
    }
  }
  return (
    <>
      {" "}
      <div className="secon-Line">
        <div className="inside-secon">
          <img src={Person} alt="" />
          <input
            className="input"
            type="text"
            placeholder="Mustafa Let’s Create a Project !"
          />
          <ProjectModal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Createp isOpen={isOpen} setIsOpen={setIsOpen} />
          </ProjectModal>
          <div className="Plusbtn1">
            <button onClick={openAndCancle}>
              <p>+</p>
            </button>
          </div>
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
              Looking for Full-Stack Developer <br /> with experience +2 years
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
                  <img src={`${show == true ? LikeBtn : NoneActive}`} alt="" />
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
              Looking for Full-Stack Developer <br /> with experience +2 years
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
                  <img src={`${show == true ? LikeBtn : NoneActive}`} alt="" />
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
              Looking for Full-Stack Developer <br /> with experience +2 years
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
                  <img src={`${show == true ? LikeBtn : NoneActive}`} alt="" />
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
      </div>
    </>
  );
};
export default middel;
