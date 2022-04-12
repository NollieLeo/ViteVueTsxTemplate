/*
 * @Author: 翁恺敏
 * @Date: 2022-04-12 13:51:22
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-12 14:05:28
 * @FilePath: /vue3-vite-test/src/typings/globalConfig.d.ts
 * @Description:
 */

import axios from "axios";

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $http: typeof axios;
    $validate: (data: object, rule: object) => boolean;
  }
}
