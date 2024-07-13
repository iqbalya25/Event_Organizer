import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";

const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_API_KEY = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY as string;
const CLOUDINARY_UPLOAD_PRESET = process.env.CLOUDINARY_UPLOAD_PRESET as string;

const UserProfileForm = () => {
  return (
    <Formik
      initialValues={{ username: "", photoProfile: null }}
      validationSchema={Yup.object({
        username: Yup.string().required("Required"),
        photoProfile: Yup.mixed().required("A file is required"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        if (!values.photoProfile) {
          // Handle case where photoProfile is null or undefined
          alert("Photo profile is required");
          setSubmitting(false);
          return;
        }

        const formData = new FormData();
        formData.append("file", values.photoProfile);
        formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
        formData.append("api_key", CLOUDINARY_API_KEY);

        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        const photoProfileLink = response.data.secure_url;
        console.log("imgUrlnya: ", photoProfileLink);

        const userProfile = {
          username: values.username,
          photoProfileLink: photoProfileLink,
        };

        await axios.post("http://localhost:8080/api/user/profile", userProfile);

        setSubmitting(false);
      }}>
      {({ setFieldValue }) => (
        <Form>
          <label htmlFor="username">Username</label>
          <Field name="username" type="text" />
          <ErrorMessage name="username" />

          <label htmlFor="photoProfile">Photo Profile</label>
          <input
            name="photoProfile"
            type="file"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const file =
                event.currentTarget.files && event.currentTarget.files[0];
              if (file) {
                setFieldValue("photoProfile", file);
              }
            }}
          />
          <ErrorMessage name="photoProfile" />

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default UserProfileForm;
