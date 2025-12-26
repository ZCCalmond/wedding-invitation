# 微信分享卡片配置指南

## 📱 微信分享卡片显示效果

当你把链接分享到微信时，会显示：
- **标题**：新郎 & 新娘的婚礼邀请函
- **描述**：我们诚挚邀请您参加我们的婚礼，2024年12月24日...
- **缩略图**：一张婚礼相关的图片

## 🎯 配置步骤

### 第 1 步：准备分享图片

你需要准备两张图片：

#### 1. 分享大图 (wedding-cover.jpg)
- **用途**：社交媒体卡片
- **推荐尺寸**：1200 x 630 像素
- **格式**：JPG 或 PNG
- **内容建议**：
  - 新郎新娘照片
  - 婚礼日期
  - 温馨浪漫的背景

#### 2. 缩略图 (wedding-thumb.jpg)（可选）
- **用途**：微信聊天列表缩略图
- **推荐尺寸**：300 x 300 像素（正方形）
- **格式**：JPG 或 PNG

### 第 2 步：制作分享图片

#### 方案 1：使用在线工具（推荐）

**Canva**（免费）
1. 访问：https://www.canva.com
2. 搜索 "婚礼邀请函" 或 "Wedding Invitation"
3. 选择模板并自定义
4. 导出尺寸：
   - 自定义尺寸：1200 x 630 像素
   - 或 300 x 300 像素（缩略图）

**稿定设计**（中文）
1. 访问：https://www.gaoding.com
2. 搜索 "婚礼海报"
3. 选择模板编辑
4. 下载图片

#### 方案 2：使用你的婚纱照

如果你有婚纱照：
1. 使用图片编辑软件（如 Photoshop、美图秀秀）
2. 调整尺寸为 1200 x 630 像素
3. 可以添加文字：
   - 新郎新娘名字
   - 婚礼日期
   - "诚邀您参加我们的婚礼"

### 第 3 步：上传图片到项目

将图片放到项目的 `public` 目录：

```
wedding-invitation/
├── public/
│   ├── wedding-cover.jpg      ← 分享大图
│   ├── wedding-thumb.jpg      ← 缩略图（可选）
│   └── ...
```

**操作步骤：**
1. 将图片重命名为 `wedding-cover.jpg`
2. 复制到 `public` 文件夹
3. （可选）准备一张 300x300 的正方形缩略图命名为 `wedding-thumb.jpg`

### 第 4 步：修改配置文件

#### 修改 index.html

已经帮你配置好了，但需要确认以下内容：

```html
<!-- 修改标题 -->
<title>你的新郎姓名 & 你的新娘姓名的婚礼邀请函</title>

<!-- 修改描述 -->
<meta name="description" content="我们诚挚邀请您参加我们的婚礼，YYYY年MM月DD日，期待您的到来！" />

<!-- 修改图片 URL -->
<meta property="og:image" content="https://你的用户名.github.io/wedding-invitation/wedding-cover.jpg" />
```

#### 修改 src/constants/share.js

```javascript
export const SHARE_CONFIG = {
  title: '张三 & 李四的婚礼邀请函',  // 改成你的名字
  description: '我们诚挚邀请您参加我们的婚礼，2025年1月1日，期待您的到来！💕',
  url: 'https://你的用户名.github.io/wedding-invitation/',  // 改成你的 URL
  image: 'https://你的用户名.github.io/wedding-invitation/wedding-cover.jpg',
  
  wechat: {
    title: '张三 & 李四 邀请您参加我们的婚礼',
    desc: '2025.01.01 期待与您相见 💕',
    imgUrl: 'https://你的用户名.github.io/wedding-invitation/wedding-thumb.jpg',
  },
};
```

### 第 5 步：部署到 GitHub Pages

```bash
# 构建项目
npm run build

# 部署（如果你使用 gh-pages）
npm run deploy
```

### 第 6 步：测试分享效果

#### 方法 1：直接分享测试
1. 部署后复制你的 GitHub Pages 链接
2. 发送到微信（可以发给自己的文件传输助手）
3. 点击查看效果

#### 方法 2：使用微信开发者工具
1. 访问：https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html
2. 使用调试工具测试

## 🔧 高级配置：使用微信 JS-SDK

如果你想要更精确的控制微信分享（朋友圈、聊天等不同场景），可以使用微信 JS-SDK。

### 创建微信分享组件

我可以帮你创建一个组件来实现：
- 自定义分享标题
- 自定义分享描述
- 自定义分享图片
- 分享成功回调

需要的话告诉我，我会创建完整的实现代码。

## ⚠️ 重要注意事项

### 1. 图片必须是完整的 HTTPS URL
```
✅ 正确：https://zccalmond.github.io/wedding-invitation/wedding-cover.jpg
❌ 错误：/wedding-cover.jpg
❌ 错误：./wedding-cover.jpg
```

### 2. 图片必须可以公开访问
- 确保图片在 `public` 目录下
- 部署后可以通过浏览器直接访问图片 URL

### 3. 微信缓存问题
如果修改后分享卡片没有更新：
- 等待 24 小时（微信有缓存）
- 或使用微信的分享调试工具清除缓存
- 或修改图片文件名（如 `wedding-cover-v2.jpg`）

### 4. 图片大小限制
- 不要超过 300KB
- 建议使用压缩工具优化图片

## 🎨 推荐的图片内容

### 选项 1：婚纱照 + 文字
```
┌─────────────────────────────┐
│                             │
│   [婚纱照背景]              │
│                             │
│   张三 ❤️ 李四              │
│   诚邀您参加我们的婚礼       │
│   2025.01.01                │
│                             │
└─────────────────────────────┘
```

### 选项 2：简约设计
```
┌─────────────────────────────┐
│                             │
│   💍                        │
│   Wedding Invitation        │
│                             │
│   张三 & 李四               │
│   2025年1月1日              │
│                             │
└─────────────────────────────┘
```

### 选项 3：浪漫元素
```
┌─────────────────────────────┐
│   🌸🌸🌸                    │
│                             │
│   我们结婚啦！              │
│   张三 & 李四               │
│                             │
│   期待您的见证              │
│   2025.01.01                │
│   🌸🌸🌸                    │
└─────────────────────────────┘
```

## 📋 检查清单

部署前确认：

- [ ] 准备了分享图片（1200x630）
- [ ] 图片已放入 `public` 目录
- [ ] 修改了 `index.html` 中的标题和描述
- [ ] 修改了 `src/constants/share.js`
- [ ] 更新了所有 URL 为你的实际 GitHub Pages 地址
- [ ] 测试图片 URL 可以直接访问
- [ ] 部署到 GitHub Pages
- [ ] 在微信中测试分享效果

## 🛠️ 图片压缩工具

如果图片太大，使用这些工具压缩：

- **TinyPNG**：https://tinypng.com （推荐）
- **Squoosh**：https://squoosh.app
- **Compressor.io**：https://compressor.io

## 需要帮助？

如果你需要：
- 创建微信 JS-SDK 集成
- 制作分享图片
- 调试分享问题
- 自定义更多分享选项

随时告诉我！💕
