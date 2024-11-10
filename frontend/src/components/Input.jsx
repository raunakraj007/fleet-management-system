import React, { useState } from "react";
import { addShipments } from "../redux/shipmentSlice";
import { useDispatch } from "react-redux";

const JsonFileUploader = () => {
  const dispatch = useDispatch();
  const [jsonData, setJsonData] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        console.log(e.target.result);
        const json = JSON.parse(e.target.result);
        dispatch(addShipments(json));
        console.log(json);
        setJsonData(json);
        setError(null);
      } catch (err) {
        setError("Invalid JSON file.");
        setJsonData(null);
      }
    };

    reader.onerror = () => {
      setError("Error reading file.");
    };

    reader.readAsText(file);
  };

  return (
    <div className="w-full">
      <input type="file" accept=".json" onChange={handleFileChange} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {jsonData && (
        <div className="w-full">
          <h3>Parsed JSON Data:</h3>
          <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default JsonFileUploader;
