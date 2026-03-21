import { useState } from "react";
import "./App.css";

import ProductCard from "./components/Bai1/ProductCard";
import ButtonDemo from "./components/Bai2/ButtonDemo";
import AlertDemo from "./components/Bai3/AlertDemo";
import LoginForm from "./components/Bai4/LoginForm";
import ProductList from "./components/Bai5/ProductList";

function App() {
  const [bai, setBai] = useState(1);

  return (
    <div className="app">
      <h1>Buổi 1 – React CSS & JSX</h1>

      <div className="menu">
        <button onClick={() => setBai(1)}>Bài 1</button>
        <button onClick={() => setBai(2)}>Bài 2</button>
        <button onClick={() => setBai(3)}>Bài 3</button>
        <button onClick={() => setBai(4)}>Bài 4</button>
        <button onClick={() => setBai(5)}>Bài 5</button>
      </div>

      <div className="content">
        {bai === 1 && <ProductCard />}
        {bai === 2 && <ButtonDemo />}
        {bai === 3 && <AlertDemo />}
        {bai === 4 && <LoginForm />}
        {bai === 5 && <ProductList />}
      </div>
    </div>
  );
}

export default App;
