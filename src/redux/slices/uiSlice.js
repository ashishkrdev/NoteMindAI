import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeNav: 'Home',
  sidebarItems: ['My Notes', 'Upload', 'Chat', 'Summaries', 'Flashcards'],
  activeSidebarItem: 'My Notes',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setActiveNav: (state, action) => {
      state.activeNav = action.payload;
    },
    setActiveSidebarItem: (state, action) => {
      state.activeSidebarItem = action.payload;
    },
  },
});

export const { setActiveNav, setActiveSidebarItem } = uiSlice.actions;
export default uiSlice.reducer;
