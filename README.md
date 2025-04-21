# Vite + TypeScript + TailwindCSS car template

这是一个基于Vite、TypeScript和TailwindCSS的现代汽车渲染网站。

##环境
- Node.js >= 22
- pnpm >= 9

## 技术栈

- ⚡️ [Vite](https://vitejs.dev/) - 下一代前端工具
- 🦾 [TypeScript](https://www.typescriptlang.org/) - 类型安全的JavaScript超集
- 🎨 [TailwindCSS](https://tailwindcss.com/) - 实用优先的CSS框架
- 🖖 [Vue 3](https://vuejs.org/) - 渐进式JavaScript框架
- 🏗 [Pinia](https://pinia.vuejs.org/) - Vue状态管理
- 🛣 [Vue Router](https://router.vuejs.org/) - Vue官方路由

## 功能特性

- 📦 开箱即用的Vite配置
- 🧪 集成Vitest单元测试
- 🎭 Playwright端到端测试
- ✨ 自动导入组件和API
- 🛠 ESLint + Prettier代码规范
- 🚀 生产优化构建

## 快速开始

1. 克隆项目
```bash
git clone https://github.com/your-repo/vite-ts-tailwind-starter.git
```

2. 安装依赖
```bash
pnpm install
```

3. 开发模式
```bash
pnpm dev
```

4. 生产构建
```bash
pnpm build
```

## 项目结构

```
├── src/
│   ├── assets/          # 静态资源
│   ├── components/      # Vue组件
│   ├── pages/           # 页面组件
│   ├── App.vue          # 根组件
│   ├── main.ts          # 应用入口
│   ├── router.ts        # 路由配置
│   └── store.ts         # Pinia状态管理
├── vite.config.ts       # Vite配置
├── tailwind.config.js   # Tailwind配置
└── tsconfig.json        # TypeScript配置
```

## 测试

- 单元测试
```bash
pnpm test
```

- 覆盖率报告
```bash
pnpm coverage
```

- 端到端测试
```bash
pnpm test-e2e
```
