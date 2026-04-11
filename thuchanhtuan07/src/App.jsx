import React from 'react';
import { useRecoilValue } from 'recoil';
import { themeState } from './recoil/ThemeState';
import ComponentA from './components/componentA';
import ComponentB from './components/componentB';
import ThemeToggle from './components/ThemeToggle';


import Login from './components/Login';
import Profile from './components/Profile';
import Logout from './components/Logout';
import { userState } from './recoil/UserState';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import ProductList from './components/ProductList';
import Cart from './components/Cart';

import NotificationContainer from './components/NotificationContainer';
import TestNotify from './components/TestNotify';

import UserList from './components/UserList';

import SearchUser from './components/SearchUser';

import { authState } from './recoil/AuthState';
import RealLogin from './components/RealLogin';
import RealLogout from './components/RealLogout';
import SecretData from './components/SecretData';

import { cartTotalSelector } from './recoil/CartContext';
import ProductManager from './components/ProductManager';

function App() {
  const theme = useRecoilValue(themeState);
  const user = useRecoilValue(userState);
  const auth = useRecoilValue(authState);
  const cartTotal = useRecoilValue(cartTotalSelector);

  const appStyle = {
    backgroundColor: theme === 'light' ? 'white' : '#222',
    color: theme === 'light' ? 'black' : 'white',
    minHeight: '100vh',
    padding: '20px'
  };

  return (
    <div style={appStyle}>
      <NotificationContainer />
      <h2>Bài 1: Counter Global</h2>
      <ComponentA />
      <ComponentB />

      <hr />

      <h2>Bài 2: Theme Toggle</h2>
      <ThemeToggle />

      <hr />

      <h2>Bài 3: Auth Giả Lập</h2>
      {!user ? (
        <Login />
      ) : (
        <div>
          <Profile />
          <Logout />
        </div>
      )}

      <hr />

      <section>
        <h2>Bài 4: Todo List Global</h2>
        <TodoInput />
        <TodoList />
      </section>
         <hr />
      <section>
        <h2>Bài 5: Giỏ hàng (Cart)</h2>
        <div>
          <ProductList />
          <Cart />
        </div>
      </section>
      <hr />
      <section>
        <h2>Bài 6: Notification System</h2>
        <TestNotify />
      </section>
         <hr />
      <section>
        <h2>Bài 7: Fetch Users (Global Async)</h2>
        <UserList />
      </section>
         <hr />
         <section>
        <h2>Bài 8: Search + Debounce (Async nâng cao)</h2>
        <SearchUser />
      </section>
      <hr />
        <section>
        <h2>Bài 9: Auth + API + Token</h2>
        {!auth.isAuthenticated ? (
          <div>
            <p>Vui lòng đăng nhập hệ thống để lấy Token</p>
            <RealLogin />
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>Đang đăng nhập với Token: <code>{auth.token.substring(0, 10)}...</code></span>
              <RealLogout />
            </div>
            <SecretData />
          </div>
        )}
      </section>
      <hr />
      <section>
        <div>
          <h2>Bài 10: Mini App</h2>
        </div>

        {!auth.isAuthenticated ? (
          <p style={{ color: 'red' }}><i>Bạn cần đăng nhập ở Bài 9 để sử dụng Mini App này.</i></p>
        ) : (
          <div style={{ display: 'flex', gap: '30px' }}>
            <div style={{ flex: 1 }}>
              <h3>Cửa hàng</h3>
              <ProductList />
            </div>
            <div style={{ flex: 1 }}>
              <Cart />
              <div style={{ marginTop: '20px' }}>
                <h4>Kiểm tra Token:<code>{auth.token.substring(0, 10)}...</code></h4>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;