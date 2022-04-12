/*
 * @Author: 翁恺敏
 * @Date: 2022-04-09 14:59:27
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-12 16:40:55
 * @FilePath: /vue3-vite-test/vite.config.ts
 * @Description:
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": "/src/",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/style/index.scss";',
      },
    },
  },
});
