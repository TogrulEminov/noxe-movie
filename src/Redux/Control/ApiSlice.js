import { createSlice } from '@reduxjs/toolkit';

export const ApiSlice = createSlice({
  name: 'api',
  initialState: {
    url: {},
  },
  reducers: {
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    }
   
  },
});
export const { getApiConfiguration} = ApiSlice.actions;
export default ApiSlice.reducer;