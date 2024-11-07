// // import React, { useState } from 'react';

// // const Modal = () => {
// //   const [open, setOpen] = useState(false);

// //   const closeModal = () => {
// //     setOpen(false);
// //   };

// //   const openModal = () => {
// //     setOpen(true);
// //   };

// //   return (
// //     <div>
// //       {/* <h3 className="text-3xl font-medium text-gray-700">Modal</h3> */}
// //       <button
// //         className="px-6 py-3 mt-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
// //         onClick={openModal}
// //       >
// //         Open Modal
// //       </button>

// //       <div
// //         className={`modal ${!open ? 'opacity-0 pointer-events-none' : ''} z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`}
// //       >
// //         <div
// //           className="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"
// //           onClick={closeModal}
// //         />
// //         <div className="z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-md">
// //           <div className="absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer modal-close">
// //             <svg
// //               className="text-white fill-current"
// //               xmlns="http://www.w3.org/2000/svg"
// //               width="18"
// //               height="18"
// //               viewBox="0 0 18 18"
// //             >
// //               <path
// //                 d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
// //               />
// //             </svg>
// //             <span className="text-sm">(Esc)</span>
// //           </div>

// //           <div className="px-6 py-4 text-left modal-content">
// //             <div className="flex items-center justify-between pb-3">
// //               <p className="text-2xl font-bold">Modal Title</p>
// //               <div className="z-50 cursor-pointer modal-close" onClick={closeModal}>
// //                 <svg
// //                   className="text-black fill-current"
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   width="18"
// //                   height="18"
// //                   viewBox="0 0 18 18"
// //                 >
// //                   <path
// //                     d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
// //                   />
// //                 </svg>
// //               </div>
// //             </div>

// //             <p>Modal content.</p>

// //             <div className="flex justify-end pt-2">
// //               <button
// //                 className="p-3 px-6 py-3 mr-2 text-indigo-500 bg-transparent rounded-lg hover:bg-gray-100 hover:text-indigo-400 focus:outline-none"
// //                 onClick={closeModal}
// //               >
// //                 Close
// //               </button>
// //               <button
// //                 className="px-6 py-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
// //                 onClick={closeModal}
// //               >
// //                 Action
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Modal;



// import React, { useState, useEffect } from 'react';
// import ModalForm from './ShipmentFormModal';

// const Modal = () => {
//   const [open, setOpen] = useState(false);

//   const closeModal = () => {
//     setOpen(false);
//   };

//   const openModal = () => {
//     setOpen(true);
//   };

//   // Close modal when pressing the Escape key
//   useEffect(() => {
//     const handleEscapeKey = (e) => {
//       if (e.key === 'Escape') {
//         closeModal();
//       }
//     };

//     window.addEventListener('keydown', handleEscapeKey);

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener('keydown', handleEscapeKey);
//     };
//   }, []);

//   return (
//     <div>
//       <button
//         className="px-6 py-3 mt-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
//         onClick={openModal}
//       >
//         Open Modal
//       </button>

//       {/* Modal Background with animation */}
//       <div
//         className={`modal fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
//           open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
//         }`}
//       >
//         {/* Overlay */}
//         <div
//           className="absolute inset-0 bg-gray-900 opacity-50"
//           onClick={closeModal}
//         />
        
//         {/* Modal Content */}
//         <div className="z-50 w-auto mx-auto overflow-y-auto bg-white rounded shadow-lg md:max-w-md relative">
//           {/* Close Button */}
//           <div
//             className="absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer"
//             onClick={closeModal}
//           >
//             <svg
//               className="text-white fill-current"
//               xmlns="http://www.w3.org/2000/svg"
//               width="18"
//               height="18"
//               viewBox="0 0 18 18"
//             >
//               <path
//                 d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
//               />
//             </svg>
//             <span className="text-sm">(Esc)</span>
//           </div>
//           {/* <ModalForm /> */}

//           <div className="px-6 py-4 text-left">
//             <div className="flex items-center justify-between pb-3">
//               <p className="text-2xl font-bold">Modal Title</p>
//               {/* Close Button in Modal Header */}
//               <div
//                 className="z-50 cursor-pointer"
//                 onClick={closeModal}
//               >
//                 <svg
//                   className="text-black fill-current"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="18"
//                   height="18"
//                   viewBox="0 0 18 18"
//                 >
//                   <path
//                     d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
//                   />
//                 </svg>
//               </div>
//             </div>

