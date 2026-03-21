function StudentInfo({ name, mssv, className }) {
  return (
    <div>
      <p>Họ tên: {name}</p>
      <p>MSSV: {mssv}</p>
      <p>Lớp: {className}</p>
    </div>
  );
}

export default StudentInfo;
