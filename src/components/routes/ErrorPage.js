import React from "react";
import { Link } from "react-router-dom";
import "./Routes.css";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <p>
        404 Error - Page Not Found. It seems you've hit a broken link. Let's get
        you back on track.
      </p>
      <Link to="/">Go Back Home</Link>
    </div>
  );
};

export default ErrorPage;
