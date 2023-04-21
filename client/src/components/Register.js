import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Register() {
  const initialValues = {
    userName: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    userName: Yup.string().min(3).max(20).required("User name required!"),
    password: Yup.string().min(4).max(20).required("Password is required!"),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth", data).then((response)=> {
      console.log(response)
    })
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <ErrorMessage name="userName" component="span" />
          <Field
            id="inputCreatePost"
            name="userName"
            placeholder="username... "
          />
          <ErrorMessage name="password" component="span" />
          <Field
            id="inputCreatePost"
            type="password"
            name="password"
            placeholder="password..."
          />

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;
