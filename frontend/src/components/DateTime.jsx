import React, { useState } from 'react';

const DateTimeInput = () => {
  // State to manage date and time
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  // Handle date change
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  // Handle time change
  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  return (
    <div className="grid grid-cols-4  pt-0 mx-auto p-4 space-x-3">
      {/* Date Input */}
      <div className='col-span-2'>
        {/* <label htmlFor="date" className="block text-sm font-medium text-gray-700">
          Select Date
        </label> */}
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
      <div className='col-span-2'>
        {/* <label htmlFor="time" className="block text-sm font-medium text-gray-700">
          Select Time
        </label> */}
        <input
          type="time"
          id="time"
          name="time"
          value={time}
          onChange={handleTimeChange}
          className="mt-1 block w-3/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {/* Display selected values (optional) */}
      {/* <div>
        <p className="text-gray-600">
          <strong>Selected Date:</strong> {date}
        </p>
        <p className="text-gray-600">
          <strong>Selected Time:</strong> {time}
        </p>
      </div> */}
    </div>
  );
};

export default DateTimeInput;
