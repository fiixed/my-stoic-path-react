import { createSlice } from '@reduxjs/toolkit';
// import { addEntry, editEntry } from './entriesSlice';
import { journalApi } from '../apis/journalApi';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    description: '',
    editID: '',
  },
  reducers: {
    changeDescription(state, action) {
      state.description = action.payload;
    },
    editEntry(state, action) {
      state.editID = action.payload.id;
      state.description = action.payload.description;
    },
  },
  extraReducers(builder) {
    // builder.addCase(addEntry, (state) => {
    //   state.description = '';
    // });
    // builder.addCase(editEntry, (state, action) => {
    //   state.description = action.payload.description;
    // });
    builder.addMatcher(
      journalApi.endpoints.addEntry.matchFulfilled,
      (state, action) => {
        state.description = '';
      }
    );
    builder.addMatcher(
      journalApi.endpoints.patchEntry.matchFulfilled,
      (state, action) => {
        state.description = '';
      }
    );
  },
});

export const { changeDescription, editEntry } = formSlice.actions;

export const formReducer = formSlice.reducer;
