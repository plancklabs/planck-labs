import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  const clickHandler = (e) => {
    e.stopPropagation();
    console.log("button");
  };
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span> hello@plancklabs.com</span>
        <div className="f-icons">
          <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
          <a href="/https://github.com/plancklabs">
            <button onClick={clickHandler}>
              <Gitub color="white" size={"3rem"} />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
