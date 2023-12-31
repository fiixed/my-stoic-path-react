import { createSlice } from '@reduxjs/toolkit';
import { addEntry, editEntry } from './entriesSlice';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    description: '',
  },
  reducers: {
    changeDescription(state, action) {
      state.description = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addEntry, (state) => {
      state.description = '';
    });
    builder.addCase(editEntry, (state, action) => {
      state.description = action.payload.description;
    });
  },
});

export const { changeDescription } = formSlice.actions;

export const formReducer = formSlice.reducer;
