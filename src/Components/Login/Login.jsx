import React from "react";
import { useFormik } from "formik";
import { useState } from "react";
import { loginSchema } from "../Validations/Validations";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";
import loginImg from "../../Assets/Images/LoginImg.svg";
import eyeOpen from "../../Assets/Images/eyeOpen.svg";
import eyeClosed from "../../Assets/Images/eyeClosed.svg";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordShow = () => setShowPassword(!showPassword);

  const handleLogin = ({ login, password }) => {
    console.log("Logging in with", login, password);
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values, actions) => {
      console.log("submit");
      handleLogin({ username: values.login, password: values.password });
    },
  });
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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="login"
            placeholder="Login"
            name="login"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.login}
            className={errors.login && touched.login ? classes.error : ""}
          />{" "}
          {errors.login && touched.login && (
            <div className={classes.error__message}>{errors.login}</div>
          )}
          <div className={classes.input__container}>
            <input
              className={
                errors.password && touched.password ? classes.error : ""
              }
              placeholder="Password"
              name="password"
              id="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              type={showPassword ? "text" : "password"}
            />
            {errors.password && touched.password && (
              <div className={classes.error__message}>{errors.password}</div>
            )}
            <img
              src={showPassword ? eyeClosed : eyeOpen}
              className={classes.eyeOpen__img}
              alt="eye opened"
              onClick={handlePasswordShow}
            />
          </div>
          <button
            type="submit"
            className={classes.login__btn}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Log in"}
          </button>
          <Link to="/register">
            <h3 className={classes.right__h3}>I don't have an account</h3>
          </Link>
        </form>
      </div>
    </div>
  );
};
