
import { useState } from "react";
import { useSession } from "next-auth/react";
import { UserSession } from "@/types/usersession";
import { addCoupon } from "../api/post/voucherAPI";
import { Voucher } from "@/types/voucher";

export const useCoupon = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const { data: session } = useSession();
  const user = session?.user as UserSession;
  const token = user?.token;

  const createCoupon = async (coupon: Voucher) => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      if (!token) {
        throw new Error("No token found");
      }
      await addCoupon(coupon, token);
      setSuccess("Added coupon successfully!");
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

  return { createCoupon, loading, error, success };
};
