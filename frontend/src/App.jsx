import "./App.css";
import MapComponent from "./components/Maps/map-component";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./pages/HomePage";
import FleetManagement from "./pages/FleetManagement";
import RouteOptimizer from "./pages/RouteOptimizer";
import LoginSignUp from "./pages/LoginSignUp";
import AcountPage from "./pages/AcountPage";
import Dashboard from "./components/Dashboard";
import Shipments from "./components/bin/Shipments";
// import Vehicles from "./components/bin/Vehicles";
import Shipment from "./components/Shipment";
import ManageFleet from "./components/ManageFleet";
import ProfileList from "./components/VehiclesNewPage";
import VehiclesNewPage from "./components/VehiclesNewPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="shipments" element={<Shipment />} />
      {/* <Route path="vehicles" element={<Vehicles />} /> */}
      <Route path="vehicles" element={<VehiclesNewPage />} />
      <Route path="manage-fleet" element={<ManageFleet/>} />
      {/* <Route path="manage-fleet" element={<VehiclesNewPage/>} /> */}
      <Route path="login" element={<LoginSignUp />} />
      <Route path="profile" element={<AcountPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
