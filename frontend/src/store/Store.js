import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginSlice';

const store = configureStore({
  reducer: {
    // Gắn slice login vào store
    auth: loginReducer,
  },
});

export default store;
