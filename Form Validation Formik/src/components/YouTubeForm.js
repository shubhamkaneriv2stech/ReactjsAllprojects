import React, { useState } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";
import TextError from "./TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const savedValues = {
  name: "Shubham",
  email: "shu@gmail.com",
  channel: "welcomw",
  comments: "sadasdas",
  address: "latiur",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};
const onSubmit = (values, onSubmitProps, { resetForm }) => {
  console.log("Form Data", values);
  console.log("OnSubmit propsa", onSubmitProps);
  onSubmitProps.setSubmitting(false);
  resetForm({});
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Format").required("Required"),
  channel: Yup.string().required("Required"),

  address: Yup.string().required("Required"),
  social: Yup.object({
    facebook: Yup.string().required("Required"),
    twitter: Yup.string().required("Required"),
  }),
  phoneNumbers: Yup.array().required("Required"),
});

const validateComments = (value) => {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
};

const YouTubeForm = () => {
  const [formValues, setFormValues] = useState(null);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      // validateOnChange={false}
      // validateOnBlur={false}
      //validateOnMount
    >
      {(formik) => {
        console.log("Formik props", formik);
        return (
          <div className="App">
            <Form>
              <div className=" form-control">
                <label htmlFor="name">Name</label>
                <Field type="text" id="name" name="name" placeholder="name" />
                <ErrorMessage name="name" component={TextError} />
                <br />
              </div>
              <div className=" form-control">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email"
                />
                <ErrorMessage name="email">
                  {(errorMessage) => (
                    <div className="error">{errorMessage}</div>
                  )}
                </ErrorMessage>
              </div>
              <div className=" form-control">
                <label htmlFor="channel">Channel</label>
                <Field
                  type="text"
                  id="channel"
                  name="channel"
                  placeholder="channel"
                />
                <ErrorMessage name="channel" component={TextError} />
              </div>
              <div className=" form-control">
                <label htmlFor="comments">Comments</label>
                <Field
                  as="textarea"
                  id="comments"
                  name="comments"
                  placeholder="comments"
                  validate={validateComments}
                />
                <ErrorMessage name="comments" component={TextError} />
              </div>
              <div className=" form-control">
                <label htmlFor="address">Address</label>
                <FastField id="address" name="address" placeholder="address">
                  {(props) => {
                    //console.log(props);
                    console.log("Address filed render");
                    const { field, form, meta } = props;
                    return (
                      <div>
                        <input id="address" {...field} type="text" />
                        {meta.touched && meta.error && (
                          <div className="error">{meta.error}</div>
                        )}
                      </div>
                    );
                  }}
                </FastField>
              </div>
              <div className=" form-control">
                <label htmlFor="facebook">Facebook Profile</label>
                <Field
                  type="text"
                  id="facebook"
                  name="social.facebook"
                  placeholder="Facebook"
                />
                <ErrorMessage name="social.facebook" component={TextError} />
              </div>
              <div className=" form-control">
                <label htmlFor="twitter">Twitter Profile</label>
                <Field
                  type="text"
                  id="twitter"
                  name="social.twitter"
                  placeholder="Twitter"
                />
                <ErrorMessage name="social.twitter" component={TextError} />
              </div>
              <div className="form-control">
                <label htmlFor="primaryPh">Primary phone number</label>
                <Field type="text" id="primaryPh" name="phoneNumbers[0]" />
                <ErrorMessage name="phoneNumbers" component={TextError} />
              </div>
              <div className="form-control">
                <label htmlFor="secondaryPh">Secondary phone number</label>
                <Field type="text" id="secondaryPh" name="phoneNumbers[1]" />
                <ErrorMessage name="phoneNumbers[1]" component={TextError} />
              </div>
              <div className="form-control">
                <label>List of phone numbers</label>
                <FieldArray name="phNumbers">
                  {(fieldArrayProps) => {
                    const { push, remove, form } = fieldArrayProps;
                    const { values } = form;
                    const { phNumbers } = values;

                    // console.log('fieldArrayProps', fieldArrayProps)
                    //console.log("Form errors", form.errors);

                    return (
                      <div>
                        {phNumbers.map((phNumber, index) => (
                          <div key={index}>
                            <Field name={`phNumbers[${index}]`} />
                            {index > 0 && (
                              <button
                                type="button"
                                onClick={() => remove(index)}
                              >
                                -
                              </button>
                            )}

                            <button type="button" onClick={() => push("")}>
                              +
                            </button>
                          </div>
                        ))}
                      </div>
                    );
                  }}
                </FieldArray>
              </div>
              {/* <Button
                variant="primary"
                type="button"
                onClick={() => formik.validateField("comments")}
              >
                Validate Comments
              </Button>
              <Button
                variant="primary"
                type="button"
                onClick={() => formik.validateForm()}
              >
                validate all
              </Button>
              <Button
                variant="primary"
                type="button"
                onClick={() => formik.setFieldTouched("comments")}
              >
                Visit Comments
              </Button>
              <Button
                variant="primary"
                type="button"
                onClick={() =>
                  formik.setFieldTouched({
                    name: "true",
                    email: "true",
                    channel: "true",
                    comments: "true",
                    address: "true",
                    social: {
                      facebook: "true",
                      twitter: "true",
                    },
                  })
                }
              >
                Visit Fields
              </Button> */}

              <Button variant="primary" type="submit" className="m-3">
                Load Data
              </Button>
              <Button
                variant="primary"
                type="submit"
                //disabled={!formik.isValid}
                disabled={formik.isSubmitting}
              >
                Submit
              </Button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default YouTubeForm;
