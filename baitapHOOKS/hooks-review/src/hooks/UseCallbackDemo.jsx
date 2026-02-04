import { useCallback, useState } from "react";

export default function UseCallbackDemo() {
  const [dem, setDem] = useState(0);

  const xuLyClick = useCallback(() => {
    setDem(d => d + 1);
  }, []);

  return (
    <div>
      <h3>Bai tap useCallback</h3>
      <button onClick={xuLyClick}>Click dem: {dem}</button>
    </div>
  );
}
