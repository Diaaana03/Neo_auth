import React from "react";
import classes from "./Email.module.css";
import { Link } from "react-router-dom";
import loginImg from "../../Assets/Images/LoginImg.svg";
import backArrow from "../../Assets/Images/backArrow.svg";

export const Email = () => {
  return (
    <div className={classes.email__section}>
      <div className={classes.left}>
        <div className={classes.login__img}>
          <img src={loginImg} alt="lorby" />
        </div>
        <div>
          <h1>Lorby</h1>
          <p>Your personal tutor</p>
        </div>
      </div>
      <div className={classes.right}>
        <Link to="/">
          <div className={classes.back__btn}>
            <img className={classes.arrow__img} src={backArrow} alt="arrow" />
            Back to the login page
          </div>
        </Link>
        <h2 className={classes.right__h2}>
          We have sent a confirmation letter to your Email to finish your
          registration.{" "}
        </h2>
        <p className={classes.p__email}>
          If you haven't recieved the letter, please check your <b>spam</b>{" "}
          folder.
        </p>
      </div>
    </div>
  );
};
