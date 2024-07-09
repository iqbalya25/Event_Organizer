// components/ProductList.tsx
import React from "react";

import { ProductType } from "@/types/companyProduct";
import Product from "./product";

interface ProductListProps {
  products: ProductType[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => (
  <div className="mt-8">
    <h2 className="text-2xl font-bold mb-4">Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default ProductList;
