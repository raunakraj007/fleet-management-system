import React from "react";
import DeliveryTrucIMG from "../../assets/delivery-truck-icon-design-logo-template-vector-24795159.jpg";
import DeleteIcon from "../../assets/delete-1-svgrepo-com.svg";
import EditIcon from "../../assets/edit.svg";
import { deleteVehicleByID } from "../../redux/vehiclesSlice";
import { useDispatch } from "react-redux";
const VehicleCard = ({ vehicle, setId, setOpenEditBox }) => {
  const dispatch = useDispatch();
  return (
    <div className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal hover:scale-105 transition-all duration-100 ">
      <img src={DeliveryTrucIMG} alt="Article" className="w-full mb-3" />
      <div className="p-4 pt-2">
        <div className="mb-8">
          <p className=" font-bold text-lg mb-2 text-indigo-600 inline-block">
            {vehicle?.label ?? "----"}
          </p>

          <table className="text-gray-600">
            <tr>
              <td>Max Load:</td>
              <td>{vehicle?.loadLimits?.weight?.amount ?? "----"}</td>
            </tr>
            <tr>
              <td>Fixed Cost: </td>
              <td>{vehicle?.fixedCost ?? "----"}</td>
            </tr>
            <tr>
              <td>Cost/hour: </td>
              <td>{vehicle?.costPerHour ?? "----"}</td>
            </tr>
          </table>
        </div>
        <div className="flex flex-row-reverse items-center">
          <img
            className="w-8 h-8 rounded-lg mr-4 cursor-pointer"
            src={DeleteIcon}
            onClick={() => {
              dispatch(deleteVehicleByID(vehicle.id));
            }}
          />
          <img
            src={EditIcon}
            onClick={() => {
              setId(vehicle.id);
              setOpenEditBox(true);
            }}
            className="w-10 h-10 rounded-lg mr-4 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
