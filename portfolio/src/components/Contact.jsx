import React from "react";
import BasicEmailButton from "./basicemailbutton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";


const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters")
    .required("Username is required"),
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must contain a lowercase letter")
    .matches(/[A-Z]/, "Password must contain an uppercase letter")
    .matches(/[0-9]/, "Password must contain a number")
    .required("Password is required"),
});

export default function Contact() {
  const serviceId = "service_0ka3h3m"; // Replace with your Service ID
  const templateId = "template_ly3z5h5"; // Replace with your Template ID
  const publicKey = "tK5UalH1AusEHleA4"; // Replace with your Public Key


  return (
    <div className="bg-slate-600 min-h-screen">
    <div style={{ maxWidth: 400, maxHeight:"200px ",margin: "40px auto", fontFamily: "sans-serif" }}>
      <h2 className="text-white py-10">Sign Up</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log("Form submitted:", values);
          setSubmitting(false);

          const templateParams = {
            name: values.username, // Maps to {{name}}
            email: values.email, // Maps to {{email}}
            password: values.password, // Maps to {{message}}
            title: "Test Email Button Inquiry", // Maps to {{title}}
          };
          emailjs
            .send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
              console.log("Success!", response.status, response.text);
              alert("Email sent successfully!");
            })
            .catch((err) => {
              console.error("Failed to send email:", err);
              alert("Failed to send email.");
            });
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          
          <Form>
            
            <div style={{ marginBottom: 16 }}>
              <label htmlFor="username" className="text-white">Username</label>
              <Field id="username" name="username" type="text" style={{ width: "100%", padding: 8, marginTop: 4 }} />
              <ErrorMessage name="username" component="div" style={{ color: "red", fontSize: 13, marginTop: 4 }} />
            </div>

            <div style={{ marginBottom: 16 }}>
              <label htmlFor="email" className="text-white">Email</label>
              <Field id="email" name="email" type="email" style={{ width: "100%", padding: 8, marginTop: 4 }} />
              <ErrorMessage name="email" component="div" style={{ color: "red", fontSize: 13, marginTop: 4 }} />
            </div>

            <div style={{ marginBottom: 16 }}>
              <label htmlFor="password" className="text-white">Password</label>
              <Field id="password" name="password" type="password" style={{ width: "100%", padding: 8, marginTop: 4 }} />
              <ErrorMessage name="password" component="div" style={{ color: "red", fontSize: 13, marginTop: 4 }} />
            </div>

            <button type="submit" className="rounded-3xl bg-orange-500 text-white py-1.5 px-2"> submit form</button>
            
          </Form>
        )}
      </Formik>
    </div>
    </div>
  );
}