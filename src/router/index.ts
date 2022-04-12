/*
 * @Author: 翁恺敏
 * @Date: 2022-04-12 15:48:26
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-12 16:34:28
 * @FilePath: /vue3-vite-test/src/router/index.ts
 * @Description:
 */
import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "todo_lists",
    component: () => import("@/pages/todo-lists"), // 注意这里要带上 文件后缀.vue
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
