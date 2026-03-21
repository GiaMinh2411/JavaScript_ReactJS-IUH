import React, { useCallback, useState } from "react";

// ===== TodoItem =====
const TodoItem = React.memo(function TodoItem({ todo, onToggle, onDelete }) {
  console.log("render item", todo.id);

  return (
    <li>
      <span
        onClick={() => onToggle(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer"
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>X</button>
    </li>
  );
});

// ===== TodoList =====
function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

// ===== TodoApp =====
function Baitap04() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!text) return;
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text, completed: false }
    ]);
    setText("");
  };

  // useCallback: toggle
  const onToggle = useCallback((id) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  }, []);

  // useCallback: delete
  const onDelete = useCallback((id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <div>
      <h3>Bài tập 04</h3>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New todo"
      />
      <button onClick={addTodo}>Add</button>

      <TodoList
        todos={todos}
        onToggle={onToggle}
        onDelete={onDelete}
      />
    </div>
  );
}

export default Baitap04;
