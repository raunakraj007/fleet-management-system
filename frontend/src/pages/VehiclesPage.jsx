import React, { useState } from "react";
import AddIcon from "../assets/add-to-queue-svgrepo-com.svg";
import FileIcon from "../assets/fileAdd.svg";
import delIcon from "../assets/delete-1-svgrepo-com.svg";
import { addVehicles, removeAllVehicles } from "../redux/vehiclesSlice";

import { useDispatch, useSelector } from "react-redux";
import VehiclesList from "../components/VehiclePage/VehiclesList";
import EmptyVehiclePage from "../components/VehiclePage/EmptyVehiclePage";
// import VehicleFormCall from "../components/VehiclePage/VehicleFormCall";
import ConfirmationModal from "../components/ConfirmationModal";
import VehicleAddForm from "../components/VehiclePage/Form/index"

const VehiclesPage = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const vehicles = useSelector((state) => state.vehiclesSlice.vehicles);
  const [openAddForm, setOpenAddForm] = useState(false);

  const [openAlert, setOpenAlert] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const json = JSON.parse(e.target.result);
          console.log(json);
          dispatch(addVehicles(json));
          setError("");
        } catch (error) {
          setError("Invalid JSON file.");
        }
      };
      reader.readAsText(file);
    }
  };

  const deleteAllVehicles = () => {
    dispatch(removeAllVehicles());
  };

  if (vehicles.length === 0) {
    return <EmptyVehiclePage />;
  }
  return (
    <main className="flex-1 h-full overflow-x-hidden overflow-y-auto bg-gray-200">
      <div className="container mx-auto px-6 py-8">
        <div className="">
          <span className="text-3xl font-medium text-gray-700">Vehicles</span>
          <div className="float-right flex space-x-5">
            <span className="text-red-500">{error}</span>

            <div
              className="h-8 w-8 cursor-pointer"
              onClick={() => {
                setOpenAddForm(true);
              }}
            >
              <img src={AddIcon} alt="" />
            </div>

            <div
              className="h-8 w-8 cursor-pointer"
              onClick={() => {
                document.getElementById("file-upload-vehicle").click();
              }}
            >
              <img src={FileIcon} alt="" />
              <input
                className="hidden"
                id="file-upload-vehicle"
                type="file"
                accept=".json"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </div>

            <div
              className="h-8 w-8 cursor-pointer"
              onClick={() => setOpenAlert(true)}
            >
              <img src={delIcon} alt="" />
            </div>
          </div>
          {/* {openAddForm && <VehicleFormCall closeBox={setOpenAddForm} />} */}
          {openAddForm && <VehicleAddForm closeBox={setOpenAddForm} />}
          {openAlert && (
            <ConfirmationModal
              open={openAlert}
              setOpen={setOpenAlert}
              Confirm={deleteAllVehicles}
            />
          )}
        </div>
        <VehiclesList />
      </div>
    </main>
  );
};

export default VehiclesPage;
