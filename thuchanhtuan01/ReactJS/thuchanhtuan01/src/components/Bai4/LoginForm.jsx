import "./LoginForm.css";

function LoginForm() {
  return (
    <div className="login">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </div>
  );
}

export default LoginForm;
