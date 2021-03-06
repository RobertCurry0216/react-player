import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { skipTrack, selectCurrentSong } from "./componants/musicLibrarySlice";
import {
  setCurrentTime,
  setDuration,
  setAnimationPercentage,
} from "./componants/songInfoSlice";

import "./styles/app.scss";

import Player from "./componants/Player";
import Song from "./componants/Song";
import Library from "./componants/Library";
import Nav from "./componants/Nav";

function App() {
  //redux
  const currentSong = useSelector(selectCurrentSong);
  const dispatch = useDispatch();

  //states
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);

  //Ref
  const audioRef = useRef(null);

  //event handlers
  function timeUpdateHandler(e) {
    const duration = e.target.duration;
    const currentTime = e.target.currentTime;
    const percentage = Math.round((currentTime * 100) / duration);

    dispatch(setCurrentTime(currentTime));
    dispatch(setDuration(duration));
    dispatch(setAnimationPercentage(percentage));
  }

  //componant
  return (
    <div className={`app ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
      />
      {/* <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        audioRef={audioRef}
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      /> */}

      <audio
        ref={audioRef}
        src={currentSong.audio}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        onEnded={() => dispatch(skipTrack(1))}
      ></audio>
    </div>
  );
}

export default App;