//             <p>Modal content.</p>

//             <div className="flex justify-end pt-2">
//               <button
//                 className="p-3 px-6 py-3 mr-2 text-indigo-500 bg-transparent rounded-lg hover:bg-gray-100 hover:text-indigo-400 focus:outline-none"
//                 onClick={closeModal}
//               >
//                 Close
//               </button>
//               <button
//                 className="px-6 py-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
//                 onClick={closeModal}
//               >
//                 Action
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;



// import React, { useState, useEffect } from 'react';

// const ModalForm = () => {
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     displayName: '',
//     pickups: [
//       {
//         arrivalWaypoint: {
//           location: {
//             latLng: {
//               latitude: '',
//               longitude: '',
//             },
//           },
//         },
//         timeWindows: [
//           {
//             startTime: {
//               seconds: '',
//             },
//             endTime: {
//               seconds: '',
//             },
//           },
//         ],
//         duration: {
//           seconds: '',
//         },
//         cost: '',
//         loadDemands: {
//           weight: {
//             amount: '',
//           },
//         },
//       },
//     ],
//     deliveries: [
//       {
//         arrivalWaypoint: {
//           location: {
//             latLng: {
//               latitude: '',
//               longitude: '',
//             },
//           },
//         },
//         timeWindows: [
//           {
//             startTime: {
//               seconds: '',
//             },
//             endTime: {
//               seconds: '',
//             },
//           },
//         ],
//         duration: {
//           seconds: '',
//         },
//         cost: '',
//         loadDemands: {
//           weight: {
//             amount: '',
//           },
//         },
//       },
//     ],
//     loadDemands: {
//       weight: {
//         amount: '',
//       },
//     },
//     allowedVehicleIndices: [0, 1],
//     pickupToDeliveryTimeLimit: '',
//     ignore: false,
//   });

//   const closeModal = () => {
//     setOpen(false);
//   };

//   const openModal = () => {
//     setOpen(true);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => {
//       const keys = name.split('.');
//       const lastKey = keys.pop();
//       const nestedObj = keys.reduce((acc, key) => acc[key], prevData);

//       if (Array.isArray(nestedObj)) {
//         const index = parseInt(keys[keys.length - 1]);
//         nestedObj[index][lastKey] = value;
//       } else {
//         nestedObj[lastKey] = value;
//       }

//       return { ...prevData };
//     });
//   };

//   const handleCheckboxChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       ignore: e.target.checked,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div>
//       <button
//         className="px-6 py-3 mt-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
//         onClick={openModal}
//       >
//         Open Modal
//       </button>

//       <div
//   className={`modal fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
//     open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
//   }`}
// >
//   <div
//     className="absolute inset-0 bg-gray-900 opacity-50"
//     onClick={closeModal}
//   />
//   <div className="z-50 w-3/4 mx-auto overflow-y-auto bg-white rounded shadow-lg md:max-w-3xl relative">
//     <div
//       className="absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer"
//       onClick={closeModal}
//     >
//       <svg
//         className="text-white fill-current"
//         xmlns="http://www.w3.org/2000/svg"
//         width="18"
//         height="18"
//         viewBox="0 0 18 18"
//       >
//         <path
//           d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
//         />
//       </svg>
//       <span className="text-sm">(Esc)</span>
//     </div>

//     <div className="px-6 py-4 text-left">
//       <div className="flex items-center justify-between pb-3">
//         <p className="text-2xl font-bold">Modal Form</p>
//       </div>

//             <form onSubmit={handleSubmit}>
//               <div>
//                 <label>Display Name</label>
//                 <input
//                   type="text"
//                   name="displayName"
//                   value={formData.displayName}
//                   onChange={handleInputChange}
//                   className="input"
//                 />
//               </div>

//               <div>
//                 <h3>Pickups</h3>
//                 {formData.pickups.map((pickup, index) => (
//                   <div key={index}>
//                     <div>
//                       <h4>Pickup {index + 1}</h4>
//                       <label>Latitude</label>
//                       <input
//                         type="number"
//                         name={`pickups.${index}.arrivalWaypoint.location.latLng.latitude`}
//                         value={pickup.arrivalWaypoint.location.latLng.latitude}
//                         onChange={handleInputChange}
//                         className="input"
//                       />

