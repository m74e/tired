import React from "react";
import { useState } from "react";
import first from "/public/arrow.svg";
import second from "/public/whitearrow.svg";
import Threelines from "../threelines.jsx";
import "./nextbtn.css";
import useStore from "../../zustand/store.js";
import Sidebar from "/src/Componet/sidebar.jsx";
import Act from "/public/activecl.svg";
import  Notactv from"/public/client.svg";
import Actfree from "/public/activefree.svg"
import Actfreelancer from "/public/freelance.svg"
export default function Nextbtn() {
  const [show, setShow] = useState(false);
  const { count, setCount } = useStore();
  const choose = () => {
    setShow(true);
  };

  const clickme = (Event) => {
    if (!show) {
      return Event.preventDefault();
    } else {
      setCount(count + 1);
    }
  };
  return (
    <>
      <div className="main-box">
        <Sidebar />
        <div className="right-box">
          <Threelines />
          <div className="info">
            <h1>Let’s Get started!</h1>
            <p className="firstpar">How do you plan to use this platform</p>
          </div>
          <div className="select">
            <button onClick={choose} className="free">
              <img
                className="notactivefree"
                src={Actfreelancer}
                alt="img"
              />
              <img className="activefree" src={Actfree} alt="" />
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
                src={Notactv}
                alt="img"
              />
              <img className="activecl" src={Act} alt="img" />
              <div>
                {" "}
                <h4>Client</h4>
                <p>
                  I’m a client searching for talented <br /> freelancers
                </p>
              </div>
            </button>
          </div>

          <button
            className={`next1 ${show ? "block" : "none"}`}
            onClick={clickme}
          >
            <p>Next</p>
            <img src={`${show == true ? second : first}`} alt="" />
          </button>
        </div>
      </div>
    </>
  );
}
