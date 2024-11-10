import React, { useState,useRef } from "react";
import logo from "../assets/fileAdd.svg";
import { useDispatch } from "react-redux";
import { addShipments } from "../redux/shipmentSlice";

// const JsonFileReaderShipment = () => {

//   return (
//     <div className=" w-14 h-16">
//       <label htmlFor="file-upload" className="cursor-pointer">
//         <img
//           src={logo}
//           onClick={handleImgClick}
//           alt=""
//           className="w-14 hover:scale-110 transition-transform duration-200"
//         />
//       </label>
//     </div>
//   );
// };

const JsonFileReaderShipment = () => {
  const fileInputRef = useRef(null);
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target.result);
        console.log("Uploaded JSON:", json); // Do something with the JSON data
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    };
    if (file) {
      reader.readAsText(file);
    } else {
      console.error("No file selected");
    }
  };
  const handleImgClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <div className="w-14 h-16">
      {" "}
      <label htmlFor="file-upload" className="cursor-pointer">
        {" "}
        <img
          src={logo}
          onClick={handleImgClick}
          alt="Upload JSON"
          className="w-14 hover:scale-110 transition-transform duration-200"
        />{" "}
      </label>{" "}
      <input
        type="file"
        id="file-upload"
        ref={fileInputRef}
        accept=".json"
        onChange={handleFileUpload}
        className="hidden"
      />{" "}
    </div>
  );
};

export default JsonFileReaderShipment;
