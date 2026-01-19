function StudentInfo(props) {
  return (
    <div>
      <p><strong>Họ tên:</strong> {props.name}</p>
      <p><strong>MSSV:</strong> {props.id}</p>
      <p><strong>Lớp:</strong> {props.className}</p>
    </div>
  );
}

export default StudentInfo;
