import * as Yup from "yup";

export const validationRules = Yup.object().shape({
  name: Yup.string()
    .min(1, "*First name must have at least 2 characters")
    .max(20, "*First name can't be longer than 20 characters")
    .required("*First name is required"),

  email: Yup.string()
    .email("*Must be a valid email address")
    .required("*Email is required"),
  address: Yup.string()
    .min(2, "*City name must have at least 2 characters")
    .max(20, "*City name can't be longer than 20 characters")
    .required("*City name is required"),

  age: Yup.number("Must be a Number")
    .required("Must be a Number")
    .positive("Must be a Number")
    .integer("age is required")
    .min(1)
    .max(100),
});
