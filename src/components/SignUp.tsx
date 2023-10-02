import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

import { signUp } from "../api/api.js";
import { useAtom } from "jotai";
import { UserAtom } from "../lib/store.js";

const validationSchema = yup.object({
  firstName: yup
    .string()
    .min(1, "Name should more than 1 character")
    .required("Enter your  First name"),
  lastName: yup
    .string()
    .min(1, "Name should more than 1 character")
    .required("Enter your  Last name"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "​Password must be at least 4 characters"),
  passwordConfirm: yup
    .string()
    .required("Passwords does not match")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const forms = [
  {
    placeholder: "First Name",
    name: "firstName",
    type: "text",
  },
  {
    placeholder: "Last Name",
    name: "lastName",
    type: "text",
  },
  {
    placeholder: "Email-id",
    name: "email",
    type: "email",
  },
  {
    placeholder: "Password",
    name: "password",
    type: "text",
  },
  {
    placeholder: "Confirm Password",
    name: "passwordConfirm",
    type: "text",
  },
];

const SignUp = () => {
  const navigate = useNavigate();

 const[user,setUser] =useAtom(UserAtom)

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      //   alert(JSON.stringify(values));
      console.log(values);
      const { firstName, lastName, email, password } = values;
      const User = await signUp({ firstName, lastName, email, password });

      console.log(User);
      if (User.status===false || User==undefined) {
        alert("User with this email address already exists");
      } else {
        setUser((prev) => {
          console.log("setting");
          return {
            ...prev,
            firstName: User.content.data.firstName,
            token: User.content.meta.access_token,
          };
        });

        navigate("/dashboard");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="forms">
      <div className="flex flex-col gap-4">
        {forms.map((form) => {
          return (
            <TextField
              sx={{
                "& input::placeholder": {
                  fontSize: "14px",
                  paddingLeft: "20px",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#c0c0c0",
                  },
                },
              }}
              variant="outlined"
              type={`${form.type}`}
              name={`${form.name}`}
              placeholder={`${form.placeholder}`}
              size="small"
              value={formik.values[form.name]}
              onChange={formik.handleChange}
              error={
                formik.touched[form.name] && Boolean(formik.errors[form.name])
              }
              helperText={formik.touched[form.name] && formik.errors[form.name]}
              onBlur={formik.handleBlur}
            />
          );
        })}

        <Button
          type="submit"
          sx={{
            backgroundColor: "#1f64ff",
            padding: "10px",
          }}
          variant="contained"
        >
          SIGN UP
        </Button>
      </div>
    </form>
  );
};

export default SignUp;
