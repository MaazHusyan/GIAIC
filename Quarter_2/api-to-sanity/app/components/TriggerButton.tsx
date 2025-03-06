"use client";

import { useState } from "react";

const TriggerButton = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const triggerImport = async () => {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/importSanity", { method: "POST" });

      if (response.ok) {
        setMessage("Data successfully sent to Sanity!");
      } else {
        setMessage("Failed to send data to Sanity.");
      }
    } catch (error) {
      setMessage(`Error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={triggerImport} disabled={loading}>
        {loading ? "Sending..." : "Send Data to Sanity"}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default TriggerButton;
