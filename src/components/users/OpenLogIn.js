import React, { useEffect, useState } from "react";
import Modal from ".././modal/Modal";
import LogIn from "./LogIn";
import L from "../../utils/L";
import "./Users.css";
import { useNavigate } from "react-router-dom";

const OpenLogIn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginOpened, setIsLoginOpened] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoginOpened(true);
  }, []);

  return (
    <div className="login-button">
      {isModalOpen && (
        <Modal
          setIsModalOpen={setIsModalOpen}
          isLoginOpened={isLoginOpened}
          // navigateToHome={true}
        >
          <LogIn />
        </Modal>
      )}
      <button
        className="login-nav-button"
        onClick={() => {
          setIsModalOpen(true);
          // navigate("/login");
        }}
      >
        <L w="Log In" />
      </button>
    </div>
  );
};
export default OpenLogIn;