//                       <label>Longitude</label>
//                       <input
//                         type="number"
//                         name={`pickups.${index}.arrivalWaypoint.location.latLng.longitude`}
//                         value={pickup.arrivalWaypoint.location.latLng.longitude}
//                         onChange={handleInputChange}
//                         className="input"
//                       />
//                     </div>

//                     <div>
//                       <h4>Time Windows</h4>
//                       {pickup.timeWindows.map((window, timeIndex) => (
//                         <div key={timeIndex}>
//                           <label>Start Time (seconds)</label>
//                           <input
//                             type="number"
//                             name={`pickups.${index}.timeWindows.${timeIndex}.startTime.seconds`}
//                             value={window.startTime.seconds}
//                             onChange={handleInputChange}
//                             className="input"
//                           />

//                           <label>End Time (seconds)</label>
//                           <input
//                             type="number"
//                             name={`pickups.${index}.timeWindows.${timeIndex}.endTime.seconds`}
//                             value={window.endTime.seconds}
//                             onChange={handleInputChange}
//                             className="input"
//                           />
//                         </div>
//                       ))}
//                     </div>

//                     <div>
//                       <label>Duration (seconds)</label>
//                       <input
//                         type="number"
//                         name={`pickups.${index}.duration.seconds`}
//                         value={pickup.duration.seconds}
//                         onChange={handleInputChange}
//                         className="input"
//                       />

//                       <label>Cost</label>
//                       <input
//                         type="number"
//                         name={`pickups.${index}.cost`}
//                         value={pickup.cost}
//                         onChange={handleInputChange}
//                         className="input"
//                       />
//                     </div>

//                     <div>
//                       <label>Load Weight</label>
//                       <input
//                         type="number"
//                         name={`pickups.${index}.loadDemands.weight.amount`}
//                         value={pickup.loadDemands.weight.amount}
//                         onChange={handleInputChange}
//                         className="input"
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div>
//                 <h3>Deliveries</h3>
//                 {formData.deliveries.map((delivery, index) => (
//                   <div key={index}>
//                     <div>
//                       <h4>Delivery {index + 1}</h4>
//                       <label>Latitude</label>
//                       <input
//                         type="number"
//                         name={`deliveries.${index}.arrivalWaypoint.location.latLng.latitude`}
//                         value={delivery.arrivalWaypoint.location.latLng.latitude}
//                         onChange={handleInputChange}
//                         className="input"
//                       />

//                       <label>Longitude</label>
//                       <input
//                         type="number"
//                         name={`deliveries.${index}.arrivalWaypoint.location.latLng.longitude`}
//                         value={delivery.arrivalWaypoint.location.latLng.longitude}
//                         onChange={handleInputChange}
//                         className="input"
//                       />
//                     </div>

//                     <div>
//                       <h4>Time Windows</h4>
//                       {delivery.timeWindows.map((window, timeIndex) => (
//                         <div key={timeIndex}>
//                           <label>Start Time (seconds)</label>
//                           <input
//                             type="number"
//                             name={`deliveries.${index}.timeWindows.${timeIndex}.startTime.seconds`}
//                             value={window.startTime.seconds}
//                             onChange={handleInputChange}
//                             className="input"
//                           />

//                           <label>End Time (seconds)</label>
//                           <input
//                             type="number"
//                             name={`deliveries.${index}.timeWindows.${timeIndex}.endTime.seconds`}
//                             value={window.endTime.seconds}
//                             onChange={handleInputChange}
//                             className="input"
//                           />
//                         </div>
//                       ))}
//                     </div>

//                     <div>
//                       <label>Duration (seconds)</label>
//                       <input
//                         type="number"
//                         name={`deliveries.${index}.duration.seconds`}
//                         value={delivery.duration.seconds}
//                         onChange={handleInputChange}
//                         className="input"
//                       />

//                       <label>Cost</label>
//                       <input
//                         type="number"
//                         name={`deliveries.${index}.cost`}
//                         value={delivery.cost}
//                         onChange={handleInputChange}
//                         className="input"
//                       />
//                     </div>

