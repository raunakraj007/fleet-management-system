import React from "react";

const RouteModifiers = (props) => {
  const { avoidTolls, setAvoidTolls, avoidHighways, setAvoidHighways } = props;

  return (
    <>
      {/* Avoid Tools */}
      <div className="flex items-center mt-4">
        <span className="mr-2 text-gray-500">Avoid Tools:</span>
        <div
          className={`relative inline-flex h-5 w-10 cursor-pointer rounded-full transition-colors duration-200 ease-in-out ${
            avoidTolls ? "bg-blue-600" : "bg-gray-300"
          }`}
          onClick={() => setAvoidTolls(!avoidTolls)}
        >
          <span
            className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${
              avoidTolls ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </div>
      </div>

      {/* Avoid Highways */}
      <div className="flex items-center mt-4">
        <span className="mr-2 text-gray-500">Avoid Highways:</span>
        <div
          className={`relative inline-flex h-5 w-10 cursor-pointer rounded-full transition-colors duration-200 ease-in-out ${
            avoidHighways ? "bg-blue-600" : "bg-gray-300"
          }`}
          onClick={() => setAvoidHighways(!avoidHighways)}
        >
          <span
            className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${
              avoidHighways ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </div>
      </div>
    </>
  );
};

export default RouteModifiers;
