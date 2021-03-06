import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { skipTrack, selectCurrentSong } from "./musicLibrarySlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
  faUndoAlt,
} from "@fortawesome/free-solid-svg-icons";

import { playAudio } from "../util";

function Player({ isPlaying, setIsPlaying, audioRef, songInfo, setSongInfo }) {
  //redux
  const currentSong = useSelector(selectCurrentSong);
  const dispatch = useDispatch();

  //effects
  useEffect(() => {
    playAudio(isPlaying, audioRef);
  }, [currentSong]);

  //event handlers
  function playSongHandler() {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  }

  function getTime(time) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }

  function dragHandler(e) {
    setSongInfo({ ...songInfo, currentTime: e.target.value });
    audioRef.current.currentTime = e.target.value;
  }

  //styles
  const trackGradient = {
    background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
  };

  const trackAnim = {
    transform: `translateX(${songInfo.percentage}%)`,
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
          icon={isPlaying ? faPause : faPlay}
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
