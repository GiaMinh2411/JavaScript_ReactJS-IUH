import { useState } from "react";

function StatusBadge({ initialStatus }) {
  const [status, setStatus] = useState(initialStatus);

  const getColor = () => {
    if (status === "online") return "green";
    if (status === "offline") return "gray";
    return "red";
  };

  return (
    <div>
      <span style={{ background: getColor(), color: "white", padding: "5px" }}>
        {status}
      </span>

      <br />
      <button onClick={() => setStatus("online")}>Online</button>
      <button onClick={() => setStatus("offline")}>Offline</button>
      <button onClick={() => setStatus("busy")}>Busy</button>
    </div>
  );
}
export default StatusBadge;
