import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Validation <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          HIL, vehicle-level, and test-automation programs I have executed
          across Infotainment, Connectivity, and ADAS.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Infotainment and Connectivity Validation"
              description="Created test plans and validation strategies from feature specifications and system requirements for Bluetooth, USB, Navigation, Audio, Radio, HMI, and connectivity features across 8+ vehicle builds. Authored and executed 300+ functional, integration, regression, and system-level test cases with requirement-to-result traceability in IBM DOORS."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Android Auto & Apple CarPlay"
              description="Validated Android Auto and Apple CarPlay across 20+ device and OS combinations. Verified Bluetooth profiles including HFP, A2DP, AVRCP, and PBAP, and resolved 30+ interoperability defects through structured root-cause analysis using CAN traces and bench reproduction."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Python & CAPL Test Automation"
              description="Developed and maintained Python and CAPL automation scripts and CANoe test configurations to automate regression suites on each software release. Reduced manual execution effort while keeping release-readiness coverage consistent across Infotainment and Connectivity features."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="ADAS HIL Validation"
              description="Performed system-level validation of ADAS ECUs against customer requirements in dSPACE HIL environments. Validated Adaptive Cruise Control, Lane Keep Assist, Automatic Emergency Braking, and Blind Spot Detection across simulated sensor inputs and vehicle-state conditions."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="dSPACE & Vector Bench Automation"
              description="Configured HIL benches in dSPACE ConfigurationDesk and ran real-time tests through ControlDesk. Built automated sequences in AutomationDesk and authored vTESTstudio test cases executed on VT System benches, expanding automated regression coverage across ADAS release cycles."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Diagnostics, Fault Injection & Traceability"
              description="Executed UDS diagnostic testing, analyzed CAN traces in CANoe and CANalyzer, and performed fault injection on dSPACE HIL benches to verify ECU diagnostic and safety responses. Maintained specification-to-test-case-to-result traceability in IBM DOORS and drove 100+ defects to closure in Jira."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