//                     <div>
//                       <label>Load Weight</label>
//                       <input
//                         type="number"
//                         name={`deliveries.${index}.loadDemands.weight.amount`}
//                         value={delivery.loadDemands.weight.amount}
//                         onChange={handleInputChange}
//                         className="input"
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div>
//                 <label>Load Weight (Overall)</label>
//                 <input
//                   type="number"
//                   name="loadDemands.weight.amount"
//                   value={formData.loadDemands.weight.amount}
//                   onChange={handleInputChange}
//                   className="input"
//                 />
//               </div>

//               <div>
//                 <label>Pickup to Delivery Time Limit (seconds)</label>
//                 <input
//                   type="number"
//                   name="pickupToDeliveryTimeLimit"
//                   value={formData.pickupToDeliveryTimeLimit}
//                   onChange={handleInputChange}
//                   className="input"
//                 />
//               </div>

//               <div>
//                 <label>Ignore</label>
//                 <input
//                   type="checkbox"
//                   name="ignore"
//                   checked={formData.ignore}
//                   onChange={handleCheckboxChange}
//                 />
//               </div>

//               <div className="flex justify-end pt-4">
//                 <button
//                   className="p-3 px-6 py-2 mr-2 text-indigo-500 bg-transparent rounded-lg hover:bg-gray-100 hover:text-indigo-400"
//                   onClick={closeModal}
//                 >
//                   Close
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-6 py-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModalForm;


// import React, { useState } from 'react';

// const ModalForm = () => {
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     displayName: '',
//     pickups: [
//       {
//         arrivalWaypoint: {
//           location: {
//             latLng: {
//               latitude: '',
//               longitude: '',
//             },
//           },
//         },
//         timeWindows: [
//           {
//             startTime: {
//               seconds: '',
//             },
//             endTime: {
//               seconds: '',
//             },
//           },
//         ],
//         duration: {
//           seconds: '',
//         },
//         cost: '',
//         loadDemands: {
//           weight: {
//             amount: '',
//           },
//         },
//       },
//     ],
//     deliveries: [
//       {
//         arrivalWaypoint: {
//           location: {
//             latLng: {
//               latitude: '',
//               longitude: '',
//             },
//           },
//         },
//         timeWindows: [
//           {
//             startTime: {
//               seconds: '',
//             },
//             endTime: {
//               seconds: '',
//             },
//           },
//         ],
//         duration: {
//           seconds: '',
//         },
//         cost: '',
//         loadDemands: {
//           weight: {
//             amount: '',
//           },
//         },
//       },
//     ],
//     loadDemands: {
//       weight: {
//         amount: '',
//       },
//     },
//     allowedVehicleIndices: [0, 1],
//     pickupToDeliveryTimeLimit: '',
//     ignore: false,
//   });

//   const closeModal = () => {
//     setOpen(false);
//   };

//   const openModal = () => {
//     setOpen(true);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => {
//       const keys = name.split('.');
//       const lastKey = keys.pop();
//       const nestedObj = keys.reduce((acc, key) => acc[key], prevData);

//       if (Array.isArray(nestedObj)) {
//         const index = parseInt(keys[keys.length - 1]);
//         nestedObj[index][lastKey] = value;
//       } else {
//         nestedObj[lastKey] = value;
//       }

//       return { ...prevData };
//     });
//   };

//   const handleCheckboxChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       ignore: e.target.checked,
//     }));
//   };

//   // Convert time (HH:mm) to epoch time (seconds)
//   const convertTimeToEpoch = (timeString) => {
//     const [hours, minutes] = timeString.split(':').map((part) => parseInt(part, 10));
//     const date = new Date();
//     date.setHours(hours, minutes, 0, 0); // Set the time
//     return Math.floor(date.getTime() / 1000); // Return epoch time (seconds)
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Convert timeWindows startTime and endTime to epoch seconds
//     const updatedPickups = formData.pickups.map((pickup) => ({
//       ...pickup,
//       timeWindows: pickup.timeWindows.map((window) => ({
//         ...window,
//         startTime: { seconds: convertTimeToEpoch(window.startTime) },
//         endTime: { seconds: convertTimeToEpoch(window.endTime) },
//       })),
//     }));

//     setFormData((prevData) => ({
//       ...prevData,
//       pickups: updatedPickups,
//     }));

