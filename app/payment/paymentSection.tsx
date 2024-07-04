import React from "react";

const PaymentSection = () => {
  return (
    <div className="mt-4 bg-gray-200 ">
      <h1 className="text-xl lg:text-6xl pt-32 pb-8 bg-black text-white font-bold flex justify-center items-center">
        Payment Details
      </h1>
      <div className="px-32 py-24">
        <form className="flex flex-col gap-4 mt-4">
          <label>
            Cardholder Name:
            <input
              type="text"
              className="border-2 border-gray-400 p-2 mt-1 w-full"
            />
          </label>
          <label>
            Card Number:
            <input
              type="text"
              className="border-2 border-gray-400 p-2 mt-1 w-full"
            />
          </label>
          <label>
            Expiry Date:
            <input
              type="text"
              className="border-2 border-gray-400 p-2 mt-1 w-full"
              placeholder="MM/YY"
            />
          </label>
          <label>
            CVV:
            <input
              type="text"
              className="border-2 border-gray-400 p-2 mt-1 w-full"
            />
          </label>
          <br />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentSection;
