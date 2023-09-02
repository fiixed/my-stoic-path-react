import { createSlice, nanoid } from '@reduxjs/toolkit';

const entriesSlice = createSlice({
  name: 'entries',
  initialState: {
    searchTerm: '',
    data: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addEntry(state, action) {
      state.data.push({
        timestamp: Date.now(),
        description: action.payload.description,
        id: nanoid(),
      });
    },
    removeEntry(state, action) {
      const updated = state.data.filter((entry) => {
        return entry.id !== action.payload;
      });
      state.data = updated;
    },
  },
});

export const { changeSearchTerm, addEntry, removeEntry } = entriesSlice.actions;

export const entriesReducer = entriesSlice.reducer;
