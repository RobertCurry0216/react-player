import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { skipTrack, selectCurrentSong } from "./musicLibrarySlice";
import { setCurrentTime, startPlaying, stopPlaying } from "./songInfoSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
  faUndoAlt,
} from "@fortawesome/free-solid-svg-icons";

import { playAudio } from "../util";

function Player({ audioRef }) {
  //redux
  const currentSong = useSelector(selectCurrentSong);
  const songInfo = useSelector((state) => state.songInfo);
  const dispatch = useDispatch();

  //effects
  useEffect(() => {
    playAudio(songInfo.isPlaying, audioRef);
  }, [currentSong]);

  //event handlers
  function playSongHandler() {
    if (songInfo.isPlaying) {
      audioRef.current.pause();
      dispatch(stopPlaying());
    } else {
      audioRef.current.play();
      dispatch(startPlaying());
    }
  }

  function getTime(time) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }

  function dragHandler(e) {
    dispatch(setCurrentTime(e.target.value));
    audioRef.current.currentTime = e.target.value;
  }

  //styles
  const trackGradient = {
    background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
  };

  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  //componant
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div style={trackGradient} className="track">
          <input
            onChange={dragHandler}
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            type="range"
          />
          <div style={trackAnim} className="animate-track"></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => dispatch(skipTrack(-1))}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={songInfo.isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => dispatch(skipTrack(1))}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
}

export default Player;
