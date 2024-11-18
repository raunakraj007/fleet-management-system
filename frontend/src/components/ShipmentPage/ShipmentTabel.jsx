import { useSelector } from "react-redux";
import del from "../../assets/delete-1-svgrepo-com.svg";
import edit from "../../assets/edit.svg";
import { deleteShipmentByID } from "../../redux/shipmentSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import ShipmentAddFormCall from "./ShipmentAddFormCall";

const ShipmentTable = () => {
  const dispatch = useDispatch();
  const [editID, setEditID] = useState(null);
  const [openEditBox, setOpenEditBox] = useState(false);

  const openEdit = (id) => {
    console.log("button clicked eith id");
    console.log(id);
    setEditID(id);
    setOpenEditBox(true);
  };
  function convertEpochToHuman(epochTime) {
    const date = new Date(epochTime * 1000);
    const formattedDate = date.toLocaleString();
    return formattedDate;
  }
  const Shipments = useSelector((store) => store.shipmentSlice.shipments);
  return (
    <div className="mt-8">
      <div className="flex flex-col mt-8">
        <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 ">
          <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
            <div className="max-h-[600px] overflow-y-auto relative scrollbar-hide">
              <table className="min-w-full">
                <thead className="sticky top-0 z-10">
                  <tr>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      ID
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Label
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Visit
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      TimeWindow
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Duration
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50" />
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {Shipments.map((shipment, index) => {
                    const id = shipment?.id;
                    const Label = shipment?.label;
                    const pickups = shipment?.pickups;
                    const deliveries = shipment?.deliveries;

                    // Safely access nested properties
                    const pickup = pickups?.[0];
                    console.log("pickup", pickup);
                    const pickupTimeWindows = pickup?.timeWindows?.[0];
                    console.log("pickupTimeWindows", pickupTimeWindows);
                    const pickupDuration = pickup?.duration;
                    const pickupStartTime =
                      Number(pickupTimeWindows?.startTime?.seconds);
                    const pickupEndTime = Number(pickupTimeWindows?.endTime?.seconds);

                    const delivery = deliveries?.[0];
                    const deliveryTimeWindows = delivery?.timeWindows?.[0];
                    const deliveryDuration = delivery?.duration;
                    const deliveryStartTime =
                      Number(deliveryTimeWindows?.startTime?.seconds);
                    const deliveryEndTime =
                      Number(deliveryTimeWindows?.endTime?.seconds);

                    // const pickupDurationSeconds = console.log(
                    //   "shipment",
                    //   shipment
                    // );
                    // console.log("id", id);
                    // console.log("displayName", displayName);
                    // console.log("pickups", pickups);
                    // console.log("deliveries", deliveries);
                    // console.log("timeWindows", timeWindows);
                    // console.log("duration", duration);

                    return (
                      <tr key={id} className="hover:bg-gray-200">
                        <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                          <div className="text-sm leading-5 text-gray-900">
                            {index + 1}
                          </div>
                        </td>
                        <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                          <div className="flex items-center">
                            {/* <div className="flex-shrink-0 w-10 h-10">
                            <img
                              className="w-10 h-10 rounded-full"
                              src={user.picture}
                              alt=""
                            />
                          </div> */}
                            <div className="ml-4">
                              <div className="text-sm font-medium leading-5 text-gray-900">
                                {/* {typeof shipment?.displayName === undefined
                                  ? "___"
                                  : shipment?.displayName} */}
                                {Label}
                              </div>
                              {/* <div className="text-sm leading-5 text-gray-500">
                              {user.email}
                            </div> */}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                          <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                            {/* {typeof shipment?.pickups===undefined? null:"Pickup"} */}
                            {/* {pickups && "Pickup"} */}
                            {
                              // pickup?"Pickup":delivery?"Delivery":null
                              pickup
                                ? delivery
                                  ? "Pickup & Delivery"
                                  : "Pickup"
                                : delivery
                                ? "Delivery"
                                : null
                            }
                          </span>{" "}
                          <br /> <br />
                          <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                            {/* {typeof shipment?.deliveries===undefined? null:"Delivery"} */}
                            {/* {deliveries?.length > 0 ? "Delivery" : null} */}
                            {/* {deliveries && "delivery"} */}
                          </span>
                        </td>
                        <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                          <div className="text-sm leading-5 text-gray-900">
                            {/* {typeof shipment.pickups[0]?.timeWindows?.startTime===undefined?null:convertEpochToHuman(shipment.pickups[0]?.timeWindows?.startTime)} */}
                            {/* {typeof shipment.pickups[0]?.timeWindows
                              ?.startTime === undefined
                              ? null
                              : convertEpochToHuman(
                                  shipment.pickups[0]?.timeWindows?.startTime
                                )} */}
                            {pickupStartTime &&
                              convertEpochToHuman(pickupStartTime)}
                            {pickupEndTime &&
                              convertEpochToHuman(pickupEndTime)}
                            {deliveryStartTime &&
                              convertEpochToHuman(deliveryStartTime)}
                            {deliveryEndTime &&
                              convertEpochToHuman(deliveryEndTime)}
                          </div>
                          <div className="text-sm leading-5 text-gray-500">
                            {/* {typeof shipment.pickups[0]?.timeWindows
                              ?.endTime === undefined
                              ? null
                              : convertEpochToHuman(
                                  shipment.pickups[0]?.timeWindows?.endTime
                                )} */}
                            {/* {timeWindows && convertEpochToHuman(timeWindows)} */}
                          </div>
                          <div className="text-sm leading-5 text-gray-900">
                            {/* {typeof shipment.deliveries[0]?.timeWindows
                              ?.startTime === undefined
                              ? null
                              : convertEpochToHuman(
                                  shipment.deliveries[0]?.timeWindows?.startTime
                                )} */}
                            {/* {timeWindows && convertEpochToHuman(timeWindows)} */}
                          </div>
                          <div className="text-sm leading-5 text-gray-500">
                            {/* {typeof shipment.deliveries[0]?.timeWindows
                              ?.endTime === undefined
                              ? null
                              : convertEpochToHuman(
                                  shipment.deliveries[0]?.timeWindows?.endTime
                                )} */}
                            {/* {timeWindows && convertEpochToHuman(timeWindows)} */}
                          </div>
                        </td>

                        <td className="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap">
                          {/* {typeof shipment?.pickups[0]?.duration?.seconds ===
                          undefined
                            ? null
                            : shipment?.pickups[0]?.duration?.seconds}{" "}
                          sec */}
                          {
                            // pickupDurationSeconds
                            pickup
                              ? Math.floor(
                                  Number(pickupDuration.seconds) / 60
                                ) + " min"
                              : delivery
                              ? Math.floor(
                                  Number(deliveryDuration.seconds) / 60
                                ) + " min"
                              : null
                          }
                        </td>
                        <td className="px-6  py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap">
                          <button onClick={() => openEdit(id)}>
                            <img src={edit} alt="" className="w-9" />
                          </button>
                          <button
                            onClick={() => {
                              dispatch(deleteShipmentByID(id));
                              console.log("delete clicked");
                            }}
                          >
                            <img src={del} alt="" className="w-8 pb-1 pl-2" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {openEditBox && (
       
        <ShipmentAddFormCall id={editID} closeBox={setOpenEditBox} />
      )}
    </div>
  );
};

export default ShipmentTable;
