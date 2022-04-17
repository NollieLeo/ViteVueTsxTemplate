/*
 * @Author: 翁恺敏
 * @Date: 2022-04-17 17:33:44
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-17 17:37:58
 * @FilePath: /vue3-vite-test/src/utils/props-utils/index.ts
 * @Description: 处理props的utils
 */
import type { Slots } from "vue";

function getPropsSlot(slots: Slots, props: any, prop = "default") {
  return props[prop] ?? slots[prop]?.();
}

export { getPropsSlot };
