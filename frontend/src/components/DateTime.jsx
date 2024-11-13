import React, { useEffect, useState } from "react";

const DateTimeInput = ({ setTimee, currentTime }) => {
  // // State to manage date and time
  // const [date, setDate] = useState("");
  // const [time, setTime] = useState("");

  // // Handle date change
  // const handleDateChange = (e) => {
  //   setDate(e.target.value);
  // };

  // // Handle time change
  // const handleTimeChange = (e) => {
  //   setTime(e.target.value);
  // };

  // useEffect(() => {
  //   convertToEpoch(date, time);
  // }, [date, time]);

  // const convertToEpoch = (date, time) => {
  //   const combinedDateTime = new Date(`${date}T${time}:00`);
  //   if (isNaN(combinedDateTime.getTime())) {
  //     console.log(date, time);
  //     console;
  //     return;
  //     throw new Error("Invalid date or time format");
  //   }
  //   const epochTime = combinedDateTime.getTime() / 1000;
  //   setTimee(epochTime.toString());
  // };

  // return (
  //   <div className="grid grid-cols-4  pt-0 mx-auto p-4 space-x-3">
  //     {/* Date Input */}
  //     <div className="col-span-2">
  //       <input
  //         type="date"
  //         id="date"
  //         name="date"
  //         value={date}
  //         onChange={handleDateChange}
  //         className="mt-1 block w-3/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
  //       />
  //     </div>

  //     {/* Time Input */}
  //     <div className="col-span-2">
  //       <input
  //         type="time"
  //         id="time"
  //         name="time"
  //         value={time}
  //         onChange={handleTimeChange}
  //         className="mt-1 block w-3/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
  //       />
  //     </div>
  //   </div>
  // );

  const convertEpochToInputFormat = (epochTime) => {
    const date = new Date(epochTime * 1000); // Convert seconds to milliseconds
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so we add 1
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    // Return in the format YYYY-MM-DDTHH:MM
    console.log(`${year}-${month}-${day}T${hours}:${minutes}`);
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };


  const [datetime, setDatetime] = useState(currentTime? convertEpochToInputFormat(currentTime): "");

  useEffect(() => {
    if (datetime) {
      try {
        convertToEpoch();
      } catch (err) {
        console.error(err);
      }
    }
  }, [datetime]);

  const convertToEpoch = () => {
    try {
      const dateObj = new Date(datetime);

      if (isNaN(dateObj.getTime())) {
        return;
      }

      const epoch = Math.floor(dateObj.getTime() / 1000);
      setTimee(epoch.toString());
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="grid grid-cols-4 pt-0 mx-auto p-4 space-x-3">
      <div className="col-span-4">
        <input
          type="datetime-local"
          id="datetime"
          name="datetime"
          defaultValue={datetime}
          onChange={(e) => setDatetime(e.target.value)}
          className="mt-1 block w-3/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
    </div>
  );
};

export default DateTimeInput;
