"use client";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useProducts } from "@/app/hooks/createProduct";
import { uploadImageToCloudinary } from "@/utils/uploadFileToCloudinary";
import { Product } from "@/types/companyProduct";

const ProductForm: React.FC = () => {
  const { createProduct, loading, error } = useProducts();

  const initialValues: Product = {
    name: "",
    description: "",
    imageUrl: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Product name is required"),
    description: Yup.string().required("Product description is required"),
  });

  const handleSubmit = async (
    values: Product,
    { resetForm }: { resetForm: () => void }
  ) => {
    await createProduct(values);
    resetForm();
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form className="bg-white p-6 rounded-lg shadow-md">
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Product Name
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
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Product Description
              </label>
              <Field
                as="textarea"
                id="description"
                name="description"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="imageUrl"
                className="block text-sm font-medium text-gray-700"
              >
                Image Upload
              </label>
              <input
                type="file"
                id="imageUrl"
                name="imageUrl"
                onChange={async (
                  event: React.ChangeEvent<HTMLInputElement>
                ) => {
                  const file =
                    event.currentTarget.files && event.currentTarget.files[0];
                  if (file) {
                    try {
                      const imageUrl = await uploadImageToCloudinary(file);
                      setFieldValue("imageUrl", imageUrl);
                    } catch (uploadError) {
                      console.error("Upload error:", uploadError);
                    }
                  }
                }}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <ErrorMessage
                name="imageUrl"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {values.imageUrl && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Uploaded Image
                </label>
                <img
                  src={values.imageUrl}
                  alt="Uploaded"
                  className="mt-2 h-40 w-40 object-cover rounded-md shadow-md"
                />
              </div>
            )}

            <button
              type="submit"
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Product"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProductForm;
