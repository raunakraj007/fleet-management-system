import React, { useState } from "react";
import ShipmentTable from "./ShipmentTabel";
import AddIcon from "../../assets/add-to-queue-svgrepo-com.svg";
import FileIcon from "../../assets/fileAdd.svg";
import delIcon from "../../assets/delete-1-svgrepo-com.svg";
import ShipmentAddFormCall from "./ShipmentAddFormCall";
import { useDispatch } from "react-redux";
import { addShipments, removeAllShipments } from "../../redux/shipmentSlice";
import ConfirmationModal from "../ConfirmationModal";

const ShipmentList = () => {
  const dispatch = useDispatch();

  const [openAddForm, setOpenAddForm] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const json = JSON.parse(e.target.result);
          dispatch(addShipments(json));
          setError("");
        } catch (error) {
          console.log(error);
          setError("Invalid JSON file.");
        }
      };
      reader.readAsText(file);
    }
  };

  const deleteAllShipments = () => {
    dispatch(removeAllShipments());
  };

  return (
    <>
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 scrollbar-hide">
        <div className="container mx-auto px-6 py-2 h-[100vh]">
          <div className="h-full">
            <div className="">
              <div className="flex space-x-3">
                <span className="text-3xl font-medium text-gray-700">
                  Shipments
                </span>
                <div
                  className="h-8 w-8 cursor-pointer"
                  onClick={() => {
                    console.log("Add Shipment Clicked");
                    setOpenAddForm(true);
                  }}
                >
                  <img src={AddIcon} alt="" />
                </div>

                <div
                  className="h-8 w-8 cursor-pointer"
                  onClick={() => {
                    document.getElementById("file-upload").click();
                  }}
                >
                  <img src={FileIcon} alt="" />
                  <input
                    className="hidden"
                    id="file-upload"
                    type="file"
                    accept=".json"
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                  />
                </div>
              </div>
              <div className="float-right flex space-x-5">
                <span className="text-red-500">{error}</span>

                {/* for deleting all shipments */}
                {/* <div
                  className="h-8 w-8 cursor-pointer"
                  onClick={() => setOpen(true)}
                >
                  <img src={delIcon} alt="" />
                </div> */}
              </div>
              {openAddForm && <ShipmentAddFormCall closeBox={setOpenAddForm} />}

              {/* <ConfirmationModal
                open={open}
                setOpen={setOpen}
                Confirm={deleteAllShipments}
              /> */}
            </div>

            <ShipmentTable />
          </div>
        </div>
      </main>
    </>
  );
};

export default ShipmentList;
