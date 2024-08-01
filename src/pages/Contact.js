import React, { useEffect, useRef } from "react";
import ContactHero from "../components/contact-comp/ContactHero";

const Contact = () => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.scrollIntoView({
      block: "start",
    });
  }, []);
  return (
    <div ref={ref} className="contact">
      <ContactHero />
    </div>
  );
};

export default Contact;
