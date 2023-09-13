import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import {
  entriesReducer,
  addEntry,
  editEntry,
  removeEntry,
  changeSearchTerm,
} from './slices/entriesSlice';
import { formReducer, changeDescription } from './slices/formSlice';
import { journalApi } from './apis/journalApi';

const store = configureStore({
  reducer: {
    entries: entriesReducer,
    form: formReducer,
    [journalApi.reducerPath]: journalApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(journalApi.middleware);
  },
});

setupListeners(store.dispatch);

export { store, changeDescription, addEntry, editEntry, removeEntry, changeSearchTerm };
export { useFetchEntriesQuery } from './apis/journalApi';
