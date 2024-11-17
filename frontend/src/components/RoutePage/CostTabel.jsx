import React from "react";
import { useSelector } from "react-redux";

const CostTabel = () => {
  const costs = useSelector(
    (state) => state?.optimizeRouteRes?.optimizeRouteRes?.metrics?.costs
  );

  const vehicleFixedCost = costs?.["model.vehicles.fixed_cost"] ?? 0;
  const vehicleCostPerHour = costs?.["model.vehicles.cost_per_hour"] ?? 0;
  const shipmentDeliveryCost = costs?.["model.shipments.deliveries.cost"] ?? 0;
  const shipmentPickupCost = costs?.["model.shipments.pickups.cost"] ?? 0;
  const totalCost =
    vehicleFixedCost +
    vehicleCostPerHour +
    shipmentDeliveryCost +
    shipmentPickupCost;

  return (
    <div className="bg-white w-10/12 m-auto mt-10 h-[30vh] rounded-xl py-8 px-5">
      <table className="w-10/12 mx-auto">
        <tr>
          <td className="text-gray-600">Vehicle Fixed Cost: </td>
          <td className="text-gray-600">{vehicleFixedCost}</td>
        </tr>
        <tr>
          <td className="text-gray-600">Vehicle Cost/Hour:</td>
          <td className="text-gray-600">{vehicleCostPerHour}</td>
        </tr>
        <tr>
          <td className="text-gray-600">Shipment Delivery Cost:</td>
          <td className="text-gray-600">{shipmentDeliveryCost}</td>
        </tr>
        <tr>
          <td className="text-gray-600">Shipment Pickup Cost:</td>
          <td className="text-gray-600">{shipmentPickupCost}</td>
        </tr>
        <hr className="h-2 mt-1" />
        <tr>
          <td className="text-gray-600">Total Cost:</td>
          <td className="text-gray-600">{totalCost}</td>
        </tr>
      </table>
    </div>
  );
};

export default CostTabel;
