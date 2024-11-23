import React from "react";
import DateTimeInput from "../../DateTime";

const TimeWindows = (props) => {
  const {
    currentVehicle,
    setStartingTimeWindowStarts,
    setStartingTimeWindowEnds,
    setEndingTimeWindowStarts,
    setEndingTimeWindowEnds,
  } = props;

  return (
    <>
      <div className="mt-8 text-gray-700 ">
        <h2>
          <strong>Optional</strong>
        </h2>

        <h3 className="text-gray-700 mt-4">Starting Time Window</h3>
        <DateTimeInput
          setTimee={setStartingTimeWindowStarts}
          currentTime={
            currentVehicle?.startTimeWindows?.[0]?.startTime?.seconds ?? null
          }
        />
        <h3>to</h3>
        <DateTimeInput
          setTimee={setStartingTimeWindowEnds}
          currentTime={
            currentVehicle?.startTimeWindows?.[0]?.endTime?.seconds ?? null
          }
        />
        <h3 className="text-gray-700 mt-4">Ending Time Window</h3>
        <DateTimeInput
          setTimee={setEndingTimeWindowStarts}
          currentTime={
            currentVehicle?.endTimeWindows?.[0]?.startTime?.seconds ?? null
          }
        />
        <h3>to</h3>
        <DateTimeInput
          setTimee={setEndingTimeWindowEnds}
          currentTime={
            currentVehicle?.endTimeWindows?.[0]?.endTime?.seconds ?? null
          }
        />
      </div>
    </>
  );
};

export default TimeWindows;
