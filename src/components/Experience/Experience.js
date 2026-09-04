import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Experience() {
    return (
        <section>
            <Container fluid className="experience-section">
                <Particle />

                <h1 className="project-heading">
                    My <strong className="purple">Experience</strong>
                </h1>

                <br />

                <Row className="experience-description m-2">
                    <Col md={12}>
                        <h1 className="company-heading experience-role">
                            HIL Validation <strong className="purple">Engineer</strong>
                        </h1>

                        <h4 className="role-meta">
                            <strong className="purple">Chrysler</strong> — Auburn Hills, Michigan
                        </h4>
                        <h4 className="role-meta">Aug 2025 – Present</h4>
                        <h4 className="role-meta">
                            Project: Infotainment and Connectivity Validation
                        </h4>

                        <br />

                        <h5 style={{ textAlign: "justify", color: "white" }}>
                            Validating Infotainment and Connectivity ECUs on HIL benches and at vehicle level, from requirement-based test design through defect closure and release readiness.
                            <br /><br />
                            <strong className="purple">●</strong> Created detailed test plans and validation strategies from feature specifications and system requirements, maintaining requirement-to-test-case-to-result traceability in IBM DOORS.
                            <br /><br />
                            <strong className="purple">●</strong> Developed and executed test procedures for Bluetooth, USB, Navigation, Audio, Radio, HMI, and connectivity features across 8+ vehicle builds.
                            <br /><br />
                            <strong className="purple">●</strong> Authored and executed 300+ functional, integration, regression, and system-level test cases, documenting execution results and defect evidence for engineering review.
                            <br /><br />
                            <strong className="purple">●</strong> Validated Android Auto and Apple CarPlay across 20+ device/OS combinations.
                            <br /><br />
                            <strong className="purple">●</strong> Verified Bluetooth profiles (HFP, A2DP, AVRCP, PBAP) and resolved 30+ interoperability defects through structured root-cause analysis.
                            <br /><br />
                            <strong className="purple">●</strong> Performed navigation route-guidance, destination-search, and map validation, plus USB media playback and compatibility testing.
                            <br /><br />
                            <strong className="purple">●</strong> Executed UDS diagnostic testing and analyzed CAN traces in CANoe and CANalyzer to isolate root causes and track software fixes to closure.
                            <br /><br />
                            <strong className="purple">●</strong> Developed and maintained Python and CAPL automation scripts and CANoe test configurations to automate regression suites.
                            <br /><br />
                            <strong className="purple">●</strong> Logged, triaged, and verified 100+ defects in Jira, driving issues to closure with development and system teams.
                            <br /><br />
                            <strong className="purple">●</strong> Supported vehicle-level testing of 10+ software releases and participated in daily Agile Scrum ceremonies, communicating status, risks, and defect trends to feature owners.
                            <br /><br />
                            <span className="project-env">
                                Environment: dSPACE, CANoe, CANalyzer, CAPL, Python, CAN, CAN FD, UDS, VFlash, Android Auto, Apple CarPlay, Bluetooth, Jira, DOORS
                            </span>
                        </h5>
                    </Col>
                </Row>
                <br /><br />

                <Row className="experience-description m-2">
                    <Col md={12}>
                        <h1 className="company-heading experience-role">
                            Automotive Test <strong className="purple">Engineer</strong>
                        </h1>

                        <h4 className="role-meta">
                            <strong className="purple">Tata Motors</strong> — Hyderabad, India
                        </h4>
                        <h4 className="role-meta">Sep 2021 – Jul 2023</h4>
                        <h4 className="role-meta">
                            Project: ADAS HIL Validation and Test Automation
                        </h4>

                        <br />

                        <h5 style={{ textAlign: "justify", color: "white" }}>
                            Performed system-level validation of ADAS ECUs against customer requirements in dSPACE HIL environments, expanding automated regression coverage across release cycles.
                            <br /><br />
                            <strong className="purple">●</strong> Developed and executed requirement-based HIL test cases and test plans for ADAS ECU validation, configuring bench setups in dSPACE ConfigurationDesk and running real-time tests through ControlDesk.
                            <br /><br />
                            <strong className="purple">●</strong> Validated Adaptive Cruise Control, Lane Keep Assist, Automatic Emergency Braking, and Blind Spot Detection across simulated sensor inputs and vehicle-state conditions.
                            <br /><br />
                            <strong className="purple">●</strong> Built automated test sequences in dSPACE AutomationDesk and authored Vector vTESTstudio test cases executed on VT System benches.
                            <br /><br />
                            <strong className="purple">●</strong> Performed fault injection testing in dSPACE HIL environments to verify ECU diagnostic and safety responses.
                            <br /><br />
                            <strong className="purple">●</strong> Analyzed CAN messages and system behavior using CANoe and CANalyzer during HIL validation, and verified UDS diagnostic services and fault handling.
                            <br /><br />
                            <strong className="purple">●</strong> Reviewed Matlab/Simulink control models and feature specifications to derive test conditions and confirm expected ECU behavior during HIL runs.
                            <br /><br />
                            <strong className="purple">●</strong> Analyzed test failures, performed root-cause analysis, and collaborated with development teams to resolve issues.
                            <br /><br />
                            <strong className="purple">●</strong> Ran regression and integration cycles, generated validation reports, and maintained traceability from feature specification to test result in IBM DOORS.
                            <br /><br />
                            <span className="project-env">
                                Environment: CANoe, CANalyzer, vTESTstudio, VT System, dSPACE (AutomationDesk, ControlDesk, ConfigurationDesk), ETAS INCA, HIL, CAN, UDS, Matlab/Simulink, Python, Jira, DOORS
                            </span>
                        </h5>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Experience;
