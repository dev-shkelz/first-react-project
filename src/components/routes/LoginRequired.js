//This is a global Component that shows up when LogIn is needed.
//I only used it in Posts.js
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import L from "../../utils/L";
import OpenLogIn from "../users/OpenLogIn";
import LogIn from "../users/LogIn";

const LoginRequired = () => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.scrollIntoView({
      block: "start",
    });
  }, []);
  return (
    <div ref={ref} className="login-required">
      <p>
        <L w="You need to login to see this page" />
      </p>
      <Link to="/">
        <L w="Go Back" />
      </Link>
    </div>
  );
};

export default LoginRequired;
