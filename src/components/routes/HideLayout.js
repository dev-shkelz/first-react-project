//This component is called in `App.js`

import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../pages/Navbar";
import Footer from "../../pages/Footer";

const HideLayout = ({ children }) => {
  const location = useLocation();

  // Should hide Nav and Footer for this path or for
  const shouldHideNavbarAndFooter = location.pathname === "/demo-app";

  return (
    <>
      {/* Render Navbar and Footer based on the condition */}
      {!shouldHideNavbarAndFooter && <Navbar />}
      <div className="App">{children}</div>
      {!shouldHideNavbarAndFooter && <Footer />}
    </>
  );
};

export default HideLayout;
