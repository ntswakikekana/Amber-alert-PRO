import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import missingPersonsReducer from '../features/missingPersons/missingPersonsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    missingPersons: missingPersonsReducer,
  },
});

export default store;
