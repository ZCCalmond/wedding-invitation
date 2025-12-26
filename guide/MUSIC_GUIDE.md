# 音乐使用指南

## 如何添加 Perfect - Ed Sheeran 到你的婚礼邀请函

### ⚠️ 版权说明

在使用音乐前，请确保你有合法的使用权。对于私人婚礼邀请函，通常属于个人使用范围。

---

## 方法 1：下载并本地托管（推荐）✅

### 步骤：

1. **合法获取音乐文件**
   - 从你购买的音乐平台（如 iTunes、Amazon Music）下载
   - 或使用你已有的 MP3 文件

2. **重命名文件**
   ```
   将文件重命名为：perfect-ed-sheeran.mp3
   ```

3. **放置到项目目录**
   ```
   将文件放到：public/assets/music/perfect-ed-sheeran.mp3
   ```

4. **完成！** 代码已经配置好，直接可以使用

---

## 方法 2：使用在线音频链接

如果你有可用的在线直链（不推荐网易云，有防盗链限制）：

### 修改配置文件：

```javascript
// src/constants/musicPlayer.js
export const MUSIC_PLAYER_CONSTANTS = {
  // 使用外部链接
  musicSource: 'https://your-music-hosting.com/perfect.mp3',
  musicType: 'audio/mpeg',
  // ... 其他配置
};
```

---

## 方法 3：使用免费音乐替代

如果你想避免版权问题，可以使用免费音乐：

### 免费音乐资源网站：

1. **Bensound** (https://www.bensound.com)
   - 免费，需要署名
   - 有很多浪漫的婚礼音乐

2. **Free Music Archive** (https://freemusicarchive.org)
   - 完全免费
   - 多种授权协议

3. **YouTube Audio Library** (https://studio.youtube.com/channel/UC.../music)
   - 谷歌提供的免费音乐库
   - 无需署名

### 使用步骤：
1. 从上述网站下载喜欢的音乐
2. 重命名为 `wedding-music.mp3`
3. 放到 `public/assets/music/` 目录
4. 在 `src/constants/musicPlayer.js` 中更新 `musicSource`

---

## 方法 4：使用 Spotify/SoundCloud 嵌入（进阶）

如果你想用流媒体服务，可以使用它们的嵌入式播放器：

### Spotify Web Playback SDK 示例：

```bash
# 需要申请 Spotify 开发者账号
# 获取 Client ID
# 然后使用 Spotify Web Playback SDK
```

### SoundCloud Widget API 示例：

```html
<!-- 使用 SoundCloud 的嵌入播放器 -->
<iframe 
  width="100%" 
  height="166" 
  scrolling="no" 
  frameborder="no" 
  src="https://w.soundcloud.com/player/?url=...">
</iframe>
```

---

## 关于网易云音乐

### ❌ 为什么不能直接使用网易云 API？

1. **防盗链机制**：音频链接有 Referer 验证
2. **跨域限制**：CORS 策略阻止网页调用
3. **链接时效性**：即使获取到链接也会定期失效
4. **需要认证**：官方 API 需要申请密钥

### 替代方案：

如果你真的想用网易云的歌曲，建议：
1. 开通网易云音乐会员
2. 下载歌曲到本地（会员权益）
3. 转换为 MP3 格式（如需要）
4. 放到项目的 `public/assets/music/` 目录

---

## 项目目录结构

```
wedding-invitation/
├── public/
│   └── assets/
│       └── music/
│           ├── perfect-ed-sheeran.mp3  ← 把音乐文件放这里
│           └── .gitkeep
└── src/
    └── constants/
        └── musicPlayer.js  ← 配置音乐路径
```

---

## 常见问题

### Q: 音乐文件太大怎么办？
A: 可以使用音频压缩工具，推荐：
- 在线工具：https://www.youcompress.com/mp3/
- 保持比特率在 128kbps 左右即可

### Q: 支持其他音频格式吗？
A: 支持，但 MP3 兼容性最好。其他格式需要修改 `musicType`：
```javascript
// AAC 格式
musicType: 'audio/aac'

// OGG 格式
musicType: 'audio/ogg'

// WAV 格式
musicType: 'audio/wav'
```

### Q: 如何设置多首歌曲播放列表？
A: 需要修改 MusicPlayer 组件添加播放列表功能，如果需要我可以帮你实现。

---

## 推荐配置

对于婚礼邀请函，我推荐：

```javascript
// src/constants/musicPlayer.js
export const MUSIC_PLAYER_CONSTANTS = {
  musicSource: '/assets/music/perfect-ed-sheeran.mp3',
  musicType: 'audio/mpeg',
  ariaLabelPlay: '播放 Perfect - Ed Sheeran',
  ariaLabelPause: '暂停音乐',
  playingIcon: '🎵',
  pausedIcon: '🔇',
  musicInfo: {
    title: 'Perfect',
    artist: 'Ed Sheeran',
  },
};
```

---

## 需要帮助？

如果你需要：
- 实现播放列表功能
- 添加音乐控制条（进度条、音量控制）
- 集成第三方音乐服务

随时告诉我！🎵
