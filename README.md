# shop-admin

基于 **Vue 3 + Vite + Element Plus** 的商城后台管理系统。

从零手写的后台管理前端项目，用于练习 Vue3 全家桶与真实后台业务开发，后续接入本地 Java 后端接口。

## 技术栈

| 分类 | 技术 |
|---|---|
| 框架 | Vue 3（组合式 API + `<script setup>`） |
| 语言 | TypeScript |
| 构建工具 | Vite |
| 路由 | Vue Router（history 模式） |
| 状态管理 | Pinia |
| UI 组件库 | Element Plus |
| 样式方案 | WindiCSS（原子化 CSS） |
| 请求库 | Axios（待接入） |

## 功能进度

- [x] 工程初始化（Vite + TS + Router + Pinia + ESLint/Prettier）
- [x] 路由配置与 404 兜底页面
- [ ] 登录页 / token 鉴权 / 路由守卫
- [ ] 后台整体布局（侧边栏 + 顶栏 + 内容区）
- [ ] 商品管理（列表 / 新增 / 编辑 / 删除）
- [ ] 订单管理
- [ ] 用户管理
- [ ] Axios 封装 + 后端接口联调
- [ ] 打包部署到 nginx

## 快速开始

```sh
npm install
npm run dev
```

启动后访问 http://localhost:5173

## 常用命令

| 命令 | 说明 |
|---|---|
| `npm run dev` | 启动开发服务器（热更新） |
| `npm run build` | 类型检查 + 打包，产物在 `dist/` |
| `npm run preview` | 本地预览打包结果 |
| `npm run lint` | ESLint 检查并自动修复 |
| `npm run format` | Prettier 格式化代码 |

## 目录结构

```
src/
├── views/          页面级组件（每条路由对应一个页面）
├── components/     可复用组件
├── router/         路由配置
├── stores/         Pinia 状态管理
└── assets/         静态资源
```

## 开发约定

- 页面组件放 `views/`，复用零件放 `components/`
- 统一使用组合式 API（`<script setup lang="ts">`）
- 路由页面命名以 `View` 结尾，如 `LoginView.vue`
- 接口请求统一走封装的 axios 实例

## 部署

```sh
npm run build
```

将生成的 `dist/` 目录交给 nginx 静态托管即可。由于使用 history 路由模式，nginx 需配置 fallback 到 `index.html`：

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```
