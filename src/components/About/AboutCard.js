import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Shoaib Mohammed</span>, a{" "}
            <span className="purple">HIL Validation Engineer</span> currently
            validating Infotainment and Connectivity systems at Chrysler in
            Auburn Hills, Michigan.
            <br />
            <br />
            I design requirement-based test plans, execute HIL and vehicle-level
            validation, automate regression with Python and CAPL, and maintain
            full traceability from feature specification to test result in IBM
            DOORS.
            <br />
            <br />
            Education:
            <br />
            Master of Science, Computer Science — Purdue University (2025)
            <br />
            Bachelor of Technology, Computer Science — Kakatiya Institute of
            Technology and Science (2022)
            <br />
            <br />
            Apart from validation work, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(126 184 180)" }}>
            "If it isn't tested, it isn't ready for the vehicle."{" "}
          </p>
          <footer className="blockquote-footer">Shoaib</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
