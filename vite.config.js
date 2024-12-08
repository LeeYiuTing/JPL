import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "@vant/auto-import-resolver";

export default {
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  server: {
    host: '127.0.0.1',
    port: 8023,
  },
  // 基本配置
  base: '/JPL/', // 设置公共基础路径，这里使用你的 GitHub 仓库名称
  build: {
    outDir: 'docs', // 设置输出目录为 'docs'
    assetsDir: './', // 资源目录，根据需要配置
    rollupOptions: {
      // 配置 Rollup 打包选项，可根据需要配置
    },
    assetsPublicPath: '/',
  },
};
