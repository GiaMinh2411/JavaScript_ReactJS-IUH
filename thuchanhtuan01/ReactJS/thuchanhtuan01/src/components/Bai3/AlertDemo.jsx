import { useState } from "react";
import "./AlertDemo.css";

function AlertDemo() {
  const [status, setStatus] = useState("");

  return (
    <>
      <button onClick={() => setStatus("success")}>Success</button>
      <button onClick={() => setStatus("warning")}>Warning</button>
      <button onClick={() => setStatus("error")}>Error</button>

      {status && <div className={`alert ${status}`}>{status.toUpperCase()}</div>}
    </>
  );
}

export default AlertDemo;
