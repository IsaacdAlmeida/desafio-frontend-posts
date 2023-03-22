/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  arrayOfPosts: [],
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.arrayOfPosts = action.payload;
    },
  },
});

export const {
  setPosts,
} = postSlice.actions;

export default postSlice.reducer;
