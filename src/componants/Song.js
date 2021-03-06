import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentSong } from "./musicLibrarySlice";

function Song() {
  const currentSong = useSelector(selectCurrentSong);
  return (
    <div className="song-container">
      <img src={currentSong.cover} alt={currentSong.name}></img>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
}

export default Song;
