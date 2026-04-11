import { atom } from 'recoil';

export const searchQueryState = atom({
  key: 'searchQueryState',
  default: '',
});

export const searchResultState = atom({
  key: 'searchResultState',
  default: {
    data: [],
    loading: false,
  },
});