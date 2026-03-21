import { createContext, useContext, useEffect, useState } from "react";

//Tạo ThemeContext
const ThemeContext = createContext();

//Component gốc
function Baitap07() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  //Bonus: persist theme
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          background: theme === "light" ? "#fff" : "#222",
          color: theme === "light" ? "#000" : "#fff",
          minHeight: "100vh",
          padding: 20
        }}
      >
        <h3>Bài tập 07</h3>
        <Layout />
      </div>
    </ThemeContext.Provider>
  );
}

//Cấp 2
function Layout() {
  return (
    <div>
      <Card />
    </div>
  );
}

//Cấp 3
function Card() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: 20,
        borderRadius: 8,
        background: theme === "light" ? "#eee" : "#333"
      }}
    >
      <p>Current theme: {theme}</p>
      <Button />
    </div>
  );
}

//Cấp 4 (component sâu)
function Button() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
}

export default Baitap07;
