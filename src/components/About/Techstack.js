import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiAngularSimple,
  DiAtlassian,
  DiAws,
  DiDotnet

} from "react-icons/di";
import {
  SiSolidity,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons"><CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /><h6>Javascript</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple /><h6>Angular</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs /><h6>Node.Js</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /><h6>React</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity /><h6>Solidity</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb /><h6>MongoDB</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDotnet /><h6>C#</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /><h6>Git</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAws /><h6>AWS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAtlassian /><h6>Atlassian</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiMysql /><h6>MySQL</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /><h6>Python</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava /><h6>Java</h6>
      </Col>
    </Row>
  );
}

export default Techstack;
