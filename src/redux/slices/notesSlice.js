import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  subject: 'Physics',
  noteCount: 12,
  searchPlaceholder: 'Search notes, chapters, formulas, or questions...',
  stats: [
    { label: 'Uploaded notes', value: '48' },
    { label: 'Ready for chat', value: '36' },
    { label: 'Exam summaries', value: '14' },
  ],
  notes: [
    {
      id: 1,
      tag: 'Handwritten',
      title: 'Electrostatics unit notes',
      summary: 'Cleaned text, formulas extracted, important questions detected for revision.',
    },
    {
      id: 2,
      tag: 'PDF',
      title: 'Organic chemistry reactions',
      summary: 'Chapter summary prepared with short answers, mechanisms, and test prompts.',
    },
  ],
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
  },
});

export const { addNote } = notesSlice.actions;
export default notesSlice.reducer;
