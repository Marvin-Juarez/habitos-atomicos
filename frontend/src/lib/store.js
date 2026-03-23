import { configureStore } from '@reduxjs/toolkit';
import habitosReducer from './features/habitosSlice';
import authReducer from './features/authSlice'; 

export const makeStore = () => {
  return configureStore({
    reducer: {
      habitos: habitosReducer,
      auth: authReducer, 
    },
  });
};
