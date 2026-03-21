import { useState } from "react";

import UseStateDemo from "./hooks/UseStateDemo";
import UseEffectDemo from "./hooks/UseEffectDemo";
import UseReducerDemo from "./hooks/UseReducerDemo";
import UseRefDemo from "./hooks/UseRefDemo";
import UseMemoDemo from "./hooks/UseMemoDemo";
import UseCallbackDemo from "./hooks/UseCallbackDemo";

function App() {
  const [bai, setBai] = useState("");

  return (
    <div>
      <h2>Review React Hooks</h2>

      {/* CAC NUT BAI TAP */}
      <button onClick={() => setBai("state")}>useState</button>
      <button onClick={() => setBai("effect")}>useEffect</button>
      <button onClick={() => setBai("reducer")}>useReducer</button>
      <button onClick={() => setBai("ref")}>useRef</button>
      <button onClick={() => setBai("memo")}>useMemo</button>
      <button onClick={() => setBai("callback")}>useCallback</button>

      <hr />

      {/* HIEN THI BAI TAP */}
      {bai === "state" && <UseStateDemo />}
      {bai === "effect" && <UseEffectDemo />}
      {bai === "reducer" && <UseReducerDemo />}
      {bai === "ref" && <UseRefDemo />}
      {bai === "memo" && <UseMemoDemo />}
      {bai === "callback" && <UseCallbackDemo />}
    </div>
  );
}

export default App;
