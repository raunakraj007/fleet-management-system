import React from "react";
import { Users } from "lucide-react";
import Shipments from "./bin/Shipments";
import JsonFileUploader from "./bin/Input";
import JsonFileReader from "./JsonFileReader";
import addIcon from "../assets/add.svg";
import del from "../assets/bin.svg";
import edit from "../assets/edit.svg";
import FormModal from "./bin/ShipmentForm";
import Modal from "./Modal";
import ShipmentModalForm from "./ShipmentModalForm";

// Mock data for demo purposes
const defaultUsers = [
  {
    id: "1",
    name: "raj",

    title: "Software Engineer",
    title2: "Web Development",
    status: "Active",
    role: "Developer",
    picture: "/api/placeholder/40/40",
  },
  {
    id: "USR002",
    name: "Sarah Wilson",
    email: "sarah@example.com",
    title: "Product Manager",
    title2: "Product Team",
    status: "Active",
    role: "Manager",
    picture: "/api/placeholder/40/40",
  },
  // Adding more mock data to demonstrate scrolling
  ...Array(10)
    .fill(null)
    .map((_, i) => ({
      id: `USR${(i + 3).toString().padStart(3, "0")}`,
      name: `User ${i + 3}`,
      email: `user${i + 3}@example.com`,
      title: "Team Member",
      title2: "Various Teams",
      status: "Active",
      role: "Member",
      picture: "/api/placeholder/40/40",
    })),
];

const UserTable = ({ users }) => (
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
                {users.map((user, index) => (
                  <tr key={user.id} className="hover:bg-gray-200">
                    <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                      <div className="text-sm leading-5 text-gray-900">
                        {user.id}
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
                            {user.name}
                          </div>
                          {/* <div className="text-sm leading-5 text-gray-500">
                            {user.email}
                          </div> */}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                      <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                        {user.status}
                      </span>{" "}
                      <br /> <br />
                      <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                      <div className="text-sm leading-5 text-gray-900">
                        {user.title}
                      </div>
                      <div className="text-sm leading-5 text-gray-500">
                        {user.title2}
                      </div>
                      <div className="text-sm leading-5 text-gray-900">
                        {user.title}
                      </div>
                      <div className="text-sm leading-5 text-gray-500">
                        {user.title2}
                      </div>
                    </td>

                    <td className="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap">
                      {user.role}
                    </td>
                    <td className="px-6  py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap">
                      <button>
                        <img src={edit} alt="" className="w-9" />
                      </button>
                      <button>
                        <img src={del} alt="" className="w-8 pb-1 pl-2" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Shipment = ({ users = defaultUsers }) => {
  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
      <div className="container mx-auto px-6 py-8">
        <div>
          <h3 className="text-3xl font-medium text-gray-700">Shipments</h3>

          {/* <div className="mt-4">
            <div className="flex flex-wrap -mx-6">
              {metrics.map((metric, index) => (
                <MetricCard key={index} {...metric} />
              ))}
            </div>
          </div> */}
          {/* <JsonFileUploader/> */}
          <div className="flex align-baseline justify-around ">
            <img
              src={addIcon}
              alt=""
              className="w-14 hover:scale-110 transition-transform duration-200"
            />
            {/* <FormModal /> */}
            <Modal />

            <JsonFileReader />
            <ShipmentModalForm />
            <img
              src={del}
              alt=""
              className="w-14 hover:scale-110 transition-transform duration-200"
            />
          </div>

          <UserTable users={users} />
        </div>
      </div>
    </main>
  );
};

export default Shipment;
