import React, { useState } from "react";

const HotelBooking = () => {
  const [paymentOption, setPaymentOption] = useState("pay-in-full");

  const handlePaymentOptionChange = (option) => {
    setPaymentOption(option);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">
          CVK Park Bosphorus Hotel Istanbul
        </h2>
        <p className="text-gray-500">$240/night</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-500">
          Gümüşsuyu Mah. İnönü Cad. No:8, Istanbul 34437
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Price Details</h3>
        <div className="grid grid-cols-2 gap-2">
          <p className="text-gray-500">BaseFare</p>
          <p className="text-right">$1000.00</p>
          <p className="text-gray-500">Taxes</p>
          <p className="text-right">$200.00</p>
          <p className="text-gray-500">ServiceFee</p>
          <p className="text-right">$100.00</p>
          <p className="text-gray-500">Discount</p>
          <p className="text-right">-$50.00</p>
          <p className="font-medium">Total</p>
          <p className="font-medium text-right">$1250.00</p>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Payment Options</h3>
        <div className="flex items-center">
          <input
            type="radio"
            name="payment-option"
            value="pay-in-full"
            checked={paymentOption === "pay-in-full"}
            onChange={() => handlePaymentOptionChange("pay-in-full")}
            className="mr-2"
          />
          <label htmlFor="pay-in-full">Pay in full</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            name="payment-option"
            value="pay-part-now"
            checked={paymentOption === "pay-part-now"}
            onChange={() => handlePaymentOptionChange("pay-part-now")}
            className="mr-2"
          />
          <label htmlFor="pay-part-now">Pay part now, part later</label>
        </div>
        {paymentOption === "pay-part-now" && (
          <p className="text-gray-500 mt-2">
            Pay $207.43 now, and the rest ($207.43) will be automatically
            charged to the same payment method on Nov 14, 2022. No extra fees.
          </p>
        )}
      </div>
    </div>
  );
};

export default HotelBooking;
