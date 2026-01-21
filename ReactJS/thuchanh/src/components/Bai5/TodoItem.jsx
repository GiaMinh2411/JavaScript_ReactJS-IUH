function TodoItem({ todo, removeTodo }) {
  return (
    <li>
      {todo}
      <button onClick={() => removeTodo(todo)}>X</button>
    </li>
  );
}

export default TodoItem;
