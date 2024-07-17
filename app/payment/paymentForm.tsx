import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Payment } from "@/types/paymentModel";

interface ReservationFormProps {
  selectedBlock: string | null;
  onSubmit: (payment: Payment) => void;
}

interface BoothState {
  id: number;
  name: string;
  booked: boolean;
  categoryId: number;
}

const blockPrices: { [key: string]: number } = {
  A1: 1000,
  A2: 1000,
  A3: 1000,
  B1: 800,
  B2: 800,
  B3: 800,
  C1: 600,
  C2: 600,
  C3: 600,
};

const initialBooths: BoothState[] = [
  { id: 1, name: "A1", booked: false, categoryId: 14 },
  { id: 2, name: "A2", booked: false, categoryId: 14 },
  { id: 3, name: "A3", booked: false, categoryId: 14 },
  { id: 4, name: "A4", booked: false, categoryId: 14 },
  { id: 5, name: "A5", booked: false, categoryId: 14 },
  { id: 6, name: "A6", booked: false, categoryId: 14 },
  { id: 7, name: "B1", booked: false, categoryId: 14 },
  { id: 8, name: "B2", booked: false, categoryId: 14 },
  { id: 9, name: "B3", booked: false, categoryId: 14 },
  { id: 10, name: "B4", booked: false, categoryId: 14 },
  { id: 11, name: "B5", booked: false, categoryId: 14 },
  { id: 12, name: "B6", booked: false, categoryId: 14 },
  { id: 13, name: "C1", booked: false, categoryId: 14 },
  { id: 14, name: "C2", booked: false, categoryId: 14 },
  { id: 15, name: "C3", booked: false, categoryId: 14 },
  { id: 16, name: "C4", booked: false, categoryId: 14 },
  { id: 17, name: "C5", booked: false, categoryId: 14 },
  { id: 18, name: "C6", booked: false, categoryId: 14 },
];

const PaymentForm: React.FC<ReservationFormProps> = ({
  selectedBlock,
  onSubmit,
}) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (selectedBlock) {
      setPrice(blockPrices[selectedBlock]);
    }
  }, [selectedBlock]);

  const initialValues = {
    companyName: "",
    block: selectedBlock || "",
    email: "",
    reservationDate: "",
    amount: price,
    codeReferal: "",
    status: "Pending",
  };

  const validationSchema = Yup.object({
    companyName: Yup.string().required("Company Name is required"),
    block: Yup.string().required("Block is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    reservationDate: Yup.date().required("Date is required"),
  });

  const sendDataToBackend = async (data: BoothState) => {
    try {
      console.log("Sending data to backend:", data);
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/block/${data.id}`,
        data
      );
      if (response.status === 200) {
        console.log("Data successfully sent to backend:", response.data);
      } else {
        console.error("Failed to submit data:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending data to backend:", error);
    }
  };

  const handleSubmit = async (
    values: typeof initialValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    const booth = initialBooths.find((booth) => booth.name === values.block);

    if (!booth) {
      console.error("Booth not found for block:", values.block);
      return;
    }

    const payment: Payment = {
      id: Math.floor(Math.random() * 10000), // Example ID generation, replace with proper ID management
      companyName: values.companyName,
      block: values.block,
      email: values.email,
      reservationDate: values.reservationDate,
      amount: price, // Use the static price based on the selected block
      codeReferal: values.codeReferal,
      date: new Date().toISOString().split("T")[0],
      status: values.status,
    };

    const boothData: BoothState = {
      ...booth,
      booked: true,
    };

    try {
      // Send booth data to backend
      await sendDataToBackend(boothData);

      // If booth data is successfully sent, then proceed with the payment
      onSubmit(payment);
      resetForm();
    } catch (error) {
      console.error("Error in handleSubmit:", error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ values }) => (
        <Form className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Reservation Form</h2>
          <div className="mb-4">
            <label
              htmlFor="companyName"
              className="block text-sm font-medium text-gray-700"
            >
              Company Name
            </label>
            <Field
              type="text"
              id="companyName"
              name="companyName"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <ErrorMessage
              name="companyName"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="block"
              className="block text-sm font-medium text-gray-700"
            >
              Selected Block
            </label>
            <Field
              type="text"
              id="block"
              name="block"
              value={values.block}
              disabled
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-gray-100 sm:text-sm"
            />
            <ErrorMessage
              name="block"
              component="div"
              className="text-red-500 text-sm mt-1"
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
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="reservationDate"
              className="block text-sm font-medium text-gray-700"
            >
              Reservation Date
            </label>
            <Field
              type="date"
              id="reservationDate"
              name="reservationDate"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <ErrorMessage
              name="reservationDate"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700"
            >
              Amount
            </label>
            <Field
              type="text"
              id="amount"
              name="amount"
              value={`$${price}`}
              disabled
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-gray-100 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="codeReferal"
              className="block text-sm font-medium text-gray-700"
            >
              Code Referal
            </label>
            <Field
              type="text"
              id="codeReferal"
              name="codeReferal"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <ErrorMessage
              name="codeReferal"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
          >
            Book Now
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default PaymentForm;
