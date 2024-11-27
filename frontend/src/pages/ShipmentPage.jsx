import React, { useEffect, useState } from "react";
import EmptyShipmentPage from "../components/ShipmentPage/EmptyShipmentPage";
import ShipmentList from "../components/ShipmentPage/ShipmentList";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ShimmerUiShipment from "../components/ShipmentPage/shimmerUiShipment";
import { addShipments } from "../redux/shipmentSlice";

const ShipmentPage = () => {
  localStorage.removeItem("isSignIn");
  const [fetchedData, setFetchedData] = useState(null);
  const dispatch = useDispatch();
  const shipmentArrayLength = useSelector(
    (state) => state.shipmentSlice?.shipments.length
  );

  useEffect(() => {
    const data = axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/shipments/getIncompleteShipments`
      )
      .then((res) => {
        console.log(res.data);
        setFetchedData(res.data);
        dispatch(addShipments(res.data));
      });
  }, []);
  // console.log(shipments);

  console.log(fetchedData);

  if (fetchedData === null && shipmentArrayLength === 0) {
    return <ShimmerUiShipment />;
  }

  return (
    <main className="flex-1 h-full overflow-x-hidden overflow-y-auto bg-gray-200">
      <div className="container mx-auto px-6 py-1">
        {fetchedData?.length === 0 ? <EmptyShipmentPage /> : <ShipmentList />}
        {/* {shipments.length === 0 ? <ShimmerUiShipment/> : <ShipmentList />} */}
      </div>
    </main>
  );
};

export default ShipmentPage;
