import {
  faPause,
  faPlay,
  faStepBackward,
  faStepForward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import TrackList from "./TrackList";
import useMusicPlayer from "./useMusicPlayer";

export default function PlayerControls() {
  const {
    isPlaying,
    currentTrackName,
    togglePlay,
    playPreviousTrack,
    playNextTrack,
  } = useMusicPlayer();
  return (
    <div className="controls audio-player">
      <div className="current-track">{currentTrackName}</div>

      <div className="prev-button">
        <button onClick={playPreviousTrack}>
          <FontAwesomeIcon icon={faStepBackward} />
        </button>
      </div>

      <div className="pause-play-btn">
        <button>
          {isPlaying ? (
            <FontAwesomeIcon icon={faPause} />
          ) : (
            <FontAwesomeIcon icon={faPlay} />
          )}
        </button>
      </div>

      <div className="next-button">
        <button onClick={playNextTrack}>
          <FontAwesomeIcon icon={faStepForward} />
        </button>
      </div>
    </div>
  );
}
