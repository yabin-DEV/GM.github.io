# GM选品助手

## 🚀 GitHub Pages 部署说明

1. 把本项目上传到你的 GitHub 仓库（例如：gm-gpt-site）。
2. 打开 GitHub 仓库设置 > Pages，选择部署分支为 `main` 和根目录 `/`。
3. 部署后会生成你的网站链接，例如：`https://yourusername.github.io/gm-gpt-site/`

## 🔐 后端中转（推荐使用 Cloudflare Workers）

1. 注册 Cloudflare Workers（https://workers.cloudflare.com）
2. 新建 Worker，把 `worker.js` 代码粘贴进去
3. 替换代码中的 OpenAI API Key
4. 发布 Worker，例如：https://gpt-proxy.username.workers.dev
5. 修改 `script.js` 中的 fetch URL 为你的 Worker 地址

## 🎉 Done!
