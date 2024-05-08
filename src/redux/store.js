import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({

// this is an object that contains all reducers
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

