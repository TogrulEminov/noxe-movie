import { configureStore } from '@reduxjs/toolkit';
import headerSlice from '../Control/HeaderSlice';
import ApiSlice from '../Control/ApiSlice';
import ModeSlice from '../Control/ModeSlice';
export const store = configureStore({
  reducer: {
    header: headerSlice,
    api: ApiSlice,
    mode: ModeSlice,
  },
});
