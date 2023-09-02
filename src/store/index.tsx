import { configureStore } from '@reduxjs/toolkit';
import {
  entriesReducer,
  addEntry,
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

export { store, changeDescription, addEntry, removeEntry, changeSearchTerm };
