import { useState } from "react";

function LiveForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <input
        placeholder="Tên"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <p>Tên: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}
export default LiveForm;
