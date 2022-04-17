/*
 * @Author: 翁恺敏
 * @Date: 2022-04-12 15:48:26
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-17 16:53:19
 * @FilePath: /vue3-vite-test/src/router/index.ts
 * @Description:
 */
import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home_page",
    component: () => import("@/pages/home"),
  },
  {
    path: "/demos",
    name: "demos",
    component: () => import("@/pages/demos"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
