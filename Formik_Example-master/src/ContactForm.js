import React from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

// const CONTAINER = styled.div`
//   background: #F7F9FA;
//   height: auto;
//   width: 90%;
//   margin: 5em auto;
//   color: snow;
//   -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
//   -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
//   box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);

//   @media(min-width: 786px) {
//     width: 60%;
//   }

//   label {
//     color: #24B9B6;
//     font-size: 1.2em;
//     font-weight: 400;
//   }

//   .error {
//     border: 2px solid #FF6565;
//   }

//   .error-message {
//     color: #FF6565;
//     padding: .5em .2em;
//     height: 1em;
//     position: absolute;
//     font-size: .8em;
//   }

//   h1 {
//     color: #24B9B6;
//     padding-top: .5em;
//   }

//   .form-group {
//     margin-bottom: 2.5em;
//   }
// `;

const MYFORM = styled(Form)`
  width: 90%;
  text-align: left;
  padding-top: 2em;
  padding-bottom: 2em;

  @media (min-width: 786px) {
    width: 50%;
  }
`;

// const BUTTON = styled(Button)`
//   background: #1863AB;
//   border: none;
//   font-size: 1.2em;
//   font-weight: 400;

//   &:hover {
//     background: #1D3461;
//   }
// `;

// RegEx for phone number validation
const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

// Schema for yup
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "*Names must have at least 2 characters")
    .max(100, "*Names can't be longer than 100 characters")
    .required("*Name is required"),
  email: Yup.string()
    .email("*Must be a valid email address")
    .max(100, "*Email must be less than 100 characters")
    .required("*Email is required"),
  phone: Yup.string()
    .matches(phoneRegExp, "*Phone number is not valid")
    .required("*Phone number required"),
  blog: Yup.string()
    .url("*Must enter URL in http://www.example.com format")
    .required("*URL required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const ContactForm = () => {
  return (
    <>
      <h1>Example Formik Form</h1>
      <Formik
        initialValues={{ name: "", email: "", phone: "", blog: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // When button submits form and form is in the process of submitting, submit button is disabled
          setSubmitting(true);

          // Simulate submitting to database, shows us values submitted, resets form
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 500);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid,
        }) => (
          <MYFORM onSubmit={handleSubmit} className="mx-auto">
            <Form.Group controlId="formName">
              <Form.Label>Name :</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                isInvalid={touched.name && errors.name}
                isValid={touched.name && !errors.name}
              />

              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label>Password :</Form.Label>
              <Form.Control
                type="text"
                name="password"
                placeholder="password Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                isInvalid={touched.name && errors.password}
                isValid={touched.name && !errors.password}
              />

              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>{" "}
            <Form.Group controlId="formName">
              <Form.Label>Name :</Form.Label>
              <Form.Control
                type="text"
                name="confirmPassword"
                placeholder="confirm password Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                isInvalid={touched.name && errors.confirmPassword}
                isValid={touched.name && !errors.confirmPassword}
              />

              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email :</Form.Label>
              <Form.Control
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                isValid={touched.email && !errors.email}
              />
              {touched.email && errors.email ? (
                <div className="error-message">{errors.email}</div>
              ) : null}
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone :</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                className={touched.phone && errors.phone ? "has-error" : null}
              />
              {touched.phone && errors.phone ? (
                <div className="error-message">{errors.phone}</div>
              ) : null}
            </Form.Group>
            <Form.Group controlId="formBlog">
              <Form.Label>Blog :</Form.Label>
              <Form.Control
                type="text"
                name="blog"
                placeholder="Blog URL"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.blog}
                className={touched.blog && errors.blog ? "has-error" : null}
              />
              {touched.blog && errors.blog ? (
                <div className="error-message">{errors.blog}</div>
              ) : null}
            </Form.Group>
            {/*Submit button that is disabled after button is clicked/form is in the process of submitting*/}
            <Button variant="primary" type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </MYFORM>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
