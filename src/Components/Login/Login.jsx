import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginSchema } from "../Validations/Validations";
import classes from "./Login.module.css";
import loginImg from "../../Assets/Images/LoginImg.svg";
import eyeOpen from "../../Assets/Images/eyeOpen.svg";
import eyeClosed from "../../Assets/Images/eyeClosed.svg";

export const Login = () => {
  const postLogin = "https://pudge-backender.org.kg/login/";
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordShow = () => setShowPassword(!showPassword);

  const handleLogin = async (data) => {
    try {
      const response = await axios.post(postLogin, data);
      // Assuming a successful response contains user data
      if (response.status === 200) {
        toast.success("Login successful!");
        navigate("/account");
      }
    } catch (err) {
      console.log(err);
      toast.error(
        "Login failed! " + (err.response?.data?.detail || err.message)
      );
    }
  };

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values, actions) => {
      handleLogin({ username: values.login, password: values.password });
      actions.setSubmitting(false);
    },
  });

  return (
    <div className={classes.login__section}>
      <ToastContainer />
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
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            id="login"
            placeholder="Login"
            name="login"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.login}
            className={
              formik.errors.login && formik.touched.login ? classes.error : ""
            }
          />
          {formik.errors.login && formik.touched.login && (
            <div className={classes.error__message}>{formik.errors.login}</div>
          )}
          <div className={classes.input__container}>
            <input
              className={
                formik.errors.password && formik.touched.password
                  ? classes.error
                  : ""
              }
              placeholder="Password"
              name="password"
              id="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              type={showPassword ? "text" : "password"}
            />
            <img
              src={showPassword ? eyeClosed : eyeOpen}
              className={classes.eyeOpen__img}
              alt="eye opened"
              onClick={handlePasswordShow}
            />
          </div>
          {formik.errors.password && formik.touched.password && (
            <div className={classes.error__message}>
              {formik.errors.password}
            </div>
          )}
          <button
            type="submit"
            className={classes.login__btn}
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "Logging in..." : "Log in"}
          </button>
          <Link to="/register">
            <h3 className={classes.right__h3}>I don't have an account</h3>
          </Link>
        </form>
      </div>
    </div>
  );
};
