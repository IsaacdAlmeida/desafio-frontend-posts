import { configureStore } from '@reduxjs/toolkit';
import postSlice from '../reducers/postSlice';
import usersSlice from '../reducers/usersSlice';

const store = configureStore({
  reducer: {
    postSlice,
    usersSlice,
  },
});

export default store;
