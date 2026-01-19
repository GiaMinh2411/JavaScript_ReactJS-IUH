import Header from "./components/Header";
import StudentInfo from "./components/StudentInfo";
import Footer from "./components/Footer";

function App() {
  const student = {
    name: "Nguyễn Văn A",
    id: "12345678",
    className: "CNTT K20"
  };

  return (
    <>
      <Header />
      <StudentInfo
        name={student.name}
        id={student.id}
        className={student.className}
      />
      <Footer />
    </>
  );
}

export default App;
