"use client";

import React, { useState } from "react";
import PaymentList from "@/app/payment/paymentList";
import { Payment } from "@/types/paymentModel";
import PaymentForm from "@/app/payment/paymentForm";
import PaymentConfirmation from "./paymentconfirmation";

interface PaymentSectionProps {
  selectedBlock: string | null;
  onAddPayment: (payment: Payment) => void;
}

const PaymentSection: React.FC<PaymentSectionProps> = ({
  selectedBlock,
  onAddPayment,
}) => {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [currentPayment, setCurrentPayment] = useState<Payment | null>(null);

  const handleAddPayment = (payment: Payment) => {
    setPayments([...payments, payment]);
    setCurrentPayment(payment);
    onAddPayment(payment);
  };

  return (
    <div>
      <section className="container mx-auto p-4">
        <PaymentForm
          selectedBlock={selectedBlock}
          onSubmit={handleAddPayment}
        />
      </section>
      <section className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Payment Confirmation</h2>
        {currentPayment && <PaymentConfirmation payment={currentPayment} />}
      </section>
      <section className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Payment List</h2>
        <PaymentList payments={payments} />
      </section>
    </div>
  );
};

export default PaymentSection;
