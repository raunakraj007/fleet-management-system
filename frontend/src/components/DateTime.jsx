import React, { useEffect, useState } from "react";

const DateTimeInput = ({ setTimee }) => {
  // State to manage date and time
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // Handle date change
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  // Handle time change
  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  useEffect(() => {
    convertToEpoch(date, time);
  }, [date, time]);

  const convertToEpoch = (date, time) => {
    const combinedDateTime = new Date(`${date}T${time}:00`);
    if (isNaN(combinedDateTime.getTime())) {
      console.log(date, time);
      console;
      return;
      throw new Error("Invalid date or time format");
    }
    const epochTime = combinedDateTime.getTime() / 1000;
    setTimee(epochTime.toString());
  };

  return (
    <div className="grid grid-cols-4  pt-0 mx-auto p-4 space-x-3">
      {/* Date Input */}
      <div className="col-span-2">
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={handleDateChange}
          className="mt-1 block w-3/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {/* Time Input */}
      <div className="col-span-2">
        <input
          type="time"
          id="time"
          name="time"
          value={time}
          onChange={handleTimeChange}
          className="mt-1 block w-3/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
    </div>
  );
};

export default DateTimeInput;
