import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import { BsTwitter, BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span> hello@plancklabs.com</span>
        <div className="f-icons">
          <BsTwitter color="white" size={"3rem"} />
          <BsTelegram color="white" size={"3rem"} />
          <a href="https://github.com/plancklabs">
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
