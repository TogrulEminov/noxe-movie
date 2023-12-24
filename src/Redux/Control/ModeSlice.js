import { createSlice } from '@reduxjs/toolkit';

export const modeSlice = createSlice({
  name: 'mode',
  initialState: {
    theme: localStorage.getItem('theme') === 'dark' ? 'dark' : 'light',
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', state.theme);
    },
  },
});

export const { toggleTheme } = modeSlice.actions;

export default modeSlice.reducer;
