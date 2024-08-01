import React from "react";
import "./ContactHero.css";
import { Link } from "react-router-dom";
import L from "../../utils/L";

const ContactHero = () => {
  return (
    <div className="contact-hero">
      <div className="contact-hero-container">
        <L w="Contact" />{" "}
        <Link to="https://www.linkedin.com/in/shkelzahmeti" target="_blank">
          <L w="US" />
        </Link>
      </div>
    </div>
  );
};

export default ContactHero;
