import React, { useState } from "react";
import { BsChevronUp } from "react-icons/bs";
import { Link } from "react-scroll";
import "./ScrollToTop.css";
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
  });
  return (
    <div className={`scrollToTop ${visible ? "visible" : ""}`}>
      <Link to="Navbar" spy={true} smooth={true}>
        <BsChevronUp />
      </Link>
    </div>
  );
}
