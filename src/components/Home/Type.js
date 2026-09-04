import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "HIL Validation Engineer",
          "Automotive Test Engineer",
          "ADAS & Infotainment Validation",
          "Python & CAPL Test Automation",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
