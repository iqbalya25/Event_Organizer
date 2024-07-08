// components/Product.tsx
import React from "react";

const Product: React.FC<{ name: string }> = ({ name }) => {
  return <li className="mb-2 p-2 border rounded">{name}</li>;
};

export default Product;
