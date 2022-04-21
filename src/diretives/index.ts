/*
 * @Author: 翁恺敏
 * @Date: 2022-04-21 14:35:29
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-21 16:15:51
 * @FilePath: /vue3-vite-test/src/diretives/index.ts
 * @Description:
 */

import type { App } from "vue";
import VTooltip from "./v-tooltip";
import VCopy from "./v-copy";

const registerDirective = (app: App<Element>) => {
  app.directive("tooltip", VTooltip);
  app.directive("copy", VCopy);
};

export default {
  install(app: App<Element>) {
    registerDirective(app);
  },
};
