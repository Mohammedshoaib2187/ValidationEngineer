import React from "react";
import { Col, Row } from "react-bootstrap";
import { MdPrecisionManufacturing, MdDashboard, MdOutlineBugReport, MdFlashOn } from "react-icons/md";
import { FaTasks, FaCarBattery } from "react-icons/fa";
import { VscDebugConsole } from "react-icons/vsc";
import { SiJira } from "react-icons/si";
import { BiTestTube } from "react-icons/bi";
import { GiAutoRepair } from "react-icons/gi";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <MdPrecisionManufacturing />
        <h6>dSPACE HIL</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdDashboard />
        <h6>ControlDesk</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiAutoRepair />
        <h6>AutomationDesk</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscDebugConsole />
        <h6>CANoe / CANalyzer</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiTestTube />
        <h6>vTESTstudio</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCarBattery />
        <h6>VT System</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdOutlineBugReport />
        <h6>ETAS INCA</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaTasks />
        <h6>IBM DOORS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
        <h6>Jira</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdFlashOn />
        <h6>VFlash / PCAN</h6>
      </Col>
    </Row>
  );
}

export default Toolstack;
