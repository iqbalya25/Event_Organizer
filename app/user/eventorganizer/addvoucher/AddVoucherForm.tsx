"use client";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSession } from "next-auth/react";
import { useCoupon } from "@/app/hooks/addVoucher";

import { UserSession } from "@/types/usersession";
import { Voucher } from "@/types/voucher";

const AddVoucherForm: React.FC = () => {
  const { data: session } = useSession();
  const user = session?.user as UserSession;
  const { createCoupon, loading, error } = useCoupon();

  const initialValues: Voucher = {
    name: "",
    code: "",
    discountPercent: 0,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Coupon name is required"),
    code: Yup.string().required("Coupon code is required"),
    discountPercent: Yup.number()
      .min(1, "Discount must be at least 1%")
      .max(100, "Discount cannot be more than 100%")
      .required("Discount is required"),
  });

  const handleSubmit = async (
    values: Voucher,
    { resetForm }: { resetForm: () => void }
  ) => {
    if (user && user.token) {
      console.log("triggered");
      await createCoupon(values);
      resetForm();
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add Coupon</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="bg-white p-6 rounded-lg shadow-md">
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Coupon Name
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="code"
              className="block text-sm font-medium text-gray-700"
            >
              Coupon Code
            </label>
            <Field
              type="text"
              id="code"
              name="code"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <ErrorMessage
              name="code"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="discountPercent"
              className="block text-sm font-medium text-gray-700"
            >
              Discount (%)
            </label>
            <Field
              type="number"
              id="discountPercent"
              name="discountPercent"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <ErrorMessage
              name="discountPercent"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <button
            type="submit"
            className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-200"
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Coupon"}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddVoucherForm;
