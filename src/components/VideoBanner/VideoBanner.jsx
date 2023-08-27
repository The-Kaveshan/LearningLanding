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
      <video 
        ref={videoRef} 
        autoPlay 
        loop 
        muted={isMuted}
        aria-describedby="videoDescription"
      >
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p id="videoDescription" className="visually-hidden">
        Description of video content for screen readers.
      </p>
      <div className="video-controls">
        <button 
          onClick={togglePlayPause}
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button 
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? "Unmute" : "Mute"}
        </button>
        <button 
          onClick={stopVideo}
          aria-label="Stop video"
        >
          Stop
        </button>
      </div>
    </div>
  );
}

export default VideoBanner;