//     console.log(formData); // Log the form data with epoch times
//   };

//   return (
//     <div>
//       <button
//         className="px-6 py-3 mt-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
//         onClick={openModal}
//       >
//         Open Modal
//       </button>

//       <div
//         className={`modal fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
//           open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
//         }`}
//       >
//         <div
//           className="absolute inset-0 bg-gray-900 opacity-50"
//           onClick={closeModal}
//         />
//         <div className="z-50 w-3/4 mx-auto overflow-y-auto bg-white rounded shadow-lg md:max-w-3xl relative">
//           <div
//             className="absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer"
//             onClick={closeModal}
//           >
//             <svg
//               className="text-white fill-current"
//               xmlns="http://www.w3.org/2000/svg"
//               width="18"
//               height="18"
//               viewBox="0 0 18 18"
//             >
//               <path
//                 d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
//               />
//             </svg>
//             <span className="text-sm">(Esc)</span>
//           </div>

//           <div className="px-6 py-4 text-left">
//             <div className="flex items-center justify-between pb-3">
//               <p className="text-2xl font-bold">Modal Form</p>
//             </div>

//             <form onSubmit={handleSubmit}>
//               <div>
//                 <label>Display Name</label>
//                 <input
//                   type="text"
//                   name="displayName"
//                   value={formData.displayName}
//                   onChange={handleInputChange}
//                   className="input"
//                 />
//               </div>

//               <div>
//                 <h3>Pickups</h3>
//                 {formData.pickups.map((pickup, index) => (
//                   <div key={index}>
//                     <div>
//                       <h4>Pickup {index + 1}</h4>
//                       <label>Latitude</label>
//                       <input
//                         type="number"
//                         name={`pickups.${index}.arrivalWaypoint.location.latLng.latitude`}
//                         value={pickup.arrivalWaypoint.location.latLng.latitude}
//                         onChange={handleInputChange}
//                         className="input"
//                       />

//                       <label>Longitude</label>
//                       <input
//                         type="number"
//                         name={`pickups.${index}.arrivalWaypoint.location.latLng.longitude`}
//                         value={pickup.arrivalWaypoint.location.latLng.longitude}
//                         onChange={handleInputChange}
//                         className="input"
//                       />
//                     </div>

//                     <div>
//                       <h4>Time Windows</h4>
//                       {pickup.timeWindows.map((window, timeIndex) => (
//                         <div key={timeIndex}>
//                           <label>Start Time</label>
//                           <input
//                             type="time"
//                             name={`pickups.${index}.timeWindows.${timeIndex}.startTime`}
//                             value={window.startTime}
//                             onChange={handleInputChange}
//                             className="input"
//                           />

//                           <label>End Time</label>
//                           <input
//                             type="time"
//                             name={`pickups.${index}.timeWindows.${timeIndex}.endTime`}
//                             value={window.endTime}
//                             onChange={handleInputChange}
//                             className="input"
//                           />
//                         </div>
//                       ))}
//                     </div>

//                     <div>
//                       <label>Duration (seconds)</label>
//                       <input
//                         type="number"
//                         name={`pickups.${index}.duration.seconds`}
//                         value={pickup.duration.seconds}
//                         onChange={handleInputChange}
//                         className="input"
//                       />

//                       <label>Cost</label>
//                       <input
//                         type="number"
//                         name={`pickups.${index}.cost`}
//                         value={pickup.cost}
//                         onChange={handleInputChange}
//                         className="input"
//                       />
//                     </div>

//                     <div>
//                       <label>Load Weight</label>
//                       <input
//                         type="number"
//                         name={`pickups.${index}.loadDemands.weight.amount`}
//                         value={pickup.loadDemands.weight.amount}
//                         onChange={handleInputChange}
//                         className="input"
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div>
//                 <label>Ignore</label>
//                 <input
//                   type="checkbox"
//                   name="ignore"
//                   checked={formData.ignore}
//                   onChange={handleCheckboxChange}
//                 />
//               </div>

//               <div className="flex justify-end pt-4">
//                 <button
//                   className="p-3 px-6 py-2 mr-2 text-indigo-500 bg-transparent rounded-lg hover:bg-gray-100 hover:text-indigo-400"
//                   onClick={closeModal}
//                 >
//                   Close
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-6 py-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModalForm;



