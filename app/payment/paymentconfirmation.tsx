import React from "react";
import { Payment } from "./paymentModel";

interface PaymentConfirmationProps {
  payment: Payment;
}

const PaymentConfirmation: React.FC<PaymentConfirmationProps> = ({
  payment,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Payment Confirmation</h2>
      <p>Company Name: {payment.companyName}</p>
      <p>Block: {payment.block}</p>
      <p>Email: {payment.email}</p>
      <p>Reservation Date: {payment.reservationDate}</p>
      <p>Amount: ${payment.amount}</p>
      <p>Code Referal: {payment.codeReferal}</p>
      <p>Status: {payment.status}</p>
      <p>Date: {new Date(payment.date).toLocaleDateString()}</p>
    </div>
  );
};

export default PaymentConfirmation;
