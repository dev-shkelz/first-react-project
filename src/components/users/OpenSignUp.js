import React, { useState } from "react";
import Modal from "../modal/Modal";
import SignUp from "./SignUp";
import L from "../../utils/L";
import { useNavigate } from "react-router-dom";

const OpenSignUp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="signup-button">
      {isModalOpen && (
        <Modal
          height="90vh"
          setIsModalOpen={setIsModalOpen}
          // navigateToHome={true}
        >
          <SignUp setIsModalOpen={setIsModalOpen} />
        </Modal>
      )}
      <button
        className="signup-nav-button"
        onClick={() => {
          setIsModalOpen(true);
          // navigate("/sign-up");
        }}
      >
        <L w="Sign Up" />
      </button>
    </div>
  );
};

export default OpenSignUp;
