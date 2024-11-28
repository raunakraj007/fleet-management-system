import React, { useState } from "react";
import ForwardIcon from "../assets/forward-step-svgrepo-com.png";
import BackwardIcon from "../assets/backward-step-svgrepo-com.png";
import icon from "../assets/analytics-svgrepo-com.png";
import { NavLink } from "react-router-dom";
import box from "../assets/open-box-parcel-svgrepo-com.svg";
import second from "../assets/route-svgrepo-com.svg";

const NavItems = [
  { text: "Dashboard", icon: icon, to: "/app/dashboard" },
  { text: "shipments", icon: box, to: "/app/shipments" },
  { text: "Vehicles", icon: icon, to: "/app/vehicles" },
  {text: "ManageFleet", icon: icon, to: "/app/manage-fleet"},
  {text: "FleetPlanning", icon: icon, to: "/app/fleetPlanning"},
  { text: "Route Optimization", icon: icon, to: "/app/route-optimization" },
  { text: "Profile", icon: icon, to: "/app/profile" },
];

const SideBarr = () => {
  const [expanded, setExpanded] = useState(true);
  const to = "/app/shipments";
  return (
    <div className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          {/* <img
            src={second}
            className={`overflow-hidden transition-all ${
              expanded ? "w-10" : "w-0"
            }`}
            alt=""
          /> */}
          {expanded && (
            <strong className="text-gray-700">Fleet Managment</strong>
          )}
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            <img
              src={expanded ? BackwardIcon : ForwardIcon}
              alt=""
              className="h-5"
            />
          </button>
        </div>

        <ul className="flex-1 px-3">
          {NavItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.to}
                className={({ isActive }) => `
                relative flex items-center py-2 px-3 my-1
                font-medium rounded-md cursor-pointer
                transition-colors group
                ${
                  isActive
                    ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                    : "hover:bg-indigo-50 text-gray-600"
                }
            `}
              >
                <img src={box} alt="" className="h-5" />
                <span
                  className={`overflow-hidden transition-all z-50 ${
                    expanded ? "w-52 ml-3" : "w-0"
                  }`}
                >
                  {expanded?item.text:""}
                </span>
              </NavLink>
            </li>
          ))}

        </ul>

        {/* <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div> */}
      </nav>
    </div>
  );
};

export default SideBarr;
