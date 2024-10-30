import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [uuids, setUuids] = useState([]);
  const [length, setLength] = useState(30);

  // Generate 30 UUIDs on button click
  const generateUuids = () => {
    if (length <= 0) {
      alert("Enter the count of the UUID");

      return;
    }
    const newUuids = Array.from({ length: length }, () => uuidv4());
    setUuids(newUuids);
  };

  // Copy all UUIDs to clipboard
  const copyToClipboard = () => {
    const allUuids = uuids.join("\n"); // Join UUIDs with a newline for better readability
    navigator.clipboard.writeText(allUuids);
    // alert("UUIDs copied to clipboard!");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <button
          onClick={generateUuids}
          style={{ padding: "10px 20px", fontSize: "16px" }}
        >
          Generate 30 UUIDs
        </button>
        <input
          type="number"
          placeholder="Enter the count fo the UUID"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>

      {uuids.length > 0 && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {uuids.map((uuid, index) => (
              <li key={index}>{uuid}</li>
            ))}
          </ul>
          <button
            onClick={copyToClipboard}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              marginTop: "10px",
            }}
          >
            Copy All UUIDs
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
