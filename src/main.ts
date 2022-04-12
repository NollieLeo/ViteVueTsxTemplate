/*
 * @Author: 翁恺敏
 * @Date: 2022-04-09 14:59:27
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-12 15:30:02
 * @FilePath: /vue3-vite-test/src/main.ts
 * @Description:
 */
import { createApp } from "vue";
import App from "./App";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

const app = createApp(App);

app.use(Antd);
app.mount("#app");
