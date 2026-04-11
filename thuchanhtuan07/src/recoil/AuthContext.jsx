import { atom } from 'recoil';

export const authState = atom({
  key: 'authState',
  default: {
    token: localStorage.getItem('token') || null,
    user: JSON.parse(localStorage.getItem('user')) || null,
    isAuthenticated: !!localStorage.getItem('token'),
  },
});