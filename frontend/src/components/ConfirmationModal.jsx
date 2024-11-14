import React from "react";

const ConfirmationModal = ({ open, setOpen, Confirm }) => {
  return (
    <>
      <div
        className={`modal fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-gray-900 opacity-50"
          onClick={() => setOpen(false)}
        />
        <div className="z-50 ml-56 mt-20 px-5 py-2  bg-white rounded shadow-lg relative">
          <div className="h-[25vh] w-[500px] ">
            {/* content */}
            <h1 className="text-red-600 text-5xl">Alert!</h1>
            <p className="text-gray-600 text-lg">
              Are you sure you want to delete All?
            </p>
            <div className="flex justify-end space-x-2 mt-6">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded"
                onClick={() => {
                  setOpen(false);
                  Confirm();
                }}
              >
                Confirm
              </button>
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationModal;
