import React, { useEffect, useState } from "react";
import "./Modal.css";
import { useNavigate } from "react-router-dom";

// Same Modal is used for SignUp and LogIn
// I added a boolean `navigateToHome` in order te make the modal
// go to homepage when you close it. Because in some cases we won't
//need that. It's used in SignUp, LogIn and when deleting a movie.
const Modal = ({
  children,
  setIsModalOpen,
  isLoginOpened,
  height,
  navigateToHome,
}) => {
  // Delayed is used to slow the modal visibility for 200ms
  const [isDelayedOpen, setIsDelayedOpen] = useState(false);
  //Modal is used for OpenSignUp and OpenLogIn, so we will navigate
  //to home when we close the modal - `navigate('/')`
  const navigate = useNavigate();

  useEffect(() => {
    // Delay opening the modal by 3 seconds
    const timer = setTimeout(() => {
      setIsDelayedOpen(true);
    }, 150);

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`modal-overlay ${isDelayedOpen ? "open" : ""} ${
        isLoginOpened ? "right" : ""
      }`}
    >
      <div
        className={`modal-wrapper ${isLoginOpened ? "right" : ""}`}
        style={{ height: height }}
      >
        <button
          className="x-icon "
          onClick={() => {
            setIsModalOpen(false);
            navigateToHome && navigate("/");
          }}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
