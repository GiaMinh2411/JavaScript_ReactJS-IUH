import { useState } from "react";

import Baitap01 from "./components/baitap01";
import Baitap02 from "./components/baitap02";
import Baitap03 from "./components/baitap03";
import Baitap04 from "./components/baitap04";
import Baitap05 from "./components/baitap05";
import Baitap06 from "./components/baitap06";
import Baitap07 from "./components/baitap07";

function App() {
  const [bai, setBai] = useState(0);

  return (
    <div style={{ padding: 20 }}>
      <h2>Danh sách bài tập React Hook</h2>

      <div style={{ marginBottom: 20 }}>
        <button onClick={() => setBai(1)}>Bài 01</button>
        <button onClick={() => setBai(2)}>Bài 02</button>
        <button onClick={() => setBai(3)}>Bài 03</button>
        <button onClick={() => setBai(4)}>Bài 04</button>
        <button onClick={() => setBai(5)}>Bài 05</button>
        <button onClick={() => setBai(6)}>Bài 06</button>
        <button onClick={() => setBai(7)}>Bài 07</button>
      </div>

      <hr />

      {bai === 0 && <p>Chọn bài tập để xem nội dung</p>}
      {bai === 1 && <Baitap01 />}
      {bai === 2 && <Baitap02 />}
      {bai === 3 && <Baitap03 />}
      {bai === 4 && <Baitap04 />}
      {bai === 5 && <Baitap05 />}
      {bai === 6 && <Baitap06 />}
      {bai === 7 && <Baitap07 />}
    </div>
  );
}

export default App;
