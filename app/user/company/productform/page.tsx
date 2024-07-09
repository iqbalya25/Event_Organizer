"use client";

import React, { useState } from "react";
import ProductForm from "./ProductForm";

const ProductFormPage = () => {
  // State to hold list of products
  const [products, setProducts] = useState<string[]>([]);

  // Method to add a new product
  const addProduct = (productName: string) => {
    setProducts((prevProducts) => [...prevProducts, productName]);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Add a New Product</h1>
      <ProductForm onAddProduct={addProduct} />

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Products Added</h2>
        <ul>
          {products.map((product, index) => (
            <li key={index} className="list-disc ml-4">
              {product}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductFormPage;
