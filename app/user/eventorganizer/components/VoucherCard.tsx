import React from "react";
import { Voucher } from "@/types/voucher";

interface VoucherCardProps {
  voucher: Voucher;
}

const VoucherCard: React.FC<VoucherCardProps> = ({ voucher }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4 flex flex-col justify-between h-40 w-60">
      <h3 className="text-xl font-bold mb-2">{voucher.name}</h3>
      <p className="text-gray-700 mb-2">Code: {voucher.code}</p>
      <p className="text-gray-700">Discount: {voucher.discountPercent}%</p>
    </div>
  );
};

export default VoucherCard;
