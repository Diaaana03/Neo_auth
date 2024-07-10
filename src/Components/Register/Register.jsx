import React from "react";
import classes from "./Register.module.css";
import { Link } from "react-router-dom";
import loginImg from "../../Assets/Images/LoginImg.svg";
import backArrow from "../../Assets/Images/backArrow.svg";

export const Register = () => {
  return (
    <div className={classes.register__section}>
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
        <h2 className={classes.right__h2}>Create a Lorby account</h2>
        <form>
          <div className={classes.input__container}>
            <input type="text" id="login" placeholder="Email" name="login" />
            <input type="text" id="login" placeholder="Login" name="login" />
            <input
              placeholder="Create a password"
              name="password"
              id="password"
            />
            <input
              placeholder="Repeat a password"
              name="password"
              id="password"
            />
          </div>
          <button type="submit" className={classes.register__btn}>
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};
