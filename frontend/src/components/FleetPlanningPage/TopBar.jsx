import React, { useEffect, useState } from "react";

const TopBar = ({ setIsPlan, isPlan }) => {
  const [selectedOption, setSelectedOption] = useState("plan");

  useEffect(() => {
    if (isPlan) {
      setSelectedOption("plan");
    } else {
      setSelectedOption("response");
    }
  }, [isPlan]);

  return (
    <div className=" bg-white    rounded-lg ">
      <div className="flex flex-row ">
        <button
          onClick={() => {
            setSelectedOption("plan");
            setIsPlan(true);
          }}
          className={`flex items-center justify-center
                      w-[50%]
        px-4 py-2 rounded-md
        font-medium text-xs
        transition-all duration-200
        
        
        ${
          selectedOption === "plan"
            ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
            : "bg-white text-gray-700 hover:bg-gray-100 border-gray-300"
        }
      `}
        >
          Plan
        </button>

        <button
          onClick={() => {
            setSelectedOption("response");
            setIsPlan(false);
          }}
          className={`
            w-[50%]
        flex items-center justify-center
        px-4 py-2 rounded-lg
        font-medium text-xs
        transition-all duration-200
       
        ${
          selectedOption === "response"
            ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
            : "bg-white text-gray-700 hover:bg-gray-100 border-gray-300"
        }
      `}
        >
          Response
        </button>
      </div>
    </div>
  );
};

export default TopBar;
