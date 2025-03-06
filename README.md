# 全栈博客项目

这是一个使用现代技术栈构建的全栈博客系统，支持文章发布、评论互动等功能。

## 技术栈

### 前端

- React - 用户界面构建
- TailwindCSS - 样式设计
- PostCSS - CSS 处理工具

### 后端

- Node.js - 运行环境
- Express - Web 框架
- MongoDB - 数据库
- Clerk - 用户认证
- ImageKit - 图片存储

## 项目结构

full-stack-blog/
├── client/ # 前端 React 应用
│ ├── src/
│ │ ├── components/ # React 组件
│ │ │ ├── Navbar.jsx
│ │ │ ├── PostList.jsx
│ │ │ ├── Comments.jsx
│ │ │ └── SideMenu.jsx
│ │ └── ...
│ └── postcss.config.js
└── backend/ # 后端 Express 服务
├── controllers/ # 控制器
│ └── comment.controller.js
└── package.json

## 功能特性

- 用户认证与授权
- 文章管理(CRUD)
- 评论系统
- 响应式设计
- 图片上传

## 快速开始

### 环境要求

- Node.js v20+
- MongoDB
- npm/yarn

### 安装

1. 克隆项目

git clone <项目地址>

2. 安装依赖

# 后端依赖

cd backend
npm install

# 前端依赖

cd client
npm install

3. 配置环境变量

在 backend 目录创建 `.env` 文件:

MONGODB_URI=<MongoDB 连接串>
CLERK_SECRET_KEY=<Clerk 密钥>
IMAGEKIT_PUBLIC_KEY=<ImageKit 公钥>
IMAGEKIT_PRIVATE_KEY=<ImageKit 私钥>
IMAGEKIT_URL_ENDPOINT=<ImageKit 端点>

4. 启动服务

# 后端

cd backend
npm run dev

# 前端

cd client
npm run dev

## API 接口

### 文章

- `GET /api/posts` - 获取文章列表
- `POST /api/posts` - 创建文章
- `GET /api/posts/:id` - 获取文章详情
- `PUT /api/posts/:id` - 更新文章
- `DELETE /api/posts/:id` - 删除文章

### 评论

- `GET /api/posts/:postId/comments` - 获取评论
- `POST /api/posts/:postId/comments` - 发表评论
- `DELETE /api/comments/:id` - 删除评论

## 许可证

ISC
