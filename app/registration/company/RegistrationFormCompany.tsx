"use client";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { uploadImageToCloudinary } from "@/utils/uploadFileToCloudinary";

interface CompanyRegisterFormValues {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  city: string;
  websiteUrl: string;
  referralCode: string;
  profileUrl: string;
}

const CompanyRegisterForm: React.FC = () => {
  const initialValues: CompanyRegisterFormValues = {
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    city: "",
    websiteUrl: "",
    referralCode: "",
    profileUrl: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Company name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    websiteUrl: Yup.string()
      .url("Invalid URL")
      .required("Website URL is required"),
    referralCode: Yup.string(),
    profileUrl: Yup.string().required("Profile picture is required"),
  });

  const handleSubmit = async (
    values: CompanyRegisterFormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log("Form Values:", values); // Print form values to the console

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}api/v1/company/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Failed to register:", errorData);
        throw new Error("Failed to register");
      }

      const data = await response.json();
      console.log("Company registered successfully:", data);
      alert("Company registered successfully!"); // Add user feedback here
      resetForm();
    } catch (error) {
      console.error("Error registering company:", error);
      alert("Error registering company, please try again later."); // Add user feedback here
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 my-20 border border-gray-300 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">
        Register Company
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Company Name
              </label>
              <Field
                id="name"
                name="name"
                type="text"
                className="mt-1 block w-full text-gray-700 bg-gray-100 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                className="mt-1 block w-full text-gray-700 bg-gray-100 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <Field
                id="password"
                name="password"
                type="password"
                className="mt-1 block w-full text-gray-700 bg-gray-100 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <Field
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                className="mt-1 block w-full text-gray-700 bg-gray-100 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <Field
                id="address"
                name="address"
                type="text"
                className="mt-1 block w-full text-gray-700 bg-gray-100 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <Field
                id="city"
                name="city"
                type="text"
                className="mt-1 block w-full text-gray-700 bg-gray-100 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="city"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="websiteUrl"
                className="block text-sm font-medium text-gray-700"
              >
                Website URL
              </label>
              <Field
                id="websiteUrl"
                name="websiteUrl"
                type="url"
                className="mt-1 block w-full text-gray-700 bg-gray-100 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="websiteUrl"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="referralCode"
                className="block text-sm font-medium text-gray-700"
              >
                Referral Code
              </label>
              <Field
                id="referralCode"
                name="referralCode"
                type="text"
                className="mt-1 block w-full text-gray-700 bg-gray-100 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="referralCode"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="profileUrl"
                className="block text-sm font-medium text-gray-700"
              >
                Profile Picture
              </label>
              <input
                type="file"
                id="profileUrl"
                name="profileUrl"
                onChange={async (
                  event: React.ChangeEvent<HTMLInputElement>
                ) => {
                  const file =
                    event.currentTarget.files && event.currentTarget.files[0];
                  if (file) {
                    try {
                      const profileUrl = await uploadImageToCloudinary(file);
                      setFieldValue("profileUrl", profileUrl);
                      console.log(profileUrl);
                    } catch (uploadError) {
                      console.error("Upload error:", uploadError);
                    }
                  }
                }}
                className="mt-1 block w-full text-gray-700 bg-gray-100 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="profileUrl"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {values.profileUrl && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Uploaded Profile Picture
                </label>
                <img
                  src={values.profileUrl}
                  alt="Uploaded Profile"
                  className="mt-2 h-40 w-40 object-cover rounded-md shadow-md"
                />
              </div>
            )}

            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Register Company
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CompanyRegisterForm;
