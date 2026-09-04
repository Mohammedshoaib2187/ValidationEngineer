import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiVisualstudio,
  SiGithub
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos /><h6>MacOS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /><h6>Visual Studio Code</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /><h6>Postman</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack /><h6>Slack</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio /><h6>Visual Studio</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub /><h6>Github</h6>
      </Col>
    </Row>
  );
}

export default Toolstack;
