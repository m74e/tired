import React, { useEffect, useState } from "react";
import Threesvg from "/public/threeother.svg";
import Computerwhand from "../../../assets/com.png";
import LikeBtn from "/public/Like.svg";
import Comment from "/public/comment.svg";
import Person from "/public/person.svg";
import NoneActive from "/public/noneActiveLike.svg";
import ProjectModal from "./createnewproject/createnewpro";
import ProjectDescriptionForm from "./modal/maincreate/projectDescriptionForm.jsx";
import "./middel.css";
import useStore from "../../../zustand/store.js";
import AddProject from "./createnewproject/addProject.jsx";

const middel = () => {
  const { nextModal, setNextModal } = useStore();
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const likeButton = () => {
    setShow(!show);
  };

  useEffect(() => {
    if (!isOpen) {
      setNextModal(0);
    }
  }, [isOpen]);
  
  const convertToNextPage = () => {
    if (nextModal === 0) {
      return <ProjectDescriptionForm setIsOpen={setIsOpen} />;
    } else if (nextModal === 1) {
      return <AddProject setIsOpen={setIsOpen} />;
    }
  };
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

          {/* <ProjectDescriptionForm isOpen={isOpen} setIsOpen={setIsOpen} /> */}
          {/* <AddProject isOpen={isOpen} setIsOpen={setIsOpen} /> */}

          <div className="Plusbtn1">
            <button onClick={() => setIsOpen(true)}>
              <p>+</p>
            </button>
          </div>
          <ProjectModal isOpen={isOpen} setIsOpen={setIsOpen}>
            {convertToNextPage()}
          </ProjectModal>
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
