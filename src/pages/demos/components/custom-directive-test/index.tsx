/*
 * @Author: 翁恺敏
 * @Date: 2022-04-21 13:59:33
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-21 16:41:45
 * @FilePath: /vue3-vite-test/src/pages/demos/components/custom-directive-test/index.tsx
 * @Description: 自定义指令测试
 */

import DemoWrapper from "@/components/demo-wrapper";
import { defineComponent } from "vue";

const CustomDirectivesDemo = defineComponent({
  setup(props) {
    return () => (
      <DemoWrapper title="自定义指令测试">
        <span v-copy="Hello World">v-copy测试：点击拷贝内容</span>
      </DemoWrapper>
    );
  },
});

export default CustomDirectivesDemo;
