import axios from "axios";
import { Voucher } from "@/types/voucher";

export const getVouchers = async (token: string): Promise<Voucher[]> => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}api/v1/voucher/organizer`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (response.status !== 200) {
    throw new Error("Failed to fetch vouchers");
  }
  return response.data.data;
};
