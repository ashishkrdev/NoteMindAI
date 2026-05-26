import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'Ready',
  messages: [
    {
      id: 1,
      role: 'user',
      text: 'Explain Gauss law in simple words for exam revision.',
    },
    {
      id: 2,
      role: 'ai',
      text: 'Gauss law says that electric flux through a closed surface depends only on the total charge inside it. For exams, remember statement, formula, and one spherical symmetry example.',
    },
  ],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { addMessage, setStatus } = chatSlice.actions;
export default chatSlice.reducer;
