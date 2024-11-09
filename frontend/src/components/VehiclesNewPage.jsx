// import React from "react";
// import ProfileList from "./VehiclesList";

// const VehiclesNewPage = () => {
//   return (
//     <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
//       <div className="p-5">
//         <h1 className="h-3 w-4 text-4xl mb-8 ">Vehciles</h1>
//         <ProfileList />
//       </div>
//     </main>
//   );
// };

// export default VehiclesNewPage;

import React from "react";
import VehiclesList from "./VehiclesList";

const VehiclesNewPage = () => {
  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
      <div className="container mx-auto px-6 py-8">
        <div>
          <h3 className="text-3xl font-medium text-gray-700">Vehicles</h3>

          <VehiclesList />
        </div>
      </div>
    </main>
  );
};

export default VehiclesNewPage;
