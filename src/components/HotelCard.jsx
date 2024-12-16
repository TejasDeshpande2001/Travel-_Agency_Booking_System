import React from "react";
import HotelBooking from "./HotelBooking";
function HotelCard() {
  return (
    <div className="flex justify-center items-center min-h-screen px-10 bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
        {/* Room Details Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <h2 className="text-lg font-semibold">
            Superior room - 1 double bed or 2 twin beds
          </h2>
          <div className="text-red-500 font-bold text-2xl">
            $240<span className="text-sm font-normal">/night</span>
          </div>
        </div>

        {/* Return Information */}
        <p className="text-gray-600 text-sm mb-4">Return Wed, Dec 8</p>

        {/* Hotel Information */}
        <div className="border rounded-lg p-4 mb-6 flex items-start gap-4">
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Hotel Logo"
            className="w-12 h-12 object-contain"
          />
          <div>
            <h3 className="font-semibold text-lg">
              CVK Park Bosphorus Hotel Istanbul
            </h3>
            <p className="text-gray-500 text-sm">
              &#x1F4CD; Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
            </p>
          </div>
        </div>

        {/* Check-In and Check-Out Section */}
        <div className="flex justify-between items-center">
          {/* Check-In */}
          <div className="text-center">
            <p className="font-semibold text-gray-700">Thursday, Dec 8</p>
            <p className="text-sm text-gray-500">Check-In</p>
          </div>

          {/* Icon */}
          <div className="flex items-center justify-center">
            <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 8.25h7.5m-7.5 4.5h7.5m-7.5 4.5h7.5M4.5 5.25v13.5c0 1.242 1.008 2.25 2.25 2.25h10.5a2.25 2.25 0 002.25-2.25V5.25"
                />
              </svg>
            </div>
          </div>

          {/* Check-Out */}
          <div className="text-center">
            <p className="font-semibold text-gray-700">Friday, Dec 9</p>
            <p className="text-sm text-gray-500">Check-Out</p>
          </div>
        </div>
      </div>
      <HotelBooking />
      {/* **************************************** */}
    </div>
  );
}

export default HotelCard;
