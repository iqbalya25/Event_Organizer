"use client";
import React from "react";
import HallALayout from "./layout/hallA";
import PaymentSection from "@/app/payment/paymentSection";

const ExhibitionHallA = () => {
  return (
    <div>
      <div className="mb-4 mx-auto ">
        <h1 className="mb-2 text-2xl font-bold">Hall A Details</h1>
        <HallALayout />
        <p className="mb-2">
          Layout: Large open space suitable for exhibitions and events.
        </p>
        <p className="mb-2">Total Area: 5000 square feet</p>
        <p className="mb-2">Area per Booth: 100 square feet</p>
        <h2 className="mt-4 mb-2 text-xl font-bold">Facilities</h2>
        <ul className="list-disc list-inside">
          <li>Central Air Conditioning</li>
          <li>High-speed WiFi</li>
          <li>24/7 Security</li>
          <li>Restrooms and Showers</li>
          <li>Food and Beverage Stalls</li>
          <li>Audio-Visual Equipment</li>
          <li>Ample Parking Space</li>
          <li>Emergency Medical Services</li>
          <li>Dedicated Event Management Team</li>
        </ul>
      </div>
      {/* <div className="mb-4">
        <label htmlFor="block" className="block mb-2">
          Select Block:
        </label>
        <select id="block" className="border-2 border-gray-400 p-2 w-full">
          <option value="" disabled>
            Select a block
          </option>
          <option value="A1">A1</option>
          <option value="A2">A2</option>
          <option value="A3">A3</option>
          <option value="B1">B1</option>
          <option value="B2">B2</option>
          <option value="B3">B3</option>
          <option value="C1">C1</option>
          <option value="C2">C2</option>
          <option value="C3">C3</option>
        </select>
      </div>
      <h3 className="text-lg font-bold mt-4">Booking Form</h3>
      <form className="flex flex-col gap-4 mt-4">
        <label>
          Name:
          <input
            type="text"
            className="border-2 border-gray-400 p-2 mt-1 w-full"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            className="border-2 border-gray-400 p-2 mt-1 w-full"
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            className="border-2 border-gray-400 p-2 mt-1 w-full"
          />
        </label>
        <br />
        <button
          type="submit"
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Book Now
        </button>
      </form> */}
      <PaymentSection />
    </div>
  );
};

export default ExhibitionHallA;
