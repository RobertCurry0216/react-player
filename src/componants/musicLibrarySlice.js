import { createSlice } from "@reduxjs/toolkit";
import chillHop from "../data";

// reducers
export const musicLibrarySlice = createSlice({
  name: "musicLibrary",
  initialState: {
    songs: chillHop(),
    currentTrack: 0,
  },
  reducers: {
    skipTrack: (state, action) => {
      const idx =
        (state.currentTrack + action.payload + state.songs.length) %
        state.songs.length;
      state.currentTrack = idx;
    },
    setTrack: (state, action) => {
      state.currentTrack = action.payload;
    },
  },
});

// actions
export const { skipTrack, setTrack } = musicLibrarySlice.actions;

// selectors
export const selectCurrentSong = (state) =>
  state.musicLibrary.songs[state.musicLibrary.currentTrack];

export const selectSongs = (state) => state.musicLibrary.songs;

// export reducer
export default musicLibrarySlice.reducer;
