"use client";
import React, { useState } from "react";

import PaymentSection from "@/app/payment/paymentSection";
import HallCLayout from "./layout/HallC";
import { Payment } from "@/types/paymentModel";

const ExhibitionHallC = () => {
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);
  const [bookedBooth, setBookedBooth] = useState<string | null>(null);

  const handleAddPayment = (payment: Payment) => {
    setBookedBooth(payment.block);
  };

  return (
    <div>
      <div className="mb-4">
        <h1 className="mb-2 text-2xl font-bold">Hall C Details</h1>
        <HallCLayout />
        <p className="mb-2">
          Layout: Small space suitable for mini exhibitions and conferences.
        </p>
        <p className="mb-2">Price: $600 per day</p>
        <p className="mb-2">Total Area: 2000 square feet</p>
        <p className="mb-2">Area per Booth: 70 square feet</p>
        <h2 className="mt-4 mb-2 text-xl font-bold">Facilities</h2>
        <ul className="list-disc list-inside">
          <li>Air Conditioning</li>
          <li>High-speed WiFi</li>
          <li>24/7 Security</li>
          <li>Restrooms</li>
          <li>Food and Beverage Stalls</li>
          <li>Audio-Visual Equipment</li>
          <li>Parking Space</li>
          <li>Emergency Medical Services</li>
        </ul>
      </div>
      <PaymentSection
        selectedBlock={selectedBlock}
        onAddPayment={handleAddPayment}
      />
    </div>
  );
};

export default ExhibitionHallC;
