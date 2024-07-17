import { Product } from "@/types/companyProduct";
import axios from "axios";

export const addProduct = async (
  product: Product,
  token: string
): Promise<void> => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}api/v1/products`,
    product,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (response.status !== 200) {
    throw new Error("Failed to add product");
  }
};
