import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { useState } from "react";
import { registerSchema } from "../Validations/Validations";
import classes from "./Register.module.css";
import { Link } from "react-router-dom";
import loginImg from "../../Assets/Images/LoginImg.svg";
import backArrow from "../../Assets/Images/backArrow.svg";
import eyeOpen from "../../Assets/Images/eyeOpen.svg";
import eyeClosed from "../../Assets/Images/eyeClosed.svg";

const validatePassword = (password) => {
  const passwordValidations = {
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /\d/.test(password),
    specialChar: /[^a-zA-Z0-9]/.test(password),
    length: password.length >= 8 && password.length <= 15,
  };
  return passwordValidations;
};

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordValidations, setPasswordValidations] = useState({
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
    length: false,
  });

  const handlePasswordShow = () => setShowPassword(!showPassword);
  const handleConfirmPasswordShow = () =>
    setShowConfirmPassword(!showConfirmPassword);

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
        <Formik
          initialValues={{
            email: "",
            login: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={registerSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
          }}
        >
          {({ values, isSubmitting, handleChange }) => {
            const validations = validatePassword(values.password);
            if (
              JSON.stringify(validations) !==
              JSON.stringify(passwordValidations)
            ) {
              setPasswordValidations(validations);
            }
            return (
              <Form>
                <div className={classes.input__container}>
                  <Field
                    type="text"
                    id="email"
                    placeholder="Email"
                    name="email"
                    className={classes.input}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className={classes.error__message}
                  />
                  <Field
                    type="text"
                    id="login"
                    placeholder="Login"
                    name="login"
                    className={classes.input}
                  />
                  <ErrorMessage
                    name="login"
                    component="div"
                    className={classes.error__message}
                  />
                  <div className={classes.input__password}>
                    <Field
                      placeholder="Create a password"
                      name="password"
                      id="password"
                      type={showPassword ? "text" : "password"}
                      className={classes.input}
                    />
                    <img
                      src={showPassword ? eyeClosed : eyeOpen}
                      className={classes.eyeOpen__img}
                      alt="eye opened"
                      onClick={handlePasswordShow}
                    />
                  </div>
                  <ul className={classes.validation__ul}>
                    <li
                      className={
                        passwordValidations.uppercase
                          ? classes.validation__li_valid
                          : classes.validation__li_invalid
                      }
                    >
                      At least one uppercase letter
                    </li>
                    <li
                      className={
                        passwordValidations.lowercase
                          ? classes.validation__li_valid
                          : classes.validation__li_invalid
                      }
                    >
                      At least one lowercase letter
                    </li>
                    <li
                      className={
                        passwordValidations.number
                          ? classes.validation__li_valid
                          : classes.validation__li_invalid
                      }
                    >
                      At least one number
                    </li>
                    <li
                      className={
                        passwordValidations.specialChar
                          ? classes.validation__li_valid
                          : classes.validation__li_invalid
                      }
                    >
                      At least one special character
                    </li>
                    <li
                      className={
                        passwordValidations.length
                          ? classes.validation__li_valid
                          : classes.validation__li_invalid
                      }
                    >
                      8-15 characters long
                    </li>
                  </ul>
                  <div className={classes.input__password}>
                    <Field
                      placeholder="Repeat a password"
                      name="confirmPassword"
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      className={classes.input}
                    />
                    <img
                      src={showConfirmPassword ? eyeClosed : eyeOpen}
                      className={classes.eyeOpen__img}
                      alt="eye opened"
                      onClick={handleConfirmPasswordShow}
                    />
                  </div>
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className={classes.error__message}
                  />
                </div>
                <button type="submit" className={classes.register__btn}>
                  Sign up
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};
