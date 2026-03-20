# mentor-web

一个适合手机访问的静态导师测评网站。

## 目录

- `index.html`：页面入口
- `styles.css`：样式文件
- `script.js`：问卷数据、交互和评分逻辑
- `vercel.json`：Vercel 部署配置
- `netlify.toml`：Netlify 部署配置

## 本地预览

直接双击 `index.html` 即可打开。

如果你想用本地服务器预览，也可以在当前目录运行：

```powershell
python -m http.server 8080
```

然后访问 `http://localhost:8080`

## Vercel 部署

1. 把 `mentor-web` 上传到 GitHub 仓库
2. 登录 Vercel
3. 选择 `Add New Project`
4. 导入这个仓库
5. 保持默认设置，直接部署

这个项目是纯静态站点：

- 无需安装依赖
- 无需构建命令
- 输出目录为项目根目录

## Netlify 部署

### 方式一：拖拽部署

1. 登录 Netlify
2. 打开 `Sites`
3. 把整个 `mentor-web` 文件夹拖到部署区域

### 方式二：连接 Git 仓库

1. 上传到 GitHub
2. 在 Netlify 选择 `Add new site`
3. 连接仓库
4. 构建设置保持为空或默认
5. 发布

## 分享给别人

部署成功后，平台会给你一个公网链接，例如：

- `https://your-site.vercel.app`
- `https://your-site.netlify.app`

把这个链接直接发给别人即可在手机上测试。
