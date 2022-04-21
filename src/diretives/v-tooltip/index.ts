/*
 * @Author: 翁恺敏
 * @Date: 2022-04-21 14:21:19
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-21 16:01:50
 * @FilePath: /vue3-vite-test/src/diretives/v-tooltip/index.ts
 * @Description: v-tooltip
 */

import { createApp, DirectiveBinding } from "vue";
import type { VNode } from "vue";
import type { TooltipProps } from "ant-design-vue";
import { Tooltip } from "ant-design-vue";
import map from "lodash/map";

const VTooltip = (
  el: Element,
  binding: DirectiveBinding<TooltipProps>,
  vNode: VNode
) => {
  console.log(el, binding, vNode);
  // const { value:tooltipProps } = binding;
  // const keyValues = map(tooltipProps,(value,key)=>{
  //   return `${key}=${value}`
  // })
  // const toolTip = {
  //   template: `<a-tooltip ${keyValues}>${el}</a-tooltip>`
  // }
  const toolTip = createApp(Tooltip);
  console.log(toolTip);
};

export default VTooltip;
