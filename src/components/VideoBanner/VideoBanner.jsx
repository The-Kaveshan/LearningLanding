import React, { useRef, useState } from 'react';
import './VideoBanner.scss';

function VideoBanner() {
    const [isPlaying, setIsPlaying] = useState(false);
    const ytPlayerRef = useRef(null);

    const toggleVideo = () => {
        if (isPlaying) {
            ytPlayerRef.current.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        } else {
            ytPlayerRef.current.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        }
        setIsPlaying(!isPlaying);
    }

    return (
        <div className="video-banner">
            <iframe 
                ref={ytPlayerRef}
                src="https://www.youtube.com/embed/WAvg3wubkDo?controls=0&showinfo=0&rel=0&autoplay=1&mute=1&enablejsapi=1" 
                frameborder="0" 
                allow="autoplay; encrypted-media" 
                allowfullscreen 
                title="Video"
            ></iframe>
            <div className="banner-controls">
                <button onClick={toggleVideo}>{isPlaying ? 'Stop Video' : 'Start Video'}</button>
                <button>Begin Trial</button>
            </div>
        </div>
    );
}

export default VideoBanner;
