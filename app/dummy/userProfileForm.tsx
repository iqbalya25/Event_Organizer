"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { uploadImageToCloudinary } from "../../utils/uploadFileToCloudinary";

const UserProfileForm = () => {
  return (
    <Formik
      initialValues={{ username: "", photoProfile: null as File | null }}
      validationSchema={Yup.object({
        username: Yup.string().required("Required"),
        photoProfile: Yup.mixed().required("A file is required"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        if (!values.photoProfile) {
          alert("Photo profile is required");
          setSubmitting(false);
          return;
        }

        try {
          const photoProfileLink = await uploadImageToCloudinary(
            values.photoProfile
          );
          console.log("imgUrlnya: ", photoProfileLink);

          const userProfile = {
            username: values.username,
            photoProfileLink: photoProfileLink,
          };

          console.log("User Profile:", userProfile);
          alert(
            `Submission successful!\nUsername: ${userProfile.username}\nPhoto URL: ${userProfile.photoProfileLink}`
          );
        } catch (error) {
          console.error("Error submitting form:", error);
          if (error instanceof Error) {
            alert(`An error occurred: ${error.message}`);
          } else {
            alert(`An unexpected error occurred: ${JSON.stringify(error)}`);
          }
        } finally {
          setSubmitting(false);
        }
      }}>
      {({ setFieldValue }) => (
        <Form>
          <div className="mt-48">
            <label htmlFor="username">Username</label>
            <Field name="username" type="text" />
            <ErrorMessage name="username" component="div" />
          </div>

          <div>
            <label htmlFor="photoProfile">Photo Profile</label>
            <input
              id="photoProfile"
              name="photoProfile"
              type="file"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const file = event.currentTarget.files?.[0];
                if (file) {
                  setFieldValue("photoProfile", file);
                }
              }}
            />
            <ErrorMessage name="photoProfile" component="div" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default UserProfileForm;