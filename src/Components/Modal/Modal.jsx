import React from "react";
import classes from "./Modal.module.css";
import { Link } from "react-router-dom";

export const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;
  const handleConfirm = () => {
    onConfirm();
    onClose(); // Close the modal after confirmation
  };
  return (
    <div className={classes.modal}>
      <div className={classes.modal__content}>
        <h2>Already Leaving?</h2>
        <p>Are you sure you want to exit?</p>
        <div className={classes.modal__btns}>
          <button onClick={onConfirm} className={classes.confirm_btn}>
            Yes, I do
          </button>

          <button onClick={onClose} className={classes.cancel_btn}>
            No, I don't
          </button>
        </div>
      </div>
    </div>
  );
};
