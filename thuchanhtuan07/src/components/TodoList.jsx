import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../recoil/TodoState';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <div>
      <h3>Danh sách công việc:</h3>
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
};

export default TodoList;