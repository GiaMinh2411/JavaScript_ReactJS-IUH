import { atom } from 'recoil';

export const userListState = atom({
  key: 'userListState',
  default: {
    data: [],
    loading: false,
    error: null,
  },
});