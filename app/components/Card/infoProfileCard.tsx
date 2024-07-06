import React from "react";

interface CompanyInfoCardProps {
  creditAmount: number;
  referralCode: string;
}

const CompanyInfoCard: React.FC<CompanyInfoCardProps> = ({
  creditAmount,
  referralCode,
}) => {
  return (
    <div>
      <div
        style={{
          boxShadow:
            "0 4px 10px -1px rgba(0, 0, 0, 0.1), 0 -4px 10px -1px rgba(0, 0, 0, 0.1), 4px 0 10px -1px rgba(0, 0, 0, 0.1), -4px 0 10px -1px rgba(0, 0, 0, 0.1)",
        }}
        className="flex flex-col gap-3 bg-white shadow-md p-5 mb-5  flex items-start"
      >
        <h2 className="text-xl text-red-600 font-bold">Company Information</h2>
        <div className="flex flex-col items-start">
          <div className="flex flex-row items-center justify-center">
            <i className="fas fa-coins text-black text-2xl px-2" />
            <p className="text-black pb-1">Credit Amount: ${creditAmount}</p>
          </div>
          <div className="flex flex-row items-center justify-center">
            <i className="fas fa-code text-black text-2xl px-2" />
            <p className="text-black pb-1">Referral Code: {referralCode}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfoCard;
