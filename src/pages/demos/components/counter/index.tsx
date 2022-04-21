/*
 * @Author: 翁恺敏
 * @Date: 2022-04-17 16:16:10
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-19 00:58:45
 * @FilePath: /vue3-vite-test/src/pages/demos/components/Counter/index.tsx
 * @Description: 定时器demo
 */

import { defineComponent, ref } from "vue";
import { Button } from "ant-design-vue";
import useInterval from "./hooks/useInterval";
import DemoWrapper from "@/components/demo-wrapper";

const Counter = defineComponent({
  setup() {
    const counter = ref(0);

    const [trigger, clear] = useInterval({
      callback: () => {
        counter.value += 1;
      },
      duration: 500,
      immediate: false,
    });

    return () => (
      <DemoWrapper title="定时器测试">
        <span>num: {counter.value}</span>
        <Button onClick={trigger}>开启定时器</Button>
        <Button onClick={clear}>清除定时器</Button>
      </DemoWrapper>
    );
  },
});

export default Counter;
