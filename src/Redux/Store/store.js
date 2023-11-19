import { configureStore } from '@reduxjs/toolkit';
import headerSlice from '../Control/HeaderSlice';
export const store = configureStore({
  reducer: {
    header: headerSlice,
  },
});
