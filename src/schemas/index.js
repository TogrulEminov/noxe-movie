import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const basicSchema = yup.object().shape({
  name: yup.string("Name is a requiered fild").required(),
  email: yup
    .string()
    .email()
    .required(),
  surname: yup.string().required(),
  password: yup
    .string()
    .min(5, "Please enter minimum 5 characters...")
    .matches(passwordRules, {
      message:
        "Please enter at least 1 uppercase letter, 1 lowercase letter and 1 number...",
    })
    .required("Entering a password is mandatory..."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match...")
    .required("It is mandatory to enter the password again..."),
});
