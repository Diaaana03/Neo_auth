import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import classes from "./Account.module.css";
import loginImg from "../../Assets/Images/LoginImg.svg";
import { Modal } from "../Modal/Modal";
import { useNavigate } from "react-router-dom";

export const Account = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleExitClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmExit = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={classes.account__section}>
      <div className={classes.block}>
        <div>
          <h1>Welcome!</h1>
          <p>Lorby - your personal tutor</p>
        </div>
        <div className={classes.login__img}>
          <img src={loginImg} alt="lorby" />
        </div>
        <button onClick={handleExitClick} className={classes.btn__exit}>
          Exit
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmExit}
      />
    </div>
  );
};
