import { useState } from "react";
import { useDispatch } from "react-redux";
import { addVehicles } from "../../redux/vehiclesSlice";
import filesAdd from "../../assets/fileAdd.svg";

const AddVehiclesByFile = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const json = JSON.parse(e.target.result);
          console.log(json);
          dispatch(addVehicles(json));
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

export default AddVehiclesByFile;
