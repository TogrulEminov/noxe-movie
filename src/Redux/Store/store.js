import { configureStore } from '@reduxjs/toolkit';
import headerSlice from '../Control/HeaderSlice';
import ApiSlice from '../Control/ApiSlice';
export const store = configureStore({
  reducer: {
    header: headerSlice,
    api: ApiSlice,
  },
});
