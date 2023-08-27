import React, { useRef, useState } from "react";
import "./VideoBanner.scss";
import Video from "../../assets/videos/hyperion.mp4";
function VideoBanner() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(!isMuted);
  };

  const stopVideo = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <div className="video-banner">
      <video ref={videoRef} autoPlay loop muted={isMuted}>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-controls">
        <button onClick={togglePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button onClick={toggleMute}>{isMuted ? "Unmute" : "Mute"}</button>
        <button onClick={stopVideo}>Stop</button>
      </div>
    </div>
  );
}

export default VideoBanner;
