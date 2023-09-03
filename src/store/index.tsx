import { configureStore } from '@reduxjs/toolkit';
import {
  entriesReducer,
  addEntry,
  editEntry,
  removeEntry,
  changeSearchTerm,
} from './slices/entriesSlice';
import { formReducer, changeDescription } from './slices/formSlice';

const store = configureStore({
  reducer: {
    entries: entriesReducer,
    form: formReducer,
  },
});

export { store, changeDescription, addEntry, editEntry, removeEntry, changeSearchTerm };
