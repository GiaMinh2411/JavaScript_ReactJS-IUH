import { useState } from "react";
import Bai1 from "./Bai1";
import Bai2 from "./Bai2";
import Bai3 from "./Bai3";
import Bai4 from "./Bai4";
import Bai5 from "./Bai5";

export default function App() {
  const [page, setPage] = useState(null);

  return (
    <div style={{ padding: 20 }}>
      <h1>Fetch API</h1>

      <button onClick={() => setPage("bai1")}>Bài 1</button>
      <button onClick={() => setPage("bai2")}>Bài 2</button>
      <button onClick={() => setPage("bai3")}>Bài 3</button>
      <button onClick={() => setPage("bai4")}>Bài 4</button>
      <button onClick={() => setPage("bai5")}>Bài 5</button>

      <hr />

      {page === "bai1" && <Bai1 />}
      {page === "bai2" && <Bai2 />}
      {page === "bai3" && <Bai3 />}
      {page === "bai4" && <Bai4 />}
      {page === "bai5" && <Bai5 />}
    </div>
  );
}