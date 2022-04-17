/*
 * @Author: 翁恺敏
 * @Date: 2022-04-09 14:59:27
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-17 14:53:08
 * @FilePath: /vue3-vite-test/vite.config.ts
 * @Description:
 */
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import viteCompression from "vite-plugin-compression";
import path from "path";

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  return {
    plugins: [
      vue(),
      vueJsx(),
      // gzip压缩 生产环境生成 .gz 文件
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: "gzip",
        ext: ".gz",
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    css: {
      // 全局样式文件
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/style/index.scss";',
        },
      },
    },
    server: {
      host: "0.0.0.0",
      port: 3000,
      open: true,
      https: false,
      // 代理
      proxy: {},
    },
    build: {
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  };
};
