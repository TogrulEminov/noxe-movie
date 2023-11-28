import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menu: false,
  search: false,
  user: false,
};
const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    openMenu: (state) => {
      state.menu = true;
    },
    closeMenu: (state) => {
      state.menu = false;
    },
    openSearch: (state) => {
      state.search = true;
    },
    closeSearch: (state) => {
      state.search = false;
    },
    openUser: (state) => {
      state.user = true;
    },
    closeUser: (state) => {
      state.user = false;
    },
  },
});

export const {
  openMenu,
  closeMenu,
  openSearch,
  closeSearch,
  openUser,
  closeUser,
} = headerSlice.actions;
export default headerSlice.reducer;
