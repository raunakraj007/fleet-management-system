import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./pages/HomePage";
import RouteOptimizer from "./pages/RouteOptimizer";
import LoginSignUp from "./pages/LoginSignUp";
import AcountPage from "./pages/AcountPage";
import Dashboard from "./components/Dashboard";
import ManageFleet from "./pages/ManageFleet";
import VehiclesPage from "./pages/VehiclesPage";
import ShipmentPages from "./pages/ShipmentPage";

import { KeepAlive } from "react-activation";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="shipments" element={<ShipmentPages />} />
      <Route path="vehicles" element={<VehiclesPage />} />
      <Route path="manage-fleet" element={<ManageFleet />} />
      <Route
        path="route-optimization"
        element={
          <KeepAlive>
            <RouteOptimizer />
          </KeepAlive>
        }
      />
      <Route path="login" element={<LoginSignUp />} />
      <Route path="profile" element={<AcountPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
