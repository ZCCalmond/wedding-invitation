// MusicPlayer 组件的文案常量
// 需要在文件顶部导入音乐文件
import musicFile from '../assets/music/Perfect-EdSheeran.mp3';

export const MUSIC_PLAYER_CONSTANTS = {
  // 使用 src/assets/music/ 目录下的本地音乐文件
  // Vite 会自动处理资源导入和打包
  musicSource: musicFile,
  
  musicType: 'audio/mpeg',
  ariaLabelPlay: '播放音乐',
  ariaLabelPause: '暂停音乐',
  playingIcon: '🎵',
  pausedIcon: '🔇',
  
  // 音乐信息
  musicInfo: {
    title: 'Perfect',
    artist: 'Ed Sheeran',
  },
};
