import {createSlice} from '@reduxjs/toolkit';

const urlSlice = createSlice ({
  name: 'url',

  initialState: {
    links: [],
    isLoading: false,
    isSubmitting: false,
  },

  reducers: {
    setLinks: (state, action) => {
      state.links = action.payload;
    },

    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    setSubmitting: (state, action) => {
      state.isSubmitting = action.payload;
    },

    addLink: (state, action) => {
      state.links.push (action.payload);
    },
  },
});

export const {setLinks, setLoading, setSubmitting, addLink} = urlSlice.actions;

export default urlSlice.reducer;
