import React from "react";

const VehicleAccordion = ({ route, id, setOpen, open }) => {
  const convertSecondsToTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    return `${hours}hr ${minutes}min`;
  };

  const convertMetersToKmAndMs = (meters) => {
    const kms = Math.floor(meters / 1000);
    const metersLeft = meters % 1000;

    return `${kms}km ${metersLeft}m`;
  };

  return (
    <>
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3"
          onClick={() => {
            open ? setOpen(null) : setOpen(id);
          }}
          aria-expanded={open}
        >
          <span className={`${open ? "text-blue-600" : ""}`}>
            {route?.vehicleLabel ?? ""}
          </span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 shrink-0 transition-transform ${
              open ? "rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>

      {open && (
        <div className="p-5 border border-t-0 border-gray-200 text-gray-500">
          <div className="flex justify-between">
            <span className=" text-gray-500">
              Start Time:{" "}
              {new Date(
                route?.vehicleStartTime?.seconds * 1000
              ).toLocaleString()}
            </span>
            <span className=" text-gray-500">
              End Time:{" "}
              {new Date(route?.vehicleEndTime?.seconds * 1000).toLocaleString()}
            </span>
          </div>
          <hr />

          <div className="flex justify-between mt-2">
            <div>
              <table>
                <tr>
                  <td>Shipment performed: </td>
                  <td>{route?.metrics?.performedShipmentCount}</td>
                </tr>
                <tr>
                  <td>Distance Traveld: </td>
                  <td>
                    {convertMetersToKmAndMs(
                      route?.metrics?.travelDistanceMeters
                    )}
                  </td>
                </tr>

                <tr>
                  <td>Max Load: </td>
                  <td>{route?.metrics?.maxLoads?.weight?.amount}</td>
                </tr>
                <tr>
                  <td>Travel Duration: </td>
                  <td>
                    {convertSecondsToTime(
                      route?.metrics?.travelDuration?.seconds
                    )}
                  </td>
                </tr>
                <tr>
                  <td>Visit Duration: </td>
                  <td>
                    {convertSecondsToTime(
                      route?.metrics?.visitDuration?.seconds
                    )}
                  </td>
                </tr>
                <hr />

                <tr>
                  <td>Total Duration: </td>
                  <td>
                    {convertSecondsToTime(
                      route?.metrics?.totalDuration?.seconds
                    )}
                  </td>
                </tr>
              </table>
            </div>
            <div>
              <table>
                <tr>
                  <td>Fixed Cost:</td>
                  <td>
                    {route?.routeCosts?.["model.vehicles.fixed_cost"] ?? 0}
                  </td>
                </tr>
                <tr>
                  <td>Cost per hour:</td>
                  <td>
                    {route?.routeCosts?.["model.vehicles.cost_per_hour"] ?? 0}
                  </td>
                </tr>
                <tr>
                  <td>Shipment Delivery Cost:</td>
                  <td>
                    {route?.routeCosts?.["model.shipments.deliveries.cost"] ??
                      0}
                  </td>
                </tr>
                <tr>
                  <td>Shipment Pickup Cost:</td>
                  <td>
                    {route?.routeCosts?.["model.shipments.pickups.cost"] ?? 0}
                  </td>
                </tr>
                <hr />

                <tr>
                  <td>Total Cost:</td>
                  <td>{route?.routeTotalCost ?? 0}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VehicleAccordion;
