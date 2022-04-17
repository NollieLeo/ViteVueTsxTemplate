/*
 * @Author: 翁恺敏
 * @Date: 2022-04-17 16:09:03
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-17 17:38:15
 * @FilePath: /vue3-vite-test/src/components/demo-wrapper/index.tsx
 * @Description: demo-wrapper
 */

import { defineComponent } from "vue";
import classNames from "classnames";
import { getPropsSlot } from "@/utils/props-utils";
import "./index.scss";

const prefixCls = "demo-wrapper";
const DemoWrapper = defineComponent({
  setup(props, { attrs, slots }) {
    const subCls = classNames(prefixCls);

    const title = getPropsSlot(slots, props, "title");

    return () => (
      <div class={[attrs.class, subCls]}>
        <div class={`${prefixCls}-title`}>{title}</div>
        {slots.default?.()}
      </div>
    );
  },
});

export default DemoWrapper;
