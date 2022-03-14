import React, { useState } from "react";

import PropTypes from "prop-types";
import applicationLogo from "../assests/img/logo.png";

import { Link } from "react-router-dom";
import { SaveStudentData } from "../functions/AxiosFunction";
import { Field, Form, Formik } from "formik";
import { Button, LinearProgress, TextField } from "@mui/material";

const Login = ({ onLoginSuccess }) => {
  //used HisTory hook for the getting route data

  //Show Error Messages While Login
  const [errMsg, seterrMsg] = useState({
    msg: "",
    color: "",
  });

  //Intial State of the UserDetails
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });

  //handling function for the input field and their values
  const handler = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const [validated, setValidated] = useState(false);

  //Login Submit Handler Function
  const submitHandler = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
      setValidated(true);
    } else {
      SaveStudentData(
        { username: userDetails.username, password: userDetails.password },
        null,
        null,
        null
      ).then(
        () => {
          onLoginSuccess();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setValidated(false);
          seterrMsg({
            msg: resMessage,
            color: "text-danger",
          });
        }
      );
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Field
            component={TextField}
            name="email"
            type="email"
            label="Email"
          />
          <br />
          <Field
            component={TextField}
            type="password"
            label="Password"
            name="password"
          />
          {isSubmitting && <LinearProgress />}
          <br />
          <Button
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

//Checking PropTypes In Login Component
Login.propTypes = {
  onLoginSuccess: PropTypes.func,
};

export default Login;
