/*
 * @Author: 翁恺敏
 * @Date: 2022-04-09 14:59:27
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-13 15:32:08
 * @FilePath: /vue3-vite-test/vite.config.ts
 * @Description:
 */
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  return {
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    css: {
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
      minify: true,
    },
  };
};
