import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython, DiGit } from "react-icons/di";
import { FaCar, FaBluetooth, FaNetworkWired, FaUsb } from "react-icons/fa";
import { MdSpeed, MdOutlineSecurity } from "react-icons/md";
import { BiChip } from "react-icons/bi";
import { AiOutlineApartment } from "react-icons/ai";
import { VscDebugAlt } from "react-icons/vsc";
import { GiSteeringWheel } from "react-icons/gi";
import { SiJira } from "react-icons/si";
import { TbBinaryTree } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h6>Python</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBinaryTree />
        <h6>CAPL</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiChip />
        <h6>C</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdSpeed />
        <h6>Matlab / Simulink</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaNetworkWired />
        <h6>CAN / CAN FD</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscDebugAlt />
        <h6>LIN / UDS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCar />
        <h6>HIL / SIL</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiSteeringWheel />
        <h6>ADAS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBluetooth />
        <h6>Bluetooth</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaUsb />
        <h6>CarPlay / AA</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdOutlineSecurity />
        <h6>ISO 26262</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineApartment />
        <h6>AUTOSAR</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
        <h6>Jira / ALM</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h6>Git</h6>
      </Col>
    </Row>
  );
}

export default Techstack;
