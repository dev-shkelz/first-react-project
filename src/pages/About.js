import React, { useEffect, useRef } from "react";
import AboutUs from "../components/about-comp/AboutUs";

const About = () => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.scrollIntoView({
      block: "start",
    });
  }, []);
  return (
    <div ref={ref} className="about">
      <AboutUs />
    </div>
  );
};

export default About;
