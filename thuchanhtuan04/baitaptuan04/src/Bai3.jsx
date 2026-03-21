import { useEffect, useState } from "react";

export default function Bai3() {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (userId >= 1 && userId <= 10) {
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch((err) => console.log(err));
    } else {
      setUser(null);
    }
  }, [userId]);

  return (
    <div>
      <h2>Bài 3</h2>

      <input
        type="number"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
      )}
    </div>
  );
}