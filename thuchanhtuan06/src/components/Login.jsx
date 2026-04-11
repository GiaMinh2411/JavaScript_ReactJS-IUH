// components/Login.jsx
import React from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (path) => {
    login();
    navigate(path); 
  };

  return (
    <div style={{ padding: '20px', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
      <h1>Trang Đăng Nhập</h1>
      <div className="login-button-group">
      <div style={{ display: 'flex', gap: '10px', flexDirection: 'column', width: '250px' }}>
        <button onClick={() => handleLogin('/dashboard/profile')}>
          Login vào Profile
        </button>
        <button onClick={() => handleLogin('/dashboard/setting')}>
          Login vào Settings
        </button>
        <button onClick={() => handleLogin('/dashboard/order')}>
          Login vào Orders
        </button>
      </div>
      </div>
    </div>
  );
}

export default Login;