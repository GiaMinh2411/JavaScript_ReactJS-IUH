import { useState } from "react";

function Baitap01() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: 0
  });

  const [submittedUser, setSubmittedUser] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: name === "age" ? Number(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // không reload trang
    setSubmittedUser(user);
  };

  return (
    <div>
      <h3>Bài tập 01</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Name"
        />

        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
        />

        <input
          type="number"
          name="age"
          value={user.age}
          onChange={handleChange}
          placeholder="Age"
        />

        <button type="submit">Submit</button>
      </form>

      {submittedUser && (
        <div>
          <h4>Thông tin đã nhập:</h4>
          <p>Name: {submittedUser.name}</p>
          <p>Email: {submittedUser.email}</p>
          <p>Age: {submittedUser.age}</p>
        </div>
      )}
    </div>
  );
}

export default Baitap01;
