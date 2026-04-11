import { atom } from 'recoil';

export const productState = atom({
  key: 'productState',
  default: {
    items: [],
    loading: false,
    error: null,
  },
});