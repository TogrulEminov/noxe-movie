import { createSlice } from '@reduxjs/toolkit';

export const ApiSlice = createSlice({
  name: 'api',
  initialState: {
    url: {},
    genres: {},
  },
  reducers: {
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});
export const { getApiConfiguration, getGenres } = ApiSlice.actions;
export default ApiSlice.reducer;
