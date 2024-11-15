import React, { useState } from "react";
import "./ntf.css";
import Not from "/public/notifcation.svg";
import ActiveNtf from "/public/activeNtf.svg";
import Zanib from "/public/zanib.svg";
import Okper from "/public/okper.svg"
import Compo from "/public/compo.svg";
import Zena from "/public/zena.svg";
import Ghoufran from "/public/ghoufran.svg";
import Huda from "/public/huda.svg";
import Moh from "/public/moh.svg";
export default function ntf() {
  const [showup, setShowup] = useState(false);
  const [modal, setModal] = useState(false);

  const watchModel = () => {
    setModal(!modal);
    if (showup === false ) {
      return setShowup(true)  ;
      
    } else {
      return setShowup(false);
    } 
  
  };
 
  return (
    <>
      <div className="greenDot" onClick={watchModel}></div>
      <button className="headerBtn" onClick={watchModel}>
        <img src={`${showup == true ? ActiveNtf : Not}`} alt="" />
      </button>
      <div className={modal? "on" : "modalCLose"}>
      <div className="father">
        <div className="main-noti">
          <div className="textNot">
            <h2>Notification</h2>
            <p>
              You Have 3 <span>Notification</span> Today !
            </p>
          </div>
          <div className="currnt">
            <h5>Today</h5>
            <div className="cardPerson">
              <div className="skyDot"></div>
              <img src={Zanib} alt="" />
              <p>
                <span className="nameNot">Zainab Saad</span> comment on <br />{" "}
                your project <span className="timeNot">h2</span>
              </p>
            </div>
            <div className="cardPerson">
              <div className="skyDot"></div>
              <img src={Okper} alt="" />
              <p>
                <span className="nameNot">Ali Saad</span> Apply your project{" "}
                <span className="timeNot">2h</span>
              </p>
            </div>
            <div className="cardPerson">
              <div className="skyDot"></div>
              <img src={Compo} alt="" />
              <p>
                <span className="nameNot">Karar Emad</span> Liked your project{" "}
                <span className="timeNot">2h</span>
              </p>
            </div>

            <p className="weeek">This week</p>
            <div className="thisWeek">
              <div className="cardPersonWeek">
                <img src={Zena} alt="" />
                <p>
                  <span className="nameNot">Zena saad</span> comment on <br />{" "}
                  your project <span className="timeNot">1d</span>
                </p>
              </div>
              <div className="cardPersonWeek">
                <img src={Ghoufran} alt="" />
                <p>
                  <span className="nameNot">ghoufran saad</span> comment <br />{" "}
                  on your project <span className="timeNot">2d</span>
                </p>
              </div>
              <div className="cardPersonWeek">
                <img src={Huda} alt="" />
                <p>
                  <span className="nameNot">Huda salih</span> comment on <br />{" "}
                  your project <span className="timeNot"> 3d</span>
                </p>
              </div>
              <div className="cardPersonWeek">
                <img src={Moh} alt="" />
                <p>
                  <span className="nameNot">Mohammed Saad </span> <br /> comment
                  on your project <br /> <span className="timeNot">1w</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
