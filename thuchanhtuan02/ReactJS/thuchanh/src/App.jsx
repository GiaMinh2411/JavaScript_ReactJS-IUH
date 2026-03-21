import React, { useState } from "react";

import Header from "./components/Bai1/Header";
import Footer from "./components/Bai1/Footer";
import StudentInfo from "./components/Bai1/StudentInfo";

import Counter from "./components/Bai2/Counter";
import LiveForm from "./components/Bai3/LiveForm";
import StatusBadge from "./components/Bai4/StatusBadge";

import TodoInput from "./components/Bai5/TodoInput";
import TodoList from "./components/Bai5/TodoList";

import student from "./components/data/student";
import "./App.css";

function App() {
  const [currentBai, setCurrentBai] = useState(1);
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, text]);
  };

  const removeTodo = (text) => {
    setTodos(todos.filter((t) => t !== text));
  };

  const renderBai = () => {
    switch (currentBai) {
      case 1:
        return (
          <>
            <Header />
            <StudentInfo
              name={student.name}
              mssv={student.mssv}
              className={student.className}
            />
            <Footer />
          </>
        );
      case 2:
        return <Counter />;
      case 3:
        return <LiveForm />;
      case 4:
        return <StatusBadge initialStatus="online" />;
      case 5:
        return (
          <>
            <TodoInput addTodo={addTodo} />
            <TodoList todos={todos} removeTodo={removeTodo} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <h1>Buổi 2 – React Fundamentals & JSX</h1>

      {/* MENU BUTTON */}
      <div className="button-group">
        <button onClick={() => setCurrentBai(1)}>Bài 1</button>
        <button onClick={() => setCurrentBai(2)}>Bài 2</button>
        <button onClick={() => setCurrentBai(3)}>Bài 3</button>
        <button onClick={() => setCurrentBai(4)}>Bài 4</button>
        <button onClick={() => setCurrentBai(5)}>Bài 5</button>
      </div>

      <hr />

      {/* NỘI DUNG BÀI */}
      <section className="section">
        {renderBai()}
      </section>
    </div>
  );
}

export default App;
