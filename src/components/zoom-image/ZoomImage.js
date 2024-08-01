import React from "react";
import "./ZoomImage.css"; // Import the CSS file

const ZoomImage = ({ src, alt }) => {
  return (
    <div className="image-container">
      <img src={src} alt={alt} className="zoom-image" />
    </div>
  );
};

export default ZoomImage;
