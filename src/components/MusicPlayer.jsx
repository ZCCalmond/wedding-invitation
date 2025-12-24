import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MUSIC_PLAYER_CONSTANTS } from '../constants/musicPlayer';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);
  const autoPlayAttemptedRef = useRef(false);
  const { musicSource, musicType, ariaLabelPlay, ariaLabelPause, playingIcon, pausedIcon } = MUSIC_PLAYER_CONSTANTS;

  // 尝试自动播放
  useEffect(() => {
    if (!autoPlayAttemptedRef.current && audioRef.current) {
      autoPlayAttemptedRef.current = true;
      
      // 延迟一下再播放，增加成功率
      const timer = setTimeout(() => {
        audioRef.current?.play()
          .then(() => {
            setIsPlaying(true);
            setHasInteracted(true);
            console.log('✓ 音乐自动播放成功');
          })
          .catch(() => {
            console.log('⚠ 自动播放被浏览器阻止，等待用户交互...');
            // 自动播放失败，等待用户交互
          });
      }, 500);

      return () => clearTimeout(timer);
    }
  }, []);

  // 用户第一次交互时播放
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted && !isPlaying && audioRef.current) {
        setHasInteracted(true);
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            console.log('✓ 用户交互后音乐播放成功');
          })
          .catch((error) => {
            console.error('播放失败:', error);
          });
      }
    };

    document.addEventListener('click', handleFirstInteraction, { once: true });
    document.addEventListener('touchstart', handleFirstInteraction, { once: true });
    document.addEventListener('scroll', handleFirstInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('scroll', handleFirstInteraction);
    };
  }, [hasInteracted, isPlaying]);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setHasInteracted(true);
          })
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
