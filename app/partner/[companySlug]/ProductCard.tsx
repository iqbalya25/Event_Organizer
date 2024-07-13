// app/expo/partner/components/ProductCard.tsx

import React from "react";
import { Product } from "@/types/companyProduct";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-lg p-4">
      <img
        src={product.imageUrl || "/placeholder-product.jpg"}
        alt={product.name}
        className="w-full h-48 object-cover mb-2 rounded"
      />
      <h3 className="font-semibold mb-1">{product.name}</h3>
      <p className="text-sm text-gray-600">{product.description}</p>
    </div>
  );
};

export default ProductCard;
