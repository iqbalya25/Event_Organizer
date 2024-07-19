"use client";

import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useSession } from "next-auth/react";
import { uploadImageToCloudinary } from "@/utils/uploadFileToCloudinary";
import { UserSession } from "@/types/usersession";

interface AddSpeakerFormProps {
  eventId: string;
}


interface SpeakerFormValues {
  name: string;
  position: string;
  companyName: string;
  eventId: string;
  profileImgUrl: string;
}


const AddSpeakerForm: React.FC<AddSpeakerFormProps> = ({ eventId }) => {
  const { data: session } = useSession();
  const user = session?.user as UserSession;
  const token = user?.token;

  const initialValues: SpeakerFormValues = {
    name: "",
    position: "",
    companyName: "",
    eventId: eventId,
    profileImgUrl: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    position: Yup.string().required("Position is required"),
    companyName: Yup.string().required("Company name is required"),
    profileImgUrl: Yup.string().required("Profile image is required"),
  });

  const handleSubmit = async (values: SpeakerFormValues) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/speakers`,
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status !== 200) {
        throw new Error("Failed to submit speaker form");
      }

      const data = response.data;
      console.log("Speaker registered successfully:", data);
      alert("Speaker registered successfully!");
    } catch (error) {
      console.error("Error submitting speaker form:", error);
      alert("Error submitting speaker form, please try again later.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 my-20 border border-gray-300 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">
        Become a Speaker
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
                Name
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
                htmlFor="position"
                className="block text-sm font-medium text-gray-700"
              >
                Position
              </label>
              <Field
                id="position"
                name="position"
                type="text"
                className="mt-1 block w-full text-gray-700 bg-gray-100 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="position"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700"
              >
                Company Name
              </label>
              <Field
                id="companyName"
                name="companyName"
                type="text"
                className="mt-1 block w-full text-gray-700 bg-gray-100 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="companyName"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="profileImgUrl"
                className="block text-sm font-medium text-gray-700"
              >
                Profile Picture
              </label>
              <input
                type="file"
                id="profileImgUrl"
                name="profileImgUrl"
                onChange={async (
                  event: React.ChangeEvent<HTMLInputElement>
                ) => {
                  const file =
                    event.currentTarget.files && event.currentTarget.files[0];
                  if (file) {
                    try {
                      const profileImgUrl = await uploadImageToCloudinary(file);
                      setFieldValue("profileImgUrl", profileImgUrl);
                    } catch (uploadError) {
                      console.error("Upload error:", uploadError);
                    }
                  }
                }}
                className="mt-1 block w-full text-gray-700 bg-gray-100 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="profileImgUrl"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {values.profileImgUrl && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Uploaded Profile Picture
                </label>
                <img
                  src={values.profileImgUrl}
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
                Register as Speaker
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddSpeakerForm;
