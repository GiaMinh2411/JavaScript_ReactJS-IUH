import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userListState } from '../recoil/UserListState';

const UserList = () => {
  const [userList, setUserList] = useRecoilState(userListState);

  const fetchUsers = async () => {

    setUserList({ data: [], loading: true, error: null });

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) throw new Error('Không thể tải dữ liệu người dùng');
      
      const data = await response.json();
      

      setUserList({ data: data, loading: false, error: null });
    } catch (err) {
   
      setUserList({ data: [], loading: false, error: err.message });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []); 

  
  if (userList.loading) {
    return <div className="spinner">Đang tải dữ liệu...</div>;
  }


  if (userList.error) {
    return (
      <div style={{ color: 'red' }}>
        <p>Lỗi: {userList.error}</p>
        <button onClick={fetchUsers}>Thử lại</button>
      </div>
    );
  }

  
  return (
    <div>
      <button onClick={fetchUsers} style={{ marginBottom: '10px' }}>Làm mới danh sách</button>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {userList.data.map((user) => (
          <li key={user.id} style={{ borderBottom: '1px solid #ccc', padding: '5px 0' }}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;