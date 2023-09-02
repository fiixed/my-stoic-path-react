import { nanoid } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const entriesSlice = createSlice({
  name: 'entries',
  initialState: {
    searchTerm: '',
    entries: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addEntry(state, action) {
      state.entries.push({
        timestamp: Date.now(),
        description: action.payload.description,
        id: nanoid,
      });
    },
    removeEntry(state, action) {
        const updated = state.entries.filter((entry) => {
            return entry.id !== action.payload.id;
        })
        state.entries = updated;
    },
  },
});

export const {
    changeSearchTerm, addEntry, removeEntry
} = entriesSlice.actions;

export const entriesReducer = entriesSlice.reducer;
