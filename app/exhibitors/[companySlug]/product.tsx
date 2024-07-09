// components/Product.tsx
import React from "react";
import Image from "next/image";
import { ProductType } from "@/types/companyProduct";

interface ProductProps {
  product: ProductType;
}

const Product: React.FC<ProductProps> = ({ product }) => (
  <div className="border p-4 rounded-lg mb-4">
    <Image
      src={product.photoUrl}
      alt={product.name}
      width={200}
      height={200}
      className="rounded-lg mb-2"
    />
    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
    <p>{product.description}</p>
  </div>
);

export default Product;
