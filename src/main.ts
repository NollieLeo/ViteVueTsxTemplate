/*
 * @Author: 翁恺敏
 * @Date: 2022-04-09 14:59:27
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-21 15:11:30
 * @FilePath: /vue3-vite-test/src/main.ts
 * @Description:
 */
import { createApp } from "vue";
import App from "./App";
import Antd from "ant-design-vue";
import CustomDirevtives from "@/diretives";
import Router from "@/router";
import { createPinia } from "pinia";
import "ant-design-vue/dist/antd.css";

const app = createApp(App);

app.use(Antd); // antd-vue组件
app.use(Router); // 路由
app.use(CustomDirevtives); // 自定义指令
app.use(createPinia()); // pinia
app.mount("#app");
