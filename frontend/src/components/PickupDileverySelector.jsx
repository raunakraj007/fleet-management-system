import React, { useState } from "react";

const DeliveryPickupSelector = (props) => {
  const { setIsDelivery, setIsPickUp } = props;
  const [selectedOption, setSelectedOption] = useState("pickup");

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
        <button
          onClick={() => {
            setSelectedOption("pickup");
            setIsDelivery(false);
            setIsPickUp(true);
          }}
          className={`
            flex items-center justify-center
            px-6 py-3 rounded-lg
            font-medium text-sm
            transition-all duration-200
            border-2
            ${
              selectedOption === "pickup"
                ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }
          `}
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            />
          </svg>
          Pick Up
        </button>

        <button
          onClick={() => {
            setSelectedOption("delivery");
            setIsDelivery(true);
            setIsPickUp(false);
          }}
          className={`
            flex items-center justify-center
            px-6 py-3 rounded-lg
            font-medium text-sm
            transition-all duration-200
            border-2
            ${
              selectedOption === "delivery"
                ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }
          `}
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Delivery
        </button>
      </div>
    </div>
  );
};

export default DeliveryPickupSelector;
