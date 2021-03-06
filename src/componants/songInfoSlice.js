import { createSlice } from "@reduxjs/toolkit";

export const songInfoSlice = createSlice({
  name: "songInfo",
  initialState: {
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  },
  reducers: {
    setCurrentTime: (state, action) => {
      state.currentTime = action.payload;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    },
    setAnimationPercentage: (state, action) => {
      state.animationPercentage = action.payload;
    },
  },
});

// actions
export const {
  setCurrentTime,
  setDuration,
  setAnimationPercentage,
} = songInfoSlice.actions;

// reducer
export default songInfoSlice.reducer;
