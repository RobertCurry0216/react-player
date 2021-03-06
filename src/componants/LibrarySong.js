import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTrack } from "./musicLibrarySlice";

import { playAudio } from "../util";

function LibrarySong({ songIdx, audioRef }) {
  //redux
  const dispatch = useDispatch();
  const song = useSelector((state) => state.musicLibrary.songs[songIdx]);
  const isPlaying = useSelector((state) => state.songInfo.isPlaying);
  const isActive = useSelector(
    (state) => state.musicLibrary.currentTrack === songIdx
  );

  function selectSongHandler(e) {
    dispatch(setTrack(songIdx));
    playAudio(isPlaying, audioRef);
  }

  return (
    <div
      onClick={selectSongHandler}
      className={`library-song ${isActive ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;
