import { Voucher } from "@/types/voucher";
import axios from "axios";

export const addCoupon = async (
  coupon: Voucher,
  token: string
): Promise<void> => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}api/v1/voucher`,
    coupon,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(response);
  if (response.status !== 200) {
    throw new Error("Failed to add coupon");
  }
};
