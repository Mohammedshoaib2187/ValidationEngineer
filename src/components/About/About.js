import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about-hil.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="HIL validation engineer at a workstation" className="img-fluid" style={{ borderRadius: "12px" }} />
          </Col>
        </Row>

        <h1 className="project-heading">
          Automotive <strong className="purple">Domains</strong>
        </h1>
        <div style={{ paddingBottom: "40px" }}>
          <span className="domain-chip">ADAS</span>
          <span className="domain-chip">Infotainment</span>
          <span className="domain-chip">Connectivity</span>
          <span className="domain-chip">Body Electronics</span>
          <span className="domain-chip">Telematics</span>
          <span className="domain-chip">ECU Validation</span>
        </div>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
