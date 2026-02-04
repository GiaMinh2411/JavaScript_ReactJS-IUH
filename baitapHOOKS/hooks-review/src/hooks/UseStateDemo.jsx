import { useState } from "react";

export default function UseStateDemo() {
  const [soLuong, setSoLuong] = useState(1);

  return (
    <div>
      <h3>Bai tap useState</h3>
      <p>So luong san pham: {soLuong}</p>
      <button onClick={() => setSoLuong(soLuong + 1)}>Tang</button>
      <button onClick={() => setSoLuong(soLuong - 1)}>Giam</button>
    </div>
  );
}
