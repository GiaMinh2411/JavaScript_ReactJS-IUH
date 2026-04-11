import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { authState } from '../recoil/AuthState';

const SecretData = () => {
  const auth = useRecoilValue(authState);
  const [data, setData] = useState(null);

  const fetchSecret = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        headers: {
          'Authorization': `Bearer ${auth.token}`
        }
      });
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Lỗi xác thực");
    }
  };

  return (
    <div style={{ marginTop: '10px', padding: '10px', border: '1px dashed gray' }}>
      <p>Chào, <strong>{auth.user?.name}</strong>!</p>
      <button onClick={fetchSecret}>Lấy dữ liệu bảo mật</button>
      {data && <p>Dữ liệu: {data.title}</p>}
    </div>
  );
};

export default SecretData;