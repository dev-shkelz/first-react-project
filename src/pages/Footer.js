import React from "react";
import { Link } from "react-router-dom";
import L from "../utils/L";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-circle"></div>
        <div className="reso-contact">
          <Link to="/about">
            <L w="About" />
          </Link>
          <Link to="/contact">
            {" "}
            <L w="Contact" />
          </Link>
          <Link>
            {" "}
            <L w="Privacy Policy" />
          </Link>
          <Link>
            {" "}
            <L w="Terms of Service" />
          </Link>
        </div>
        <div className="reso-copyright">
          <p>
            © 2024 RESO <L w="All rights reserved" />.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
