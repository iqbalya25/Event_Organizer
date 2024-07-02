"use client";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

interface EOSignUpFormValues {
  name: string;
  email: string;
  address: string;
  city: string;
  password: string;
  contactNumber: string;
}

const RegistrationFormEO: React.FC = () => {
  const initialValues: EOSignUpFormValues = {
    name: "",
    email: "",
    address: "",
    city: "",
    password: "",
    contactNumber: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    contactNumber: Yup.string().required("Contact number is required"),
  });

  const handleSubmit = async (values: EOSignUpFormValues) => {
    try {
      const response = await fetch("/api/eo-signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to sign up");
      }

      const data = await response.json();
      console.log("EO signed up successfully:", data);
      alert("EO signed up successfully!"); // Add user feedback here
    } catch (error) {
      console.error("Error signing up EO:", error);
      alert("Error signing up EO, please try again later."); // Add user feedback here
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 my-20 border border-1 shadow-md">
      <h1 className="text-2xl font-bold mb-4">EO Sign Up</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-black"
            >
              Name
            </label>
            <Field
              id="name"
              name="name"
              type="text"
              className="mt-1 block w-full text-black bg-gray-200 border-gray-300 rounded-md shadow-sm py-2 px-3"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black"
            >
              Email
            </label>
            <Field
              id="email"
              name="email"
              type="email"
              className="mt-1 block w-full text-black bg-gray-200 border border-gray-300 rounded-md shadow-sm py-2 px-3"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-black"
            >
              Address
            </label>
            <Field
              id="address"
              name="address"
              type="text"
              className="mt-1 block w-full text-black border bg-gray-200 border-gray-300 rounded-md shadow-sm py-2 px-3"
            />
            <ErrorMessage
              name="address"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-black"
            >
              City
            </label>
            <Field
              id="city"
              name="city"
              type="text"
              className="mt-1 block w-full text-black bg-gray-200 border border-gray-300 rounded-md shadow-sm py-2 px-3"
            />
            <ErrorMessage
              name="city"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-black"
            >
              Password
            </label>
            <Field
              id="password"
              name="password"
              type="password"
              className="mt-1 block w-full text-black bg-gray-200 border border-gray-300 rounded-md shadow-sm py-2 px-3"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="contactNumber"
              className="block text-sm font-medium text-black"
            >
              Phone Number
            </label>
            <Field
              id="contactNumber"
              name="contactNumber"
              type="text"
              className="mt-1 block w-full text-black bg-gray-200 border border-gray-300 rounded-md shadow-sm py-2 px-3"
            />
            <ErrorMessage
              name="contactNumber"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
            >
              Sign Up
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationFormEO;
