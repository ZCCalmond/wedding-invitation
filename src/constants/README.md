# 常量文件说明

本文件夹包含了所有组件的文案常量，便于后续维护和修改。

## 文件结构

```
constants/
├── index.js           # 统一导出所有常量
├── cover.js           # Cover 组件的文案
├── weddingInfo.js     # WeddingInfo 组件的文案
├── photoGallery.js    # PhotoGallery 组件的文案
├── videoPlayer.js     # VideoPlayer 组件的文案
├── mapNavigation.js   # MapNavigation 组件的文案
├── ending.js          # Ending 组件的文案
└── musicPlayer.js     # MusicPlayer 组件的文案
```

## 使用方法

### 方法一：从对应文件导入（推荐）

```javascript
import { COVER_CONSTANTS } from '../constants/cover';
```

### 方法二：从 index.js 统一导入

```javascript
import { COVER_CONSTANTS, WEDDING_INFO_CONSTANTS } from '../constants';
```

## 修改文案

只需要修改对应的常量文件即可，无需修改组件代码。

例如，修改新郎新娘姓名：

```javascript
// src/constants/cover.js
export const COVER_CONSTANTS = {
  brideName: '李小美',  // 修改新娘姓名
  groomName: '王大帅',  // 修改新郎姓名
  weddingDate: '2024.12.24',
  subtitle: '我们结婚了',
  scrollHint: '向下滑动',
};
```

## 各文件说明

### cover.js
包含首页封面的所有文案，包括新郎新娘姓名、婚期、标题等。

### weddingInfo.js
包含婚礼信息的所有文案，包括时间、地点、流程等详细信息。

### photoGallery.js
包含照片画廊的标题和照片数据（URL和说明文字）。

### videoPlayer.js
包含视频播放器的标题、视频路径、占位图等。

### mapNavigation.js
包含地图导航的所有信息，包括地点名称、地址、坐标、导航按钮文案等。

### ending.js
包含结尾页的所有文案，包括感谢语、签名、分享提示等。

### musicPlayer.js
包含音乐播放器的音乐文件路径、图标、无障碍标签等。

## 注意事项

1. 修改地点坐标时，请确保 `lat`（纬度）和 `lng`（经度）的值正确
2. 修改照片或视频路径时，请确保文件存在于对应的 `public/assets` 目录中
3. 如需添加更多照片，只需在 `photoGallery.js` 的 `photos` 数组中添加新对象即可
4. 如需修改婚礼流程，只需在 `weddingInfo.js` 的 `timelineCard.items` 数组中修改或添加项目
