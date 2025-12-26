# 快速开始：配置微信分享卡片

## 🚀 3 步快速配置

### 步骤 1️⃣：准备分享图片

**选择以下任一方式：**

#### 方式 A：使用在线工具制作（5分钟）

1. 打开 **Canva**：https://www.canva.com/create/wedding-invitations/
2. 选择一个喜欢的模板
3. 替换成你的信息：
   - 新郎新娘名字
   - 婚礼日期
   - （可选）上传你的照片
4. 下载图片：
   - 点击 "分享" → "下载"
   - 选择 JPG 格式
   - 自定义尺寸：**1200 x 630 像素**
5. 重命名文件为：`wedding-cover.jpg`

#### 方式 B：使用婚纱照（3分钟）

如果你有婚纱照：
1. 使用任意图片编辑器（手机或电脑）
2. 裁剪为 1200 x 630 像素（横图）
3. 重命名为：`wedding-cover.jpg`

#### 方式 C：临时使用占位图（1分钟）

如果暂时没有图片，可以先用占位图：
```bash
# 下载一个临时占位图
curl -o public/wedding-cover.jpg "https://via.placeholder.com/1200x630/ffeef8/d4a574?text=Wedding+Invitation"
```

### 步骤 2️⃣：放置图片到项目

```bash
# 将图片复制到 public 文件夹
# 确保文件名为：wedding-cover.jpg
```

文件结构应该是：
```
wedding-invitation/
├── public/
│   ├── wedding-cover.jpg  ← 你的分享图片
│   └── vite.svg
├── src/
└── index.html
```

### 步骤 3️⃣：修改配置信息

#### 编辑 `index.html`（已经帮你配置好了）

只需要修改以下几处：

```html
<!-- 第 10 行：修改页面标题 -->
<title>你的名字 & TA的名字的婚礼邀请函</title>

<!-- 第 13 行：修改描述 -->
<meta name="description" content="我们诚挚邀请您参加我们的婚礼，YYYY年MM月DD日，期待您的到来！" />

<!-- 第 18-19 行：修改 URL（换成你的 GitHub 用户名） -->
<meta property="og:url" content="https://你的GitHub用户名.github.io/wedding-invitation/" />
<meta property="og:title" content="你的名字 & TA的名字的婚礼邀请函" />

<!-- 第 21 行：修改图片 URL -->
<meta property="og:image" content="https://你的GitHub用户名.github.io/wedding-invitation/wedding-cover.jpg" />
```

#### 编辑 `src/constants/share.js`

```javascript
export const SHARE_CONFIG = {
  // 1. 修改标题
  title: '你的名字 & TA的名字的婚礼邀请函',
  
  // 2. 修改描述
  description: '我们诚挚邀请您参加我们的婚礼，YYYY年MM月DD日，期待您的到来！💕',
  
  // 3. 修改 URL（换成你的 GitHub 用户名）
  url: 'https://你的GitHub用户名.github.io/wedding-invitation/',
  
  // 4. 修改图片 URL
  image: 'https://你的GitHub用户名.github.io/wedding-invitation/wedding-cover.jpg',
  
  // 微信专用配置
  wechat: {
    title: '你的名字 & TA的名字 邀请您参加我们的婚礼',
    desc: 'YYYY.MM.DD 期待与您相见 💕',
    imgUrl: 'https://你的GitHub用户名.github.io/wedding-invitation/wedding-cover.jpg',
  },
};
```

## ✅ 完成！

现在执行：

```bash
# 1. 构建项目
npm run build

# 2. 提交到 Git
git add .
git commit -m "添加微信分享配置"
git push

# 3. 部署到 GitHub Pages
npm run deploy  # 或根据你的部署方式
```

## 🧪 测试分享效果

1. 等待 GitHub Pages 部署完成（通常 1-5 分钟）
2. 访问你的网站：`https://你的用户名.github.io/wedding-invitation/`
3. 复制链接
4. 发送到微信（可以先发给文件传输助手测试）
5. 查看分享卡片效果

## 📝 示例

假设你的 GitHub 用户名是 `zccalmond`：

### index.html 示例：
```html
<title>张三 & 李四的婚礼邀请函</title>
<meta name="description" content="我们诚挚邀请您参加我们的婚礼，2025年1月1日，期待您的到来！" />
<meta property="og:url" content="https://zccalmond.github.io/wedding-invitation/" />
<meta property="og:image" content="https://zccalmond.github.io/wedding-invitation/wedding-cover.jpg" />
```

### share.js 示例：
```javascript
export const SHARE_CONFIG = {
  title: '张三 & 李四的婚礼邀请函',
  description: '我们诚挚邀请您参加我们的婚礼，2025年1月1日，期待您的到来！💕',
  url: 'https://zccalmond.github.io/wedding-invitation/',
  image: 'https://zccalmond.github.io/wedding-invitation/wedding-cover.jpg',
  wechat: {
    title: '张三 & 李四 邀请您参加我们的婚礼',
    desc: '2025.01.01 期待与您相见 💕',
    imgUrl: 'https://zccalmond.github.io/wedding-invitation/wedding-cover.jpg',
  },
};
```

## ❓ 常见问题

### Q: 分享卡片没有显示图片？
A: 
1. 确认图片文件在 `public` 目录
2. 确认图片 URL 是完整的 HTTPS 地址
3. 尝试直接在浏览器访问图片 URL
4. 等待微信缓存更新（最多 24 小时）

### Q: 修改后没有生效？
A: 
1. 清空浏览器缓存
2. 微信有缓存，等待或改变图片文件名
3. 确认已经重新部署

### Q: 图片太大加载慢？
A: 使用 https://tinypng.com 压缩图片

### Q: 想要更高级的分享控制？
A: 告诉我，我可以帮你集成微信 JS-SDK！

---

需要帮助随时联系！💕
