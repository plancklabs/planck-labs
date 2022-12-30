import React, { useContext } from "react";
import "./Projects.css";
import { themeContext } from "../../Context";
// import dot from "../../img/dotford.png";
import { Row, Col, Container } from "react-bootstrap";
import CardList from "../../api/data";

const Project = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>
        Recent <span className="live">Live</span> Projects
      </span>
      <div className="conatier_portfolio">
        <Container>
          <Row sm={1} md={2} lg={3}>
            {CardList.map((card) => (
              <Col>
                <article className="portfolio_item">
                  <div className="portfolio_item-image">
                    <img src={card.img} alt="dotfordummies" />
                  </div>
                  <h6 style={{ color: darkMode ? "white" : "" }}>
                    {card.title}
                  </h6>
                  <div className="portfolio_item-cta">
                    <a
                      href="/https://github.com/plancklabs/Dotdummies"
                      className="btn"
                      ß
                      target="_blank"
                    >
                      Github
                    </a>
                    <a
                      href="#https://www.dotfordummies.com/"
                      className="btn1"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  </div>
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Project;
