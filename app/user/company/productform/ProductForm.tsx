"use client";
import React, { useState } from "react";

interface ProductFormProps {
  onAddProduct: (productName: string) => void; // Callback function to add product to list
}

const ProductForm: React.FC<ProductFormProps> = ({ onAddProduct }) => {
  const [productName, setProductName] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (productName.trim()) {
      onAddProduct(productName);
      setProductName(""); // Clear input after adding
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        placeholder="Enter product name"
        required
        className="border p-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;
