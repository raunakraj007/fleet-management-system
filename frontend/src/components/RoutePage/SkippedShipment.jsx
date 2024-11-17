import React, { useState } from "react";
import { useSelector } from "react-redux";
import ShipmentAddFormCall from "../ShipmentPage/ShipmentAddFormCall";

const SkippedShipment = () => {
  const skippedShipments = useSelector(
    (state) => state.optimizeRouteRes?.optimizeRouteRes?.skippedShipments
  );
  const [openEditBox, setOpenEditBox] = useState(false);

  const shipment = useSelector((state) => state.shipmentSlice?.shipments);

  if (skippedShipments.length === 0) return <div>All Shipment Completed</div>;

  return (
    <>
      <div className="mx-20 mb-10 mt-8">
        <div className="flex flex-col mt-8">
          <div className=" py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 ">
            <div className="inline-block w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
              <div className="max-h-[600px] overflow-y-auto relative scrollbar-hide">
                <table className="min-w-full">
                  <thead className="sticky top-0 z-10">
                    <tr>
                      <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                        S.no
                      </th>
                      <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                        Label
                      </th>
                      <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                        Reason
                      </th>

                      {/* <th className="px-6 py-3 border-b border-gray-200 bg-gray-50" /> */}
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {skippedShipments.map((shipment, index) => {
                      return (
                        <tr key={index} className="hover:bg-gray-200">
                          <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                            <div className="text-sm leading-5 text-gray-900">
                              {index + 1}
                            </div>
                          </td>
                          <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="text-sm font-medium leading-5 text-gray-900">
                                  {shipment?.label}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="text-sm font-medium leading-5 text-gray-900">
                                  {shipment?.reasons?.[0]?.code ??
                                    "Not Specified"}
                                </div>
                              </div>
                            </div>
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
    </>
  );
};

export default SkippedShipment;
