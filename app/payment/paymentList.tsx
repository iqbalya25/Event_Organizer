import React from "react";
import { Payment } from "../../types/paymentModel";

interface PaymentListProps {
  payments: Payment[];
}

const PaymentList: React.FC<PaymentListProps> = ({ payments }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Payments</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Company</th>
              <th className="py-3 px-6 text-left">Amount</th>
              <th className="py-3 px-6 text-center">Code Referal</th>
              <th className="py-3 px-6 text-center">Date</th>
              <th className="py-3 px-6 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {payments.map((payment) => (
              <tr
                key={payment.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left">{payment.companyName}</td>
                <td className="py-3 px-6 text-left">
                  {payment.amount
                    ? `$${payment.amount.toLocaleString()}`
                    : "N/A"}
                </td>
                <td className="py-3 px-6 text-center">
                  {payment.codeReferal || "N/A"}
                </td>
                <td className="py-3 px-6 text-center">
                  {payment.date
                    ? new Date(payment.date).toLocaleDateString()
                    : "N/A"}
                </td>
                <td className="py-3 px-6 text-center">
                  <span
                    className={`py-1 px-3 rounded-full text-xs ${
                      payment.status === "Completed"
                        ? "bg-green-200 text-green-900"
                        : "bg-yellow-200 text-yellow-900"
                    }`}
                  >
                    {payment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentList;
