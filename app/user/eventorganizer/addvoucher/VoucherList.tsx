"use client";

import React from "react";
import VoucherCard from "../components/VoucherCard";
import { useVouchers } from "@/app/hooks/useVoucher";

const VoucherList: React.FC = () => {
  const { data: vouchers, isLoading, error } = useVouchers();

  if (isLoading) {
    return <p>Loading vouchers...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error.message}</p>;
  }

  if (!Array.isArray(vouchers)) {
    return <p>No vouchers found.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Vouchers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {vouchers.map((voucher) => (
          <VoucherCard key={voucher.code} voucher={voucher} />
        ))}
      </div>
    </div>
  );
};

export default VoucherList;
