import React, { useState } from "react";

const DeliveryPickupSelector = (props) => {
  const { setIsDelivery, setIsPickUp } = props;
  const [selectedOption, setSelectedOption] = useState("pickup");

  return (
    <div className="mr-2  bg-white mt-4   rounded-lg ">
      <div className="flex flex-row ">
        <button
          onClick={() => {
            setSelectedOption("pickup");
            setIsDelivery(false);
            setIsPickUp(true);
          }}
          className={`
        flex items-center justify-center
        w-[50%]
        px-4 py-2 rounded-md
        font-medium text-xs
        transition-all duration-200
        
        
        ${
          selectedOption === "pickup"
            ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
            : "bg-white text-gray-700 hover:bg-gray-100 border-gray-300"
        }
      `}
        >
          <svg
            className="w-4 h-4 mr-2"
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
            w-[50%]
        flex items-center justify-center
        px-4 py-2 rounded-lg
        font-medium text-xs
        transition-all duration-200
       
        ${
          selectedOption === "delivery"
            ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
            : "bg-white text-gray-700 hover:bg-gray-100 border-gray-300"
        }
      `}
        >
          <svg
            className="w-4 h-4 mr-2"
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
