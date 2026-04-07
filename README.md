# 个人学术主页

## 项目介绍
这是一个基于 Astro 构建的个人学术主页，支持中英文国际化，包含个人简介、教育背景、研究兴趣、发表论文、相关链接和个人分享等功能。页面采用响应式设计，在不同设备上都能良好显示。

## 技术栈
- **前端框架**: [Astro](https://astro.build/) - 静态站点生成器
- **CSS 框架**: [Tailwind CSS](https://tailwindcss.com/) - 实用优先的 CSS 框架
- **图标**: 内置 SVG 图标和自定义图片
- **国际化**: 支持中英文双语切换
- **构建工具**: Vite

## 项目特性
- ✅ 响应式设计，适配不同屏幕尺寸
- ✅ 中英文国际化支持
- ✅ 个人信息管理（头像、简介、联系方式等）
- ✅ 教育背景展示
- ✅ 研究兴趣和发表论文管理
- ✅ 相关链接整合
- ✅ 个人分享相册（支持图片和视频）
- ✅ 相册轮播和模态框查看
- ✅ 视频缩略图预览
- ✅ 键盘导航支持

## 项目结构

```
├── public/              # 静态资源目录
│   ├── profile.png      # 个人头像
│   ├── weixin.png       # 微信图标
│   ├── qq.png           # QQ图标
│   ├── csdn.png         # CSDN图标
│   ├── b_zhan.png       # B站图标
│   ├── wangyiyun.png    # 网易云音乐图标
│   ├── ECUT.png         # 东华理工大学校徽
│   ├── ustcblue.jpg     # 中国科学技术大学校徽
│   └── shares/          # 个人分享图片和视频
│       ├── travel/      # 旅行足迹
│       ├── daily/       # 日常生活
│       └── conferences/ # 会议与研究
├── src/                 # 源代码目录
│   ├── components/      # 组件
│   │   ├── Gallery.astro        # 相册组件
│   │   └── GalleryCarousel.astro # 相册轮播组件
│   ├── data/            # 数据文件
│   │   ├── education.json       # 教育背景数据
│   │   ├── publications.json    # 发表论文数据
│   │   ├── blogs.json           # 相关链接数据
│   │   └── shares.json          # 个人分享数据
│   ├── i18n/            # 国际化文件
│   │   ├── helper.ts            # 国际化辅助函数
│   │   ├── en.json              # 英文翻译
│   │   └── zh.json              # 中文翻译
│   ├── layouts/         # 布局组件
│   │   └── MainLayout.astro     # 主布局
│   ├── pages/           # 页面
│   │   ├── index.astro          # 英文首页
│   │   └── zh/                  # 中文首页
│   │       └── index.astro      # 中文首页
│   └── styles/          # 样式文件
│       └── global.css           # 全局样式
├── astro.config.mjs     # Astro 配置文件
├── tailwind.config.cjs  # Tailwind CSS 配置文件
├── package.json         # 项目依赖
└── README.md            # 项目说明
```

## 安装步骤

### 1. 克隆项目
```bash
git clone <仓库地址>
cd <项目目录>
```

### 2. 安装依赖
```bash
npm install
```

### 3. 启动开发服务器
```bash
npm run dev
```

开发服务器将在 `http://localhost:4321/` 启动，你可以在浏览器中访问该地址查看效果。

### 4. 构建生产版本
```bash
npm run build
```

构建后的文件将生成在 `dist` 目录中。

## 使用指南

### 修改个人信息

1. **个人头像**
   - 替换 `public/profile.png` 文件为你自己的头像图片

2. **个人简介**
   - 编辑 `src/pages/index.astro` 和 `src/pages/zh/index.astro` 文件中的个人简介部分
   - 或者编辑 `src/i18n/en.json` 和 `src/i18n/zh.json` 文件中的翻译

3. **联系方式**
   - 编辑 `src/pages/index.astro` 和 `src/pages/zh/index.astro` 文件中的联系方式部分
   - 修改邮箱、微信、电话、QQ 和地址信息

4. **研究兴趣**
   - 编辑 `src/pages/index.astro` 和 `src/pages/zh/index.astro` 文件中的研究兴趣部分

5. **兴趣爱好**
   - 编辑 `src/pages/index.astro` 和 `src/pages/zh/index.astro` 文件中的兴趣爱好部分

### 修改教育背景

编辑 `src/data/education.json` 文件，添加或修改教育背景信息：

```json
[
  {
    "id": 1,
    "institution": "东华理工大学",
    "degree": "本科 - 勘查技术与工程",
    "period": "2019.9 - 2023.7"
  },
  {
    "id": 2,
    "institution": "中国科学技术大学",
    "degree": "硕士 - 固体地球物理学",
    "period": "2023.9 - 至今"
  },
  {
    "id": 3,
    "institution": "中国科学技术大学",
    "degree": "博士 - 固体地球物理学",
    "period": "至今 - 未来"
  }
]
```

### 修改学校图标

- 替换 `public/ECUT.png` 和 `public/ustcblue.jpg` 文件为对应的学校徽标
- 如果需要添加其他学校的徽标，需要在 `src/pages/index.astro` 和 `src/pages/zh/index.astro` 文件中添加对应的条件判断

### 修改发表论文

编辑 `src/data/publications.json` 文件，添加或修改论文信息：

```json
[
  {
    "id": 1,
    "title": "Constraining shallow slip deficit with phase gradient data",
    "authors": ["ajun Zhang", "Xiaohua Xu"],
    "journal": "Geophysical Journal International",
    "volume": "244",
    "issue": "1",
    "year": "2026",
    "doi": "https://doi.org/10.1093/gji/ggaf427",
    "pdf": "/ggaf427-4.pdf"
  }
]
```

### 修改相关链接

编辑 `src/data/blogs.json` 文件，添加或修改相关链接：

```json
[
  {
    "id": 1,
    "name": "GitHub",
    "name_en": "GitHub",
    "url": "https://github.com/ustcer-jun",
    "icon": "github"
  },
  {
    "id": 2,
    "name": "CSDN",
    "name_en": "CSDN",
    "url": "https://blog.csdn.net/JJOHJHOUJ?spm=1000.2115.3001.5343",
    "icon": "csdn"
  },
  {
    "id": 3,
    "name": "Bilibili",
    "name_en": "Bilibili",
    "url": "https://space.bilibili.com/492486522?spm_id_from=333.1007.0.0",
    "icon": "bilibili"
  },
  {
    "id": 4,
    "name": "网易云音乐",
    "name_en": "NetEase Music",
    "url": "https://music.163.com/#/playlist?id=3003575598",
    "icon": "netease"
  }
]
```

### 添加个人分享

1. **添加图片和视频**
   - 将图片和视频文件添加到 `public/shares/` 目录下的对应子目录中
   - 例如：`public/shares/travel/chengdu/` 用于存放成都旅行的照片和视频

2. **更新分享数据**
   - 编辑 `src/data/shares.json` 文件，添加或修改分享相册信息：

```json
{
  "travel": {
    "galleries": [
      {
        "title": "Chengdu",
        "folder": "travel/chengdu",
        "thumbnail": "/shares/travel/chengdu/1.jpg",
        "items": [
          {
            "type": "image",
            "src": "/shares/travel/chengdu/1.jpg",
            "alt": "Chengdu"
          },
          {
            "type": "video",
            "src": "/shares/travel/chengdu/1.mp4",
            "alt": "Chengdu video"
          }
        ]
      }
    ]
  },
  "daily": {
    "galleries": [
      {
        "title": "Campus Share",
        "folder": "daily/campus",
        "thumbnail": "/shares/daily/campus/1.jpg",
        "items": [
          {
            "type": "image",
            "src": "/shares/daily/campus/1.jpg",
            "alt": "Campus"
          }
        ]
      }
    ]
  },
  "conferences": {
    "galleries": [
      {
        "title": "Research",
        "folder": "conferences/research",
        "thumbnail": "/shares/conferences/research/1.jpg",
        "items": [
          {
            "type": "image",
            "src": "/shares/conferences/research/1.jpg",
            "alt": "Research"
          }
        ]
      }
    ]
  }
}
```

## 部署到 GitHub Pages

### 1. 创建 GitHub 仓库
1. 登录 GitHub，点击右上角的 "New repository"
2. 填写仓库名称（建议使用 `<username>.github.io` 作为仓库名，这样可以直接通过 `https://<username>.github.io` 访问）
3. 选择仓库类型（公开或私有）
4. 点击 "Create repository"

### 2. 配置部署

#### 方法一：使用 GitHub Actions 自动部署

1. 在项目根目录创建 `.github/workflows/deploy.yml` 文件：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. 推送代码到 GitHub：

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <GitHub 仓库地址>
git push -u origin main
```

3. 启用 GitHub Pages：
   - 进入 GitHub 仓库设置
   - 点击 "Pages" 选项
   - 在 "Source" 下拉菜单中选择 "GitHub Actions"
   - 保存设置

#### 方法二：手动部署

1. 构建项目：

```bash
npm run build
```

2. 推送构建结果到 GitHub Pages 分支：

```bash
cd dist
git init
git add .
git commit -m "Deploy to GitHub Pages"
git push -f <GitHub 仓库地址> main:gh-pages
```

3. 启用 GitHub Pages：
   - 进入 GitHub 仓库设置
   - 点击 "Pages" 选项
   - 在 "Source" 下拉菜单中选择 "gh-pages" 分支
   - 保存设置

### 3. 访问网站

部署完成后，你可以通过 `https://<username>.github.io` 访问你的个人主页。

## 后续修改和更新

1. **修改内容**：编辑相应的文件，如 `src/data/` 下的数据文件或 `src/pages/` 下的页面文件
2. **提交修改**：
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
3. **自动部署**：如果使用 GitHub Actions，推送后会自动部署
4. **手动部署**：如果使用手动部署，需要重新构建并推送构建结果

## 许可证

MIT License

## 致谢

- [Astro](https://astro.build/) - 静态站点生成器
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [GitHub Pages](https://pages.github.com/) - 免费的静态网站托管服务

---

希望这个个人学术主页能够帮助你展示自己的学术成果和个人生活。如果有任何问题或建议，欢迎提出！