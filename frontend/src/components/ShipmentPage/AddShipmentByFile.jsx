import React, { useState } from "react";
import logo from "../../assets/fileAdd.svg";
import filesAdd from "../../assets/fileAdd.svg";
import { useDispatch } from "react-redux";
import { addShipments } from "../../redux/shipmentSlice";

const AddShipmentByFile = () => {
  const dispatch = useDispatch();
  const [jsonData, setJsonData] = useState(null);

  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const json = JSON.parse(e.target.result);
          // console.log(json);
          dispatch(addShipments(json));
          setJsonData(json);
          setError("");
          
        } catch (error) {
          setError("Invalid JSON file.");
        }
      };
      reader.readAsText(file);
    }
  };

  const handleDivClick = () => {
    document.getElementById("file-upload").click();
  };

  return (
    // <div className=" w-14 h-16">
    //   <label htmlFor="file-upload" className="cursor-pointer">
    //     <img src={logo} alt=""className="w-14 hover:scale-110 transition-transform duration-200" />
    //   </label>
    //   <input
    //     id="file-upload"
    //     type="file"
    //     accept=".json"
    //     onChange={handleFileChange}
    //     style={{ display: "none" }}
    //   />
    //   {error && <p style={{ color: "red" }}>{error}</p>}

    // </div>
    
      <div className="w-[25%] py-4">
        <div
          onClick={handleDivClick}
          className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
        >
          <img src={filesAdd} alt="" className="h-full" />
        </div>
      
      <input
        id="file-upload"
        type="file"
        accept=".json"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default AddShipmentByFile;
