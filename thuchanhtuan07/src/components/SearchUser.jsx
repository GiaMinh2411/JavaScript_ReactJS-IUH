import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { searchQueryState, searchResultState } from '../recoil/SearchState';

const SearchUser = () => {
  const [query, setQuery] = useRecoilState(searchQueryState);
  const [result, setResult] = useRecoilState(searchResultState);
  const [searchTerm, setSearchTerm] = useState(query);

  useEffect(() => {
   
    const delayDebounceFn = setTimeout(() => {
      setQuery(searchTerm);
      if (searchTerm.trim() !== '') {
        fetchData(searchTerm);
      } else {
        setResult({ data: [], loading: false });
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn); 
  }, [searchTerm]);

  const fetchData = async (term) => {
    setResult({ ...result, loading: true });
    try {
      // Sử dụng API giả lập tìm kiếm theo tên
      const response = await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${term}`);
      const data = await response.json();
      setResult({ data, loading: false });
    } catch (error) {
      console.error("Lỗi tìm kiếm:", error);
      setResult({ data: [], loading: false });
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Tìm kiếm user theo tên..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '8px', width: '300px' }}
      />
      
      {result.loading && <p>Đang tìm kiếm...</p>}
      
      <ul style={{ marginTop: '10px' }}>
        {result.data.length > 0 ? (
          result.data.map((user) => (
            <li key={user.id}>
              {user.name} (@{user.username})
            </li>
          ))
        ) : (
          !result.loading && searchTerm && <p>Không tìm thấy kết quả.</p>
        )}
      </ul>
    </div>
  );
};

export default SearchUser;