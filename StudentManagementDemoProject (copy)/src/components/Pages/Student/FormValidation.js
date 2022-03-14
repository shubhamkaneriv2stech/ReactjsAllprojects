import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, Container } from "react-bootstrap";
import { Formik } from "formik";
import { validationRules } from "./ValidationSchema";
import base_url from "../../../Service/ApiBoot";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import {
  FetchingStudentList,
  SaveStudentData,
  updateStudentData,
} from "../../common/AxiosFunction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const FormValidation = () => {
  const { id } = useParams();
  console.log(id);

  const [user, setUser] = useState({});

  const [errorMsg, setErrorMsg] = useState(null);

  const [response, setResponse] = useState(null);

  const [spinner, setspinner] = useState(true);
  const saveapi = `${base_url}/rest/students`;
  const updateapi = `${base_url}/rest/students/${id}`;
  useEffect(() => {
    const source = axios.CancelToken.source();
    FetchingStudentList(setUser, setspinner, setErrorMsg, updateapi, source);
  }, [updateapi]);

  let studentEditValues = {
    name: user.name,

    email: user.email,
    address: user.address,

    age: user.age,
  };
  let studentAddValues = {
    name: "",

    email: "",
    address: "",

    age: "",
  };

  const notify = () =>
    toast.success(`Data Saved Sucessfully`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  let history = useHistory();
  return (
    <>
      <Container
        fluid
        style={{
          padding: "30px",
          paddingTop: "0px",
          paddingBottom: "15px",
        }}
      >
        <div>
          {id ? (
            <h5 className="mb-3">Student Edit Form </h5>
          ) : (
            <h5 className="mb-3">Student Registration Form </h5>
          )}
          <span style={{ color: "red" }}>* Marked fields are manadatory</span>
        </div>
        <Formik
          enableReinitialize={true}
          initialValues={studentEditValues || studentAddValues}
          validationSchema={validationRules}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            id
              ? updateStudentData(values, updateapi, history)
              : SaveStudentData(values, saveapi, history, setResponse);
            // When button submits form and form is in the process of submitting, submit button is disabled

            // Simulate submitting to database, shows us values submitted, resets form

            setTimeout(() => {
              console.log(values);
              //setDetails(values);
              //resetForm()
              setSubmitting(false);
            }, 1000);
          }}
          validateOnMount
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            resetForm,
            isValid,
          }) => (
            <Form onSubmit={handleSubmit} className="mt-3">
              {/*First Name input Field*/}
              {/* {response && notify()} */}

              <Form.Group controlId="firstName" className="mb-3">
                <Form.Label>
                  First name <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="First Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name || ""}
                  isInvalid={touched.name && errors.name}
                  isValid={touched.name && !errors.name}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
                <div style={{ color: "red" }}>
                  {response && response.message}
                </div>
              </Form.Group>
              {/*Email input Field*/}
              <Form.Group controlId="email" className="mb-3">
                <Form.Label>
                  Email<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email || ""}
                  isInvalid={touched.email && errors.email}
                  isValid={touched.email && !errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              {/*City input Field*/}
              <Form.Group controlId="address" className="mb-3">
                <Form.Label>
                  Address <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="Address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address || ""}
                  isInvalid={touched.address && errors.address}
                  isValid={touched.address && !errors.address}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.address}
                </Form.Control.Feedback>
              </Form.Group>
              {/*age input Field*/}
              <Form.Group controlId="age" className="mb-3">
                <Form.Label>
                  Age <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="number"
                  name="age"
                  placeholder="Age"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.age || ""}
                  isInvalid={touched.age && errors.age}
                  isValid={touched.age && !errors.age}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.age}
                </Form.Control.Feedback>
                <div style={{ color: "red" }}>{response && response.age}</div>
              </Form.Group>
              <div className="d-flex align-items-center justify-content-center">
                {/*Submit button that is disabled after button is clicked,form is in the process of submitting*/}

                {id ? (
                  <Button
                    variant="primary"
                    type="submit"
                    className="m-2"
                    //  disabled={isSubmitting}
                    disabled={!isValid}
                  >
                    Update
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    type="submit"
                    className="m-2"
                    //  disabled={isSubmitting}
                    disabled={!isValid}
                  >
                    Submit
                  </Button>
                )}
                <Button
                  type="reset"
                  variant="danger"
                  className="mr-3"
                  onClick={(e) => resetForm()}
                >
                  Reset
                </Button>
              </div>
            </Form>
          )}
        </Formik>

        <ToastContainer />
      </Container>
    </>
  );
};

export default FormValidation;
