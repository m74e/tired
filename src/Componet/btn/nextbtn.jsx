import React from "react";
import { useState } from "react";
import first from "/public/arrow.svg";
import second from "/public/whitearrow.svg";
import { Link } from "react-router-dom";
import Threelines from "../threelines.jsx";
import "./nextbtn.css";

export default function Nextbtn() {
  const arrow = [first, second];
  const [grey, setGrey] = useState(arrow[0]);
  const [show, setShow] = useState(false);
  const choose = () => {
    setShow(true);
    setGrey(arrow[1]);
  };
  const meow = (Event) => {
    if (!show) {
      return Event.preventDefault();
    }
  };
  return (
    <>
      <div className="right-box">
        <Threelines></Threelines>
        <div className="info">
          <h1>Let’s Get started!</h1>
          <p className="firstpar">How do you plan to use this platform</p>
        </div>
        <div className="select">
          <button onClick={choose} className="free">
            <img
              className="notactivefree"
              src="./public/freelance.svg"
              alt="img"
            />
            <img className="activefree" src="./public/activefree.svg" alt="" />
            <div>
              <h4>Freelancer</h4>
              <p>
                I’m a freelancer ready to work for <br /> projects
              </p>
            </div>
          </button>
          <button onClick={choose} className="client">
            <img
              className="notactiveclient"
              src="./public/client.svg"
              alt="img"
            />
            <img className="activecl" src="/public/activecl.svg" alt="img" />
            <div>
              {" "}
              <h4>Client</h4>
              <p>
                I’m a client searching for talented <br /> freelancers
              </p>
            </div>
          </button>
        </div>

        <Link
          to="/number"
          className={`next1 ${show ? "block" : "none"}`}
          onClick={meow}
        >
          <p>Next</p>
          <img src={grey} alt="" />
        </Link>
      </div>
    </>
  );
}
