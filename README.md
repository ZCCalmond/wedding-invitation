# 婚礼电子请帖 H5

一个优雅、现代的婚礼电子请帖 H5 应用，使用 React + Vite 构建。

![Wedding Invitation Preview](https://github.com/user-attachments/assets/cff10c3f-4ef7-47c1-ba14-63715bc7a26d)

## ✨ 特性

- 🎨 优雅的婚礼主题设计（米色、粉色、金色系）
- 📱 移动端优先，响应式布局
- 🎭 流畅的动画效果（基于 Framer Motion）
- 📸 照片轮播展示（基于 Swiper）
- 🎵 背景音乐播放器（悬浮控制）
- 📍 地图导航（微信地图、高德地图）
- 🎬 视频播放支持
- 💒 完整的婚礼信息展示

## 🏗️ 项目结构

```
src/
├── components/
│   ├── Cover.jsx & Cover.css              # 封面页
│   ├── PhotoGallery.jsx & PhotoGallery.css   # 照片展示
│   ├── VideoPlayer.jsx & VideoPlayer.css     # 视频播放
│   ├── WeddingInfo.jsx & WeddingInfo.css     # 婚礼信息
│   ├── MapNavigation.jsx & MapNavigation.css # 地图导航
│   ├── MusicPlayer.jsx & MusicPlayer.css     # 音乐播放器
│   └── Ending.jsx & Ending.css               # 结尾页
├── assets/
│   ├── images/    # 图片素材目录
│   ├── videos/    # 视频素材目录
│   └── music/     # 音乐素材目录
├── App.jsx & App.css
├── index.css
└── main.jsx
```

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 `http://localhost:5173` 查看应用。

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 📦 技术栈

- **React 19** - UI 框架
- **Vite** - 构建工具
- **Framer Motion 11** - 动画库
- **Swiper 11** - 轮播组件
- **CSS3** - 样式

## 🎨 自定义内容

### 1. 修改新人信息

编辑 `src/components/Cover.jsx`:

```jsx
<span className="bride-name">新娘姓名</span>
<span className="groom-name">新郎姓名</span>
<p className="cover-date">2024.12.24</p>
```

### 2. 添加照片

1. 将照片放入 `src/assets/images/` 目录
2. 编辑 `src/components/PhotoGallery.jsx` 中的 `photos` 数组:

```jsx
const photos = [
  { id: 1, url: '/assets/images/photo-1.jpg', caption: '我们的第一张合照' },
  { id: 2, url: '/assets/images/photo-2.jpg', caption: '美好的时光' },
  // 添加更多照片...
];
```

### 3. 添加背景音乐

1. 将音乐文件（MP3 格式）放入 `src/assets/music/` 目录
2. 编辑 `src/components/MusicPlayer.jsx` 中的音频源路径:

```jsx
<source src="/assets/music/wedding-music.mp3" type="audio/mpeg" />
```

### 4. 添加视频

1. 将视频文件（MP4 格式）放入 `src/assets/videos/` 目录
2. 编辑 `src/components/VideoPlayer.jsx` 中的视频源路径:

```jsx
<source src="/assets/videos/wedding-video.mp4" type="video/mp4" />
```

### 5. 修改婚礼信息

编辑 `src/components/WeddingInfo.jsx`:

```jsx
<p className="info-detail">2024年12月24日</p>
<p className="info-detail">XX大酒店</p>
<p className="info-detail">XX市XX区XX路123号</p>
```

### 6. 更新地图导航

编辑 `src/components/MapNavigation.jsx` 中的位置信息:

```jsx
const location = {
  name: 'XX大酒店',
  address: 'XX市XX区XX路123号',
  lat: 39.9042, // 纬度
  lng: 116.4074, // 经度
};
```

## 🎯 核心功能

### Cover（封面页）
- 新人姓名展示
- 婚礼日期
- 淡入动画
- 滚动提示

### PhotoGallery（照片展示）
- 自动轮播
- 淡入淡出效果
- 分页指示器
- 支持无限循环

### VideoPlayer（视频播放）
- 自定义封面
- 播放控制
- iOS 内联播放支持

### WeddingInfo（婚礼信息）
- 时间、地点展示
- 婚礼流程时间线
- 图标装饰
- 卡片悬停效果

### MapNavigation（地图导航）
- 一键导航
- 支持微信地图
- 支持高德地图
- 地点详细信息

### MusicPlayer（音乐播放器）
- 悬浮控制按钮
- 旋转动画
- 自动播放（需用户交互）
- 播放/暂停切换

### Ending（结尾页）
- 感谢语展示
- 心形动画
- 分享提示
- 新人签名

## 📱 移动端适配

- 响应式设计，适配各种屏幕尺寸
- 触摸友好的交互体验
- 优化的性能表现
- iOS 和 Android 全面支持

## 🎨 设计特点

- **配色**: 柔和的婚礼主题色（米色、粉色、金色）
- **字体**: 优雅的 Georgia 衬线字体
- **动画**: 流畅的进入和滚动动画
- **布局**: 清晰的视觉层次

## 📝 注意事项

1. 音乐自动播放需要用户交互触发（浏览器限制）
2. 视频需要使用 `playsInline` 属性适配 iOS
3. 建议使用 MP3 格式的音乐（128-192 kbps）
4. 建议使用 MP4 格式的视频
5. 图片建议压缩后使用，提高加载速度

## 🔧 开发

### 代码规范

项目使用 ESLint 进行代码检查：

```bash
npm run lint
```

### 构建优化

- 自动代码分割
- CSS 压缩
- 资源优化
- Gzip 压缩

## 📄 许可证

MIT

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**祝你们新婚快乐！💕**

