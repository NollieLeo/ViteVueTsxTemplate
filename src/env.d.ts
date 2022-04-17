/*
 * @Author: 翁恺敏
 * @Date: 2022-04-09 14:59:27
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-12 23:33:05
 * @FilePath: /vue3-vite-test/src/env.d.ts
 * @Description:
 */
/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
