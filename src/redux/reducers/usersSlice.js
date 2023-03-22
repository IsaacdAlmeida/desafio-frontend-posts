/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  arrayOfUsers: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.arrayOfUsers = action.payload;
    },
  },
});

export const {
  setUsers,
} = usersSlice.actions;

export default usersSlice.reducer;
