import { useRef } from "react";

export default function UseRefDemo() {
  const inputRef = useRef();

  return (
    <div>
      <h3>Bai tap useRef</h3>
      <input ref={inputRef} placeholder="Nhap ten" />
      <button onClick={() => inputRef.current.focus()}>
        Focus input
      </button>
    </div>
  );
}
