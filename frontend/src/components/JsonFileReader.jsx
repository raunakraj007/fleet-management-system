import React, { useState } from "react";
import logo from "../assets/fileAdd.svg";

const JsonFileReader = () => {
  const [jsonData, setJsonData] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const json = JSON.parse(e.target.result);
          console.log(json);
          setJsonData(json);
          setError("");
        } catch (error) {
          setError("Invalid JSON file.");
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className=" w-14 h-16">
      <label htmlFor="file-upload" className="cursor-pointer">
        <img src={logo} alt=""className="w-14 hover:scale-110 transition-transform duration-200" />
      </label>
      <input
        id="file-upload"
        type="file"
        accept=".json"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
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

export default JsonFileReader;
