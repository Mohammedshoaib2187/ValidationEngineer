import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a <b className="purple">HIL Validation Engineer</b> with
              3+ years of experience developing test plans and executing
              Hardware-in-the-Loop and embedded ECU validation.
              <br />
              <br />
              I work across{" "}
              <i>
                <b className="purple">
                  ADAS, Infotainment, Connectivity, body electronics, and
                  Telematics
                </b>
              </i>{" "}
              on dSPACE HIL benches and Vector toolchains.
              <br />
              <br />
              Hands-on with{" "}
              <b className="purple">
                AutomationDesk, ControlDesk, ConfigurationDesk, CANoe,
                CANalyzer, vTESTstudio,
              </b>{" "}
              and protocols including{" "}
              <i>
                <b className="purple">CAN, CAN FD, LIN, and UDS.</b>
              </i>
              <br />
              <br />
              I build test automation in{" "}
              <b className="purple">Python and CAPL</b>, perform fault
              injection and trace analysis, and keep requirement-to-test
              traceability in IBM DOORS within Agile and ASPICE programs.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://x.com/shoaibmohd1077"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mohammed-shoaib-7a27301bb/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mohammed.shoaib093/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
