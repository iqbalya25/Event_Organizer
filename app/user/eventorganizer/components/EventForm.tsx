"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { format } from "date-fns";
import { uploadImageToCloudinary } from "@/utils/uploadFileToCloudinary";

interface EventFormProps {
  onAddEvent: (event: {
    name: string;
    address: string;
    city: string;
    websiteUrl: string;
    imageUrl: string;
    description: string;
    capacity: number;
    dateStart: string;
    dateEnd: string;
    hourStart: string;
    hourEnd: string;
    eventTypeId: string;
  }) => void;
}

const EventForm: React.FC<EventFormProps> = ({ onAddEvent }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      city: "",
      websiteUrl: "",
      imageUrl: "",
      description: "",
      capacity: "",
      dateStart: "",
      dateEnd: "",
      hourStart: "",
      hourEnd: "",
      eventTypeId: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      address: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      websiteUrl: Yup.string().url("Invalid URL").required("Required"),
      imageUrl: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      capacity: Yup.number().positive("Must be positive").required("Required"),
      dateStart: Yup.date().required("Required"),
      dateEnd: Yup.date().required("Required"),
      hourStart: Yup.string().required("Required"),
      hourEnd: Yup.string().required("Required"),
      eventTypeId: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const formattedValues = {
          ...values,
          dateStart: format(new Date(values.dateStart), "yyyy/MM/dd"),
          dateEnd: format(new Date(values.dateEnd), "yyyy/MM/dd"),
        };

        console.log("Form Values:", formattedValues); // Print the form values to the console

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/event/create-event`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formattedValues),
          }
        );

        if (response.ok) {
          const event = await response.json();
          onAddEvent(event);
          resetForm();
        } else {
          console.error("Failed to submit event");
          const error = await response.json();
          console.error("Error:", error.message);
        }
      } catch (error) {
        console.error("An error occurred while submitting the form:", error);
      }
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Add Event</h2>
        <div>
          <label className="block text-gray-700 font-semibold">Name</label>
          <input
            type="text"
            {...formik.getFieldProps("name")}
            className={`bg-gray-200 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
              formik.touched.name && formik.errors.name ? "border-red-500" : ""
            }`}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          ) : null}
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Address</label>
          <input
            type="text"
            {...formik.getFieldProps("address")}
            className={`bg-gray-200 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
              formik.touched.address && formik.errors.address
                ? "border-red-500"
                : ""
            }`}
          />
          {formik.touched.address && formik.errors.address ? (
            <div className="text-red-500 text-sm">{formik.errors.address}</div>
          ) : null}
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">City</label>
          <input
            type="text"
            {...formik.getFieldProps("city")}
            className={`bg-gray-200 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
              formik.touched.city && formik.errors.city ? "border-red-500" : ""
            }`}
          />
          {formik.touched.city && formik.errors.city ? (
            <div className="text-red-500 text-sm">{formik.errors.city}</div>
          ) : null}
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">
            Website URL
          </label>
          <input
            type="url"
            {...formik.getFieldProps("websiteUrl")}
            className={`bg-gray-200 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
              formik.touched.websiteUrl && formik.errors.websiteUrl
                ? "border-red-500"
                : ""
            }`}
          />
          {formik.touched.websiteUrl && formik.errors.websiteUrl ? (
            <div className="text-red-500 text-sm">
              {formik.errors.websiteUrl}
            </div>
          ) : null}
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">
            Image Upload
          </label>
          <input
            type="file"
            id="imageUrl"
            name="imageUrl"
            onChange={async (event: React.ChangeEvent<HTMLInputElement>) => {
              const file =
                event.currentTarget.files && event.currentTarget.files[0];
              if (file) {
                try {
                  const imageUrl = await uploadImageToCloudinary(file);
                  formik.setFieldValue("imageUrl", imageUrl);
                } catch (uploadError) {
                  console.error("Upload error:", uploadError);
                }
              }
            }}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {formik.touched.imageUrl && formik.errors.imageUrl ? (
            <div className="text-red-500 text-sm">{formik.errors.imageUrl}</div>
          ) : null}
        </div>
        {formik.values.imageUrl && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Uploaded Image
            </label>
            <img
              src={formik.values.imageUrl}
              alt="Uploaded"
              className="mt-2 h-40 w-40 object-cover rounded-md shadow-md"
            />
          </div>
        )}
        <div>
          <label className="block text-gray-700 font-semibold">
            Description
          </label>
          <textarea
            {...formik.getFieldProps("description")}
            className={`bg-gray-200 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
              formik.touched.description && formik.errors.description
                ? "border-red-500"
                : ""
            }`}
          ></textarea>
          {formik.touched.description && formik.errors.description ? (
            <div className="text-red-500 text-sm">
              {formik.errors.description}
            </div>
          ) : null}
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Capacity</label>
          <input
            type="number"
            {...formik.getFieldProps("capacity")}
            className={`bg-gray-200 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
              formik.touched.capacity && formik.errors.capacity
                ? "border-red-500"
                : ""
            }`}
          />
          {formik.touched.capacity && formik.errors.capacity ? (
            <div className="text-red-500 text-sm">{formik.errors.capacity}</div>
          ) : null}
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">
            Start Date
          </label>
          <input
            type="date"
            {...formik.getFieldProps("dateStart")}
            className={`bg-gray-200 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
              formik.touched.dateStart && formik.errors.dateStart
                ? "border-red-500"
                : ""
            }`}
          />
          {formik.touched.dateStart && formik.errors.dateStart ? (
            <div className="text-red-500 text-sm">
              {formik.errors.dateStart}
            </div>
          ) : null}
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">End Date</label>
          <input
            type="date"
            {...formik.getFieldProps("dateEnd")}
            className={`bg-gray-200 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
              formik.touched.dateEnd && formik.errors.dateEnd
                ? "border-red-500"
                : ""
            }`}
          />
          {formik.touched.dateEnd && formik.errors.dateEnd ? (
            <div className="text-red-500 text-sm">{formik.errors.dateEnd}</div>
          ) : null}
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">
            Start Time
          </label>
          <input
            type="time"
            {...formik.getFieldProps("hourStart")}
            className={`bg-gray-200 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
              formik.touched.hourStart && formik.errors.hourStart
                ? "border-red-500"
                : ""
            }`}
          />
          {formik.touched.hourStart && formik.errors.hourStart ? (
            <div className="text-red-500 text-sm">
              {formik.errors.hourStart}
            </div>
          ) : null}
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">End Time</label>
          <input
            type="time"
            {...formik.getFieldProps("hourEnd")}
            className={`bg-gray-200 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
              formik.touched.hourEnd && formik.errors.hourEnd
                ? "border-red-500"
                : ""
            }`}
          />
          {formik.touched.hourEnd && formik.errors.hourEnd ? (
            <div className="text-red-500 text-sm">{formik.errors.hourEnd}</div>
          ) : null}
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">
            Event Type ID
          </label>
          <input
            type="text"
            {...formik.getFieldProps("eventTypeId")}
            className={`bg-gray-200 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
              formik.touched.eventTypeId && formik.errors.eventTypeId
                ? "border-red-500"
                : ""
            }`}
          />
          {formik.touched.eventTypeId && formik.errors.eventTypeId ? (
            <div className="text-red-500 text-sm">
              {formik.errors.eventTypeId}
            </div>
          ) : null}
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200"
          >
            Add Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
