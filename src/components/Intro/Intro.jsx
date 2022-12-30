import React, { useContext } from "react";
import "./Intros.css";
import kusama from "../../img/Kusama.png";
import edg from "../../img/edg-logo.png";
import astr from "../../img/astrlogo.png";
import polkadot from "../../img/Polkadot.png";
import aca from "../../img/aca.png";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";

const Intro = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Building project for
          </span>
          <span>Polkadot ecosystem</span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Read More</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={astr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={edg} alt="" style={{ width: "5rem" }} />
          </div>
          <div className="w-secCircle">
            <img src={kusama} alt="" style={{ width: "10rem" }} />
          </div>
          <div className="w-secCircle">
            <img src={polkadot} alt="" style={{ width: "5rem" }} />
          </div>
          <div className="w-secCircle">
            <img src={aca} alt="" />
          </div>
        </div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Intro;
