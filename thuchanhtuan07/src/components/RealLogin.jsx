import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { authState } from '../recoil/AuthState';

const RealLogin = () => {
  const setAuth = useSetRecoilState(authState);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {

      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const userData = await response.json();
      
      const fakeToken = "JWT_TOKEN_ABC_123"; 

      localStorage.setItem('token', fakeToken);
      localStorage.setItem('user', JSON.stringify(userData));

   
      setAuth({
        token: fakeToken,
        user: userData,
        isAuthenticated: true,
      });
    } catch (error) {
      alert("Đăng nhập thất bại!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Đang xác thực...' : 'Đăng nhập hệ thống'}
      </button>
    </div>
  );
};

export default RealLogin;