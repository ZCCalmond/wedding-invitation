import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { VIDEO_PLAYER_CONSTANTS } from '../constants/videoPlayer';
import './VideoPlayer.css';

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const { sectionTitle, videoPoster, videoSource, videoType, unsupportedMessage } = VIDEO_PLAYER_CONSTANTS;

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <motion.section
      className="video-player"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="section-title"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        {sectionTitle}
      </motion.h2>
      
      <div className="video-container">
        <video
          ref={videoRef}
          className="video-element"
          poster={videoPoster}
          controls
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src={videoSource} type={videoType} />
          {unsupportedMessage}
        </video>
        
        {!isPlaying && (
          <motion.div
            className="play-overlay"
            initial={{ opacity: 1 }}
            animate={{ opacity: isPlaying ? 0 : 1 }}
            onClick={handlePlay}
          >
            <div className="play-button">
              <svg width="80" height="80" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="38" fill="rgba(212, 165, 116, 0.8)" />
                <polygon points="32,25 32,55 55,40" fill="white" />
              </svg>
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default VideoPlayer;
