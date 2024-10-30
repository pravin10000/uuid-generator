import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [uuid, setUuid] = useState("");

  // Generate UUID on button click
  const generateUuid = () => {
    const newUuid = uuidv4();
    setUuid(newUuid);
  };

  // Copy UUID to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(uuid);
    // alert("UUID copied to clipboard!");
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
      <button
        onClick={generateUuid}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Generate UUID
      </button>
      {uuid && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <p>{uuid}</p>
          <button
            onClick={copyToClipboard}
            style={{ padding: "10px 20px", fontSize: "16px" }}
          >
            Copy UUID
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
