import React from "react";
import classes from "./Login.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import loginImg from "../../Assets/Images/LoginImg.svg";

export const Login = () => {
  return (
    <div className={classes.login__section}>
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
        <h2 className={classes.right__h2}>Welcome back!</h2>
        <form>
          <input type="text" id="login" placeholder="Login" name="login" />
          <div className={classes.input__container}>
            <input placeholder="Password" name="password" id="password" />
          </div>
          <button type="submit" className={classes.login__btn}>
            Log in
          </button>
          <Link to="/register">
            <h3 className={classes.right__h3}>I don't have an account</h3>
          </Link>
        </form>
      </div>
    </div>
  );
};
