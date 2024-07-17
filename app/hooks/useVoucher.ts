"use client";
import { useSession } from "next-auth/react";
import { UserSession } from "@/types/usersession";
import { Voucher } from "@/types/voucher";
import { useQuery } from "@tanstack/react-query";
import { getVouchers } from "../api/fetch/fetchVoucher";

export const useVouchers = () => {
  const { data: session } = useSession();
  const user = session?.user as UserSession;
  const token = user?.token;

  return useQuery<Voucher[], Error>({
    queryKey: ["vouchers", token],
    queryFn: () => getVouchers(token!),
    enabled: !!token, // Only fetch if token is available
  });
};
