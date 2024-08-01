import React from "react";
import Accordion from "./Accordion";
import "./AboutUs.css";
import L from "../../utils/L";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-title-wrapper">
        <h1 className="about-title">
          <L w="About Us" />
        </h1>
      </div>

      <Accordion />
    </div>
  );
};

export default AboutUs;
