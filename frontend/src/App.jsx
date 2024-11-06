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
import Shipments from "./components/Shipments";
import Vehicles from "./components/Vehicles";
import Shipment from "./components/Shipment";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="shipments" element={<Shipment />} />
      <Route path="vehicles" element={<Vehicles />} />
      <Route path="routeOptimization" element={<RouteOptimizer />} />
      <Route path="login" element={<LoginSignUp />} />
      <Route path="profile" element={<AcountPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
