import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './slices/notesSlice.js';
import chatReducer from './slices/chatSlice.js';
import uiReducer from './slices/uiSlice.js';

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    chat: chatReducer,
    ui: uiReducer,
  },
});