import React, { useState } from 'react';

const ModalForm = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    displayName: '',
    pickups: [
      {
        arrivalWaypoint: {
          location: {
            latLng: {
              latitude: '',
              longitude: '',
            },
          },
        },
        timeWindows: [
          {
            startTime: '',
            endTime: '',
          },
        ],
        duration: {
          seconds: '',
        },
        cost: '',
        loadDemands: {
          weight: {
            amount: '',
          },
        },
      },
    ],
    deliveries: [
      {
        arrivalWaypoint: {
          location: {
            latLng: {
              latitude: '',
              longitude: '',
            },
          },
        },
        timeWindows: [
          {
            startTime: '',
            endTime: '',
          },
        ],
        duration: {
          seconds: '',
        },
        cost: '',
        loadDemands: {
          weight: {
            amount: '',
          },
        },
      },
    ],
    loadDemands: {
      weight: {
        amount: '',
      },
    },
    allowedVehicleIndices: [0, 1],
    pickupToDeliveryTimeLimit: '',
    ignore: false,
  });

  const closeModal = () => {
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const keys = name.split('.');
      const lastKey = keys.pop();
      const nestedObj = keys.reduce((acc, key) => acc[key], prevData);

      if (Array.isArray(nestedObj)) {
        const index = parseInt(keys[keys.length - 1]);
        nestedObj[index][lastKey] = value;
      } else {
        nestedObj[lastKey] = value;
      }

      return { ...prevData };
    });
  };

  const handleCheckboxChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      ignore: e.target.checked,
    }));
  };

  // Convert time (HH:mm) to epoch time (seconds)
  const convertTimeToEpoch = (timeString) => {
    const [hours, minutes] = timeString.split(':').map((part) => parseInt(part, 10));
    const date = new Date();
    date.setHours(hours, minutes, 0, 0); // Set the time
    return Math.floor(date.getTime() / 1000); // Return epoch time (seconds)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert timeWindows startTime and endTime to epoch seconds for pickups and deliveries
    const updatedPickups = formData.pickups.map((pickup) => ({
      ...pickup,
      timeWindows: pickup.timeWindows.map((window) => ({
        ...window,
        startTime: convertTimeToEpoch(window.startTime),
        endTime: convertTimeToEpoch(window.endTime),
      })),
    }));

    const updatedDeliveries = formData.deliveries.map((delivery) => ({
      ...delivery,
      timeWindows: delivery.timeWindows.map((window) => ({
        ...window,
        startTime: convertTimeToEpoch(window.startTime),
        endTime: convertTimeToEpoch(window.endTime),
      })),
    }));

    setFormData((prevData) => ({
      ...prevData,
      pickups: updatedPickups,
      deliveries: updatedDeliveries,
    }));

    console.log(formData); // Log the form data with epoch times
  };

  return (
    <div>
      <button
        className="px-6 py-3 mt-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
        onClick={openModal}
      >
        Open Modal
      </button>

      <div
        className={`modal fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-gray-900 opacity-50"
          onClick={closeModal}
        />
        <div className="z-50 w-3/4 mx-auto overflow-y-auto bg-white rounded shadow-lg md:max-w-3xl relative">
          <div
            className="absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer"
            onClick={closeModal}
          >
            <svg
              className="text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path
                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
              />
            </svg>
            <span className="text-sm">(Esc)</span>
          </div>

          <div className="px-6 py-4 text-left">
            <div className="flex items-center justify-between pb-3">
              <p className="text-2xl font-bold">Modal Form</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div>
                <label>Display Name</label>
                <input
                  type="text"
                  name="displayName"
                  value={formData.displayName}
                  onChange={handleInputChange}
                  className="input"
                />
              </div>

              {/* Pickups Section */}
              <div>
                <h3>Pickups</h3>
                {formData.pickups.map((pickup, index) => (
                  <div key={index}>
                    <div>
                      <h4>Pickup {index + 1}</h4>
                      <label>Latitude</label>
                      <input
                        type="number"
                        name={`pickups.${index}.arrivalWaypoint.location.latLng.latitude`}
                        value={pickup.arrivalWaypoint.location.latLng.latitude}
                        onChange={handleInputChange}
                        className="input"
                      />

                      <label>Longitude</label>
                      <input
                        type="number"
                        name={`pickups.${index}.arrivalWaypoint.location.latLng.longitude`}
                        value={pickup.arrivalWaypoint.location.latLng.longitude}
                        onChange={handleInputChange}
                        className="input"
                      />
                    </div>

                    <div>
                      <h4>Time Windows</h4>
                      {pickup.timeWindows.map((window, timeIndex) => (
                        <div key={timeIndex}>
                          <label>Start Time</label>
                          <input
                            type="time"
                            name={`pickups.${index}.timeWindows.${timeIndex}.startTime`}
                            value={window.startTime}
                            onChange={handleInputChange}
                            className="input"
                          />

                          <label>End Time</label>
                          <input
                            type="time"
                            name={`pickups.${index}.timeWindows.${timeIndex}.endTime`}
                            value={window.endTime}
                            onChange={handleInputChange}
                            className="input"
                          />
                        </div>
                      ))}
                    </div>

                    <div>
                      <label>Duration (seconds)</label>
                      <input
                        type="number"
                        name={`pickups.${index}.duration.seconds`}
                        value={pickup.duration.seconds}
                        onChange={handleInputChange}
                        className="input"
                      />

                      <label>Cost</label>
                      <input
                        type="number"
                        name={`pickups.${index}.cost`}
                        value={pickup.cost}
                        onChange={handleInputChange}
                        className="input"
                      />
                    </div>

                    <div>
                      <label>Load Weight</label>
                      <input
                        type="number"
                        name={`pickups.${index}.loadDemands.weight.amount`}
                        value={pickup.loadDemands.weight.amount}
                        onChange={handleInputChange}
                        className="input"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Deliveries Section */}
              <div>
                <h3>Deliveries</h3>
                {formData.deliveries.map((delivery, index) => (
                  <div key={index}>
                    <div>
                      <h4>Delivery {index + 1}</h4>
                      <label>Latitude</label>
                      <input
                        type="number"
                        name={`deliveries.${index}.arrivalWaypoint.location.latLng.latitude`}
                        value={delivery.arrivalWaypoint.location.latLng.latitude}
                        onChange={handleInputChange}
                        className="input"
                      />

                      <label>Longitude</label>
                      <input
                        type="number"
                        name={`deliveries.${index}.arrivalWaypoint.location.latLng.longitude`}
                        value={delivery.arrivalWaypoint.location.latLng.longitude}
                        onChange={handleInputChange}
                        className="input"
                      />
                    </div>

                    <div>
                      <h4>Time Windows</h4>
                      {delivery.timeWindows.map((window, timeIndex) => (
                        <div key={timeIndex}>
                          <label>Start Time</label>
                          <input
                            type="time"
                            name={`deliveries.${index}.timeWindows.${timeIndex}.startTime`}
                            value={window.startTime}
                            onChange={handleInputChange}
                            className="input"
                          />

                          <label>End Time</label>
                          <input
                            type="time"
                            name={`deliveries.${index}.timeWindows.${timeIndex}.endTime`}
                            value={window.endTime}
                            onChange={handleInputChange}
                            className="input"
                          />
                        </div>
                      ))}
                    </div>

                    <div>
                      <label>Duration (seconds)</label>
                      <input
                        type="number"
                        name={`deliveries.${index}.duration.seconds`}
                        value={delivery.duration.seconds}
                        onChange={handleInputChange}
                        className="input"
                      />

                      <label>Cost</label>
                      <input
                        type="number"
                        name={`deliveries.${index}.cost`}
                        value={delivery.cost}
                        onChange={handleInputChange}
                        className="input"
                      />
                    </div>

                    <div>
                      <label>Load Weight</label>
                      <input
                        type="number"
                        name={`deliveries.${index}.loadDemands.weight.amount`}
                        value={delivery.loadDemands.weight.amount}
                        onChange={handleInputChange}
                        className="input"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Final Controls */}
              <div>
                <label>Ignore</label>
                <input
                  type="checkbox"
                  name="ignore"
                  checked={formData.ignore}
                  onChange={handleCheckboxChange}
                />
              </div>

              <div className="flex justify-end pt-4">
                <button
                  className="p-3 px-6 py-2 mr-2 text-indigo-500 bg-transparent rounded-lg hover:bg-gray-100 hover:text-indigo-400"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
