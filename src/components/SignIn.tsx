import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { signIn } from "../api/api.js";
import { useAtom } from "jotai";
import { UserAtom } from "../lib/store.js";

const forms = [
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
];

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "​Password must be at least 4 characters"),
});

const SignIn = () => {
  const navigate = useNavigate();

  const [user, setUser] = useAtom(UserAtom);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      //   alert(JSON.stringify(values));
      console.log(values);
      const { email, password } = values;
      const User = await signIn({ email, password });

      // navigate("/dashboard");
      console.log(User);
      
      if (!User) {
        alert("Invalid Credentials");
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
          LOGIN
        </Button>
      </div>
    </form>
  );
};

export default SignIn;
