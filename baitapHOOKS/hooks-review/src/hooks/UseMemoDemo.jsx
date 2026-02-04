import { useMemo, useState } from "react";

export default function UseMemoDemo() {
  const [gia, setGia] = useState(100);

  const tongTien = useMemo(() => {
    return gia * 10;
  }, [gia]);

  return (
    <div>
      <h3>Bai tap useMemo</h3>
      <p>Gia san pham: {gia}</p>
      <p>Tong tien: {tongTien}</p>
      <button onClick={() => setGia(gia + 50)}>Tang gia</button>
    </div>
  );
}
