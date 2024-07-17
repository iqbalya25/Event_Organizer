import { useState } from "react";
import { useSession } from "next-auth/react";
import { UserSession } from "@/types/usersession";
import { Product } from "@/types/companyProduct";
import { addProduct } from "../api/post/productAPI";


export const useProducts = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { data: session } = useSession();
  const user = session?.user as UserSession;
  const token = user?.token;

  const createProduct = async (product: Product) => {
    setLoading(true);
    setError(null);
    try {
      if (!token) {
        throw new Error("No token found");
      }
      await addProduct(product, token);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return { createProduct, loading, error };
};
