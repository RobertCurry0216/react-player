import { createSlice } from "@reduxjs/toolkit";

export const songInfoSlice = createSlice({
  name: "songInfo",
  initialState: {
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
    isPlaying: false,
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
    startPlaying: (state) => {
      state.isPlaying = true;
    },
    stopPlaying: (state) => {
      state.isPlaying = false;
    },
  },
});

// actions
export const {
  setCurrentTime,
  setDuration,
  setAnimationPercentage,
  startPlaying,
  stopPlaying,
} = songInfoSlice.actions;

// reducer
export default songInfoSlice.reducer;
