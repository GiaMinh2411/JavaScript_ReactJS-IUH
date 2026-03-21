import { useReducer } from "react";

function reducer(state, action) {
  if (action === "tang") return state + 1;
  if (action === "giam") return state - 1;
  return state;
}

export default function UseReducerDemo() {
  const [dem, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h3>Bai tap useReducer</h3>
      <p>Gia tri dem: {dem}</p>
      <button onClick={() => dispatch("tang")}>Tang</button>
      <button onClick={() => dispatch("giam")}>Giam</button>
    </div>
  );
}
