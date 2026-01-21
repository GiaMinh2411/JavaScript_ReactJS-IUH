import TodoItem from "./TodoItem";

function TodoList({ todos, removeTodo }) {
  return (
    <ul>
      {todos.map((t, i) => (
        <TodoItem key={i} todo={t} removeTodo={removeTodo} />
      ))}
    </ul>
  );
}
export default TodoList;
