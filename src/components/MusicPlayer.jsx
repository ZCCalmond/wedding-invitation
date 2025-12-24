import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MUSIC_PLAYER_CONSTANTS } from '../constants/musicPlayer';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);
  const { musicSource, musicType, ariaLabelPlay, ariaLabelPause, playingIcon, pausedIcon } = MUSIC_PLAYER_CONSTANTS;

  useEffect(() => {
    // 尝试自动播放（需要用户交互）
    const handleFirstInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        if (audioRef.current) {
          audioRef.current.play()
            .then(() => setIsPlaying(true))
            .catch(() => {
              // 自动播放失败，用户需要手动点击
            });
        }
      }
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [hasInteracted]);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((error) => console.error('播放失败:', error));
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src={musicSource} type={musicType} />
      </audio>
      
      <motion.div
        className="music-player"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.button
          className={`music-button ${isPlaying ? 'playing' : ''}`}
          onClick={togglePlay}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={isPlaying ? ariaLabelPause : ariaLabelPlay}
        >
          <div className="music-icon">
            {isPlaying ? playingIcon : pausedIcon}
          </div>
        </motion.button>
      </motion.div>
    </>
  );
};

export default MusicPlayer;
