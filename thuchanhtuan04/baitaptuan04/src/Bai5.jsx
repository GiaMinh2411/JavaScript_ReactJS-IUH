import { useEffect, useState } from "react";

export default function Bai5() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const API = "https://jsonplaceholder.typicode.com/todos";

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setTodos(data.slice(0, 10)))
      .catch((err) => console.log(err));
  }, []);

  const handleAdd = () => {
    if (!title) return;

    setLoading(true);

    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        completed: false,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos([data, ...todos]);
        setTitle("");
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  const handleDelete = (id) => {
    fetch(`${API}/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setTodos(todos.filter((todo) => todo.id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Bài 5</h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd} disabled={loading}>
        Add
      </button>

      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.title}</p>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  );
}