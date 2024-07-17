import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Payment } from "@/types/paymentModel";

interface ReservationFormProps {
  selectedBlock: string | null;
  onSubmit: (payment: Payment) => void;
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

  const handleSubmit = (
    values: typeof initialValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    const payment: Payment = {
      id: Math.floor(Math.random() * 10000), // Example ID generation, replace with proper ID management
      companyName: values.companyName,
      block: values.block,
      email: values.email,
      reservationDate: values.reservationDate,
      amount: values.amount,
      codeReferal: values.codeReferal,
      date: new Date().toISOString().split("T")[0],
      status: values.status,
    };
    onSubmit(payment);
    resetForm();
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
