import { useState } from "react";

function TodoInput({ addTodo }) {
  const [text, setText] = useState("");

  const submit = () => {
    if (text.trim() === "") return;
    addTodo(text);
    setText("");
  };

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={submit}>Add</button>
    </>
  );
}
export default TodoInput;
