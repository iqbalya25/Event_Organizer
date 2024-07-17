"use client";
import React, { useState } from "react";
import PaymentSection from "@/app/payment/paymentSection";
import HallBLayout from "./layout/HallB";
import { Payment } from "@/types/paymentModel";

const ExhibitionHallB = () => {
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);
  const [bookedBooth, setBookedBooth] = useState<string | null>(null);

  const handleAddPayment = (payment: Payment) => {
    setBookedBooth(payment.block);
  };

  return (
    <div>
      <div className="mb-4 mx-auto">
        <h1 className="mb-2 text-2xl font-bold">Hall B Details</h1>
        <HallBLayout />
        <p className="mb-2">
          Layout: Medium-sized space suitable for exhibitions and conferences.
        </p>
        <p className="mb-2">Price: $800 per day</p>
        <p className="mb-2">Total Area: 3000 square feet</p>
        <p className="mb-2">Area per Booth: 100 square feet</p>
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

export default ExhibitionHallB;
