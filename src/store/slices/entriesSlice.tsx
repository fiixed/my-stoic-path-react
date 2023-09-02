import { createSlice, nanoid } from '@reduxjs/toolkit';

const entriesSlice = createSlice({
  name: 'entries',
  initialState: {
    searchTerm: '',
    data: [],
    editID: '',
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addEntry(state, action) {
      if (state.editID) {
        const index = state.data.findIndex((x) => x.id === state.editID);
        state.data[index].description = action.payload.description;
        state.data[index].id = state.editID;
        state.editID = '';
      } else {
        state.data.push({
          timestamp: Date.now(),
          description: action.payload.description,
          id: nanoid(),
        });
      }
    },
    editEntry(state, action) {
      state.editID = action.payload.id;
    },
    removeEntry(state, action) {
      const updated = state.data.filter((entry) => {
        return entry.id !== action.payload;
      });
      state.data = updated;
    },
  },
});

export const { changeSearchTerm, addEntry, editEntry, removeEntry } =
  entriesSlice.actions;

export const entriesReducer = entriesSlice.reducer;
