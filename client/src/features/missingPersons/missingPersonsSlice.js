import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const missingPersonsSlice = createSlice({
  name: 'missingPersons',
  initialState,
  reducers: {
    setMissingPersons: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setMissingPersons } = missingPersonsSlice.actions;
export default missingPersonsSlice.reducer;
