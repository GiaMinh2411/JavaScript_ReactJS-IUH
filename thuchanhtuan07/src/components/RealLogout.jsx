import React from 'react';
import { useSetRecoilState } from 'recoil';
import { authState } from '../recoil/AuthState';

const RealLogout = () => {
  const setAuth = useSetRecoilState(authState);

  const handleLogout = () => {
    
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    setAuth({
      token: null,
      user: null,
      isAuthenticated: false,
    });
  };

  return <button onClick={handleLogout}>Đăng xuất</button>;
};

export default RealLogout;