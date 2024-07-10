import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { format } from "date-fns";

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
      imageUrl: Yup.string().url("Invalid URL").required("Required"),
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
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          {...formik.getFieldProps("name")}
          className={`mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
            formik.touched.name && formik.errors.name ? "border-red-500" : ""
          }`}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-500 text-sm">{formik.errors.name}</div>
        ) : null}
      </div>
      <div>
        <label className="block text-gray-700">Address</label>
        <input
          type="text"
          {...formik.getFieldProps("address")}
          className={`mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
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
        <label className="block text-gray-700">City</label>
        <input
          type="text"
          {...formik.getFieldProps("city")}
          className={`mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
            formik.touched.city && formik.errors.city ? "border-red-500" : ""
          }`}
        />
        {formik.touched.city && formik.errors.city ? (
          <div className="text-red-500 text-sm">{formik.errors.city}</div>
        ) : null}
      </div>
      <div>
        <label className="block text-gray-700">Website URL</label>
        <input
          type="url"
          {...formik.getFieldProps("websiteUrl")}
          className={`mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
            formik.touched.websiteUrl && formik.errors.websiteUrl
              ? "border-red-500"
              : ""
          }`}
        />
        {formik.touched.websiteUrl && formik.errors.websiteUrl ? (
          <div className="text-red-500 text-sm">{formik.errors.websiteUrl}</div>
        ) : null}
      </div>
      <div>
        <label className="block text-gray-700">Image URL</label>
        <input
          type="url"
          {...formik.getFieldProps("imageUrl")}
          className={`mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
            formik.touched.imageUrl && formik.errors.imageUrl
              ? "border-red-500"
              : ""
          }`}
        />
        {formik.touched.imageUrl && formik.errors.imageUrl ? (
          <div className="text-red-500 text-sm">{formik.errors.imageUrl}</div>
        ) : null}
      </div>
      <div>
        <label className="block text-gray-700">Description</label>
        <textarea
          {...formik.getFieldProps("description")}
          className={`mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
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
        <label className="block text-gray-700">Capacity</label>
        <input
          type="number"
          {...formik.getFieldProps("capacity")}
          className={`mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
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
        <label className="block text-gray-700">Start Date</label>
        <input
          type="date"
          {...formik.getFieldProps("dateStart")}
          className={`mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
            formik.touched.dateStart && formik.errors.dateStart
              ? "border-red-500"
              : ""
          }`}
        />
        {formik.touched.dateStart && formik.errors.dateStart ? (
          <div className="text-red-500 text-sm">{formik.errors.dateStart}</div>
        ) : null}
      </div>
      <div>
        <label className="block text-gray-700">End Date</label>
        <input
          type="date"
          {...formik.getFieldProps("dateEnd")}
          className={`mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
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
        <label className="block text-gray-700">Start Time</label>
        <input
          type="time"
          {...formik.getFieldProps("hourStart")}
          className={`mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
            formik.touched.hourStart && formik.errors.hourStart
              ? "border-red-500"
              : ""
          }`}
        />
        {formik.touched.hourStart && formik.errors.hourStart ? (
          <div className="text-red-500 text-sm">{formik.errors.hourStart}</div>
        ) : null}
      </div>
      <div>
        <label className="block text-gray-700">End Time</label>
        <input
          type="time"
          {...formik.getFieldProps("hourEnd")}
          className={`mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
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
        <label className="block text-gray-700">Event Type ID</label>
        <input
          type="text"
          {...formik.getFieldProps("eventTypeId")}
          className={`mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
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
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Add Event
        </button>
      </div>
    </form>
  );
};

export default EventForm;
