// import React from "react";

// const Vehicles = () => {
//   return (
//     <>
//       <div className="relative flex flex-col rounded-lg bg-white shadow-sm border border-slate-200">
//         {/* Fixed top bar */}
//         <div
//           role="button"
//           className="sticky top-0 z-10 bg-white text-slate-800 flex w-full items-center rounded-md p-2 pl-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
//         >
//           <div>S no.</div>
//           <div className="ml-auto grid place-items-center justify-self-end">
//             Label
//           </div>
//           <div className="ml-auto grid place-items-center justify-self-end">
//             Fixed Cost
//           </div>
//           <div className="ml-auto grid place-items-center justify-self-end">
//             Cost Per hour
//           </div>
//           <div className="ml-auto  grid place-items-center justify-self-end">
//             Max load
//           </div>
//           <div className="ml-5 flex">
//             <button
//               className="rounded-md border border-transparent mx-2 p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//               type="button"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 className="w-4 h-4"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </button>
//             <button
//               className="rounded-md border border-transparent mx-2 p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//               type="button"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 className="w-4 h-4"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Scrollable Nav Bar */}
//         <nav className="flex min-w-[240px] flex-col gap-1 p-1.5 max-h-full overflow-y-auto">
//           {/* List Items */}
//           <div
//             role="button"
//             className="text-slate-800 flex w-full items-center rounded-md p-2 pl-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
//           >
//             <div>1</div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               Raj kum
//             </div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               Pickup <br /> <br /> <br />
//               Dilvery
//             </div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               30/12/24 <br /> <small>14:20</small> <br />
//               30/12/24 <br />
//               <small>14:20</small>
//             </div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               1:60:00 <br /> <br /> <br />
//               1:60:00
//             </div>
//             <div className="ml-5 flex">
//               <button
//                 className="rounded-md border border-transparent mx-2 p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                 type="button"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="w-4 h-4"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//               <button
//                 className="rounded-md border border-transparent mx-2 p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                 type="button"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="w-4 h-4"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* Additional List Items */}
//           {/* Repeat for other items */}
//           <div
//             role="button"
//             className="text-slate-800 flex w-full items-center rounded-md p-2 pl-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
//           >
//             <div>2</div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               Raj kum
//             </div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               Delivery
//             </div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               {/* 30/12/24 <br /> <small>14:20</small>  - 30/12/24 <br /> <small>14:20</small> */}
//               <span title="12/2/23-12/2/23">14:20 - 16:40</span>
//             </div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               1:60:00
//             </div>
//             <div className="ml-5 flex">
//               <button
//                 className="rounded-md border border-transparent mx-2 p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                 type="button"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="w-4 h-4"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//               <button
//                 className="rounded-md border border-transparent mx-2 p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                 type="button"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="w-4 h-4"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//           <div
//             role="button"
//             className="text-slate-800 flex w-full items-center rounded-md p-2 pl-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
//           >
//             <div>1</div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               Raj kum
//             </div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               Pickup <br /> <br /> <br />
//               Dilvery
//             </div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               30/12/24 <br /> <small>14:20</small> <br />
//               30/12/24 <br />
//               <small>14:20</small>
//             </div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               1:60:00 <br /> <br /> <br />
//               1:60:00
//             </div>
//             <div className="ml-5 flex">
//               <button
//                 className="rounded-md border border-transparent mx-2 p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                 type="button"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="w-4 h-4"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//               <button
//                 className="rounded-md border border-transparent mx-2 p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                 type="button"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="w-4 h-4"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* Additional List Items */}
//           {/* Repeat for other items */}
//           <div
//             role="button"
//             className="text-slate-800 flex w-full items-center rounded-md p-2 pl-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
//           >
//             <div>2</div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               Raj kum
//             </div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               Delivery
//             </div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               {/* 30/12/24 <br /> <small>14:20</small>  - 30/12/24 <br /> <small>14:20</small> */}
//               <span title="12/2/23-12/2/23">14:20 - 16:40</span>
//             </div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               1:60:00
//             </div>
//             <div className="ml-5 flex">
//               <button
//                 className="rounded-md border border-transparent mx-2 p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                 type="button"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="w-4 h-4"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//               <button
//                 className="rounded-md border border-transparent mx-2 p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                 type="button"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="w-4 h-4"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//           <div
//             role="button"
//             className="text-slate-800 flex w-full items-center rounded-md p-2 pl-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
//           >
//             <div>1</div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               Raj kum
//             </div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               Pickup <br /> <br /> <br />
//               Dilvery
//             </div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               30/12/24 <br /> <small>14:20</small> <br />
//               30/12/24 <br />
//               <small>14:20</small>
//             </div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               1:60:00 <br /> <br /> <br />
//               1:60:00
//             </div>
//             <div className="ml-5 flex">
//               <button
//                 className="rounded-md border border-transparent mx-2 p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                 type="button"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="w-4 h-4"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//               <button
//                 className="rounded-md border border-transparent mx-2 p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                 type="button"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="w-4 h-4"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* Additional List Items */}
//           {/* Repeat for other items */}
//           <div
//             role="button"
//             className="text-slate-800 flex w-full items-center rounded-md p-2 pl-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
//           >
//             <div>2</div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               Raj kum
//             </div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               Delivery
//             </div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               {/* 30/12/24 <br /> <small>14:20</small>  - 30/12/24 <br /> <small>14:20</small> */}
//               <span title="12/2/23-12/2/23">14:20 - 16:40</span>
//             </div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               1:60:00
//             </div>
//             <div className="ml-5 flex">
//               <button
//                 className="rounded-md border border-transparent mx-2 p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                 type="button"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="w-4 h-4"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//               <button
//                 className="rounded-md border border-transparent mx-2 p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                 type="button"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="w-4 h-4"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//           <div
//             role="button"
//             className="text-slate-800 flex w-full items-center rounded-md p-2 pl-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
//           >
//             <div>1</div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               Raj kum
//             </div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               Pickup <br /> <br /> <br />
//               Dilvery
//             </div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               30/12/24 <br /> <small>14:20</small> <br />
//               30/12/24 <br />
//               <small>14:20</small>
//             </div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               1:60:00 <br /> <br /> <br />
//               1:60:00
//             </div>
//             <div className="ml-5 flex">
//               <button
//                 className="rounded-md border border-transparent mx-2 p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                 type="button"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="w-4 h-4"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//               <button
//                 className="rounded-md border border-transparent mx-2 p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                 type="button"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="w-4 h-4"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* Additional List Items */}
//           {/* Repeat for other items */}
//           <div
//             role="button"
//             className="text-slate-800 flex w-full items-center rounded-md p-2 pl-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
//           >
//             <div>2</div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               Raj kum
//             </div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               Delivery
//             </div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               {/* 30/12/24 <br /> <small>14:20</small>  - 30/12/24 <br /> <small>14:20</small> */}
//               <span title="12/2/23-12/2/23">14:20 - 16:40</span>
//             </div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               1:60:00
//             </div>
//             <div className="ml-5 flex">
//               <button
//                 className="rounded-md border border-transparent mx-2 p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                 type="button"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="w-4 h-4"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//               <button
//                 className="rounded-md border border-transparent mx-2 p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                 type="button"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="w-4 h-4"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//           <div
//             role="button"
//             className="text-slate-800 flex w-full items-center rounded-md p-2 pl-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
//           >
//             <div>1</div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               Raj kum
//             </div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               Pickup <br /> <br /> <br />
//               Dilvery
//             </div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               30/12/24 <br /> <small>14:20</small> <br />
//               30/12/24 <br />
//               <small>14:20</small>
//             </div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               1:60:00 <br /> <br /> <br />
//               1:60:00
//             </div>
//             <div className="ml-5 flex">
//               <button
//                 className="rounded-md border border-transparent mx-2 p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                 type="button"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="w-4 h-4"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//               <button
//                 className="rounded-md border border-transparent mx-2 p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                 type="button"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="w-4 h-4"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* Additional List Items */}
//           {/* Repeat for other items */}
//           <div
//             role="button"
//             className="text-slate-800 flex w-full items-center rounded-md p-2 pl-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
//           >
//             <div>2</div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               Raj kum
//             </div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               Delivery
//             </div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               {/* 30/12/24 <br /> <small>14:20</small>  - 30/12/24 <br /> <small>14:20</small> */}
//               <span title="12/2/23-12/2/23">14:20 - 16:40</span>
//             </div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               1:60:00
//             </div>
//             <div className="ml-5 flex">
//               <button
//                 className="rounded-md border border-transparent mx-2 p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                 type="button"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="w-4 h-4"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//               <button
//                 className="rounded-md border border-transparent mx-2 p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                 type="button"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="w-4 h-4"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//           <div
//             role="button"
//             className="text-slate-800 flex w-full items-center rounded-md p-2 pl-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
//           >
//             <div>1</div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               Raj kum
//             </div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               Pickup <br /> <br /> <br />
//               Dilvery
//             </div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               30/12/24 <br /> <small>14:20</small> <br />
//               30/12/24 <br />
//               <small>14:20</small>
//             </div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               1:60:00 <br /> <br /> <br />
//               1:60:00
//             </div>
//             <div className="ml-5 flex">
//               <button
//                 className="rounded-md border border-transparent mx-2 p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                 type="button"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="w-4 h-4"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//               <button
//                 className="rounded-md border border-transparent mx-2 p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                 type="button"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="w-4 h-4"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* Additional List Items */}
//           {/* Repeat for other items */}
//           <div
//             role="button"
//             className="text-slate-800 flex w-full items-center rounded-md p-2 pl-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
//           >
//             <div>2</div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               Raj kum
//             </div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               Delivery
//             </div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               {/* 30/12/24 <br /> <small>14:20</small>  - 30/12/24 <br /> <small>14:20</small> */}
//               <span title="12/2/23-12/2/23">14:20 - 16:40</span>
//             </div>
//             <div className="ml-auto grid place-items-center justify-self-end">
//               1:60:00
//             </div>
//             <div className="ml-5 flex">
//               <button
//                 className="rounded-md border border-transparent mx-2 p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                 type="button"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="w-4 h-4"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//               <button
//                 className="rounded-md border border-transparent mx-2 p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                 type="button"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="w-4 h-4"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Vehicles;

import React from "react";
import { Users } from "lucide-react";
import Shipments from "./Shipments";
import addIcon from "../assets/add.svg";
import del from "../assets/bin.svg"
import edit from "../assets/edit.svg"
import JsonFileReader from "./JsonFileReader";
import VehicleModalForm from "./VechicleModalForm";

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
      <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
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
                    Fixed Cost
                  </th>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Cost Per Hour
                  </th>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Max load
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50" />
                </tr>
              </thead>
              <tbody className="bg-white">
                {users.map((user, index) => (
                  <tr key={user.id}>
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
                    <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                      <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap">
                      {user.role}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap">
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

const Vehicles = ({ users = defaultUsers }) => {
  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
      <div className="container mx-auto px-6 py-8">
        <div>
          <h3 className="text-3xl font-medium text-gray-700">Vehicles</h3>
          <div className="flex align-baseline justify-around ">
            <img
              src={addIcon}
              alt=""
              className="w-14 hover:scale-110 transition-transform duration-200"
            />
            <VehicleModalForm/>

            <JsonFileReader />
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

export default Vehicles;
