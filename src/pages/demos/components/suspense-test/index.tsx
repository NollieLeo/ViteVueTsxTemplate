/*
 * @Author: 翁恺敏
 * @Date: 2022-04-18 22:57:06
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-19 00:58:58
 * @FilePath: /vue3-vite-test/src/pages/demos/components/suspense-test/index.tsx
 * @Description: suspense test
 */

import DemoWrapper from "@/components/demo-wrapper";
import useBoolean from "@/hooks/useBoolean";
import { Button } from "ant-design-vue";
import { defineComponent, Suspense, defineAsyncComponent, ref } from "vue";
import AsyncComponent from "./async-component";

// const AsyncComponent = defineAsyncComponent(() => import("./async-component"));

const SuspenseTestDemo = defineComponent({
  setup(props) {
    const { bool: visible, setTrue } = useBoolean();

    const renderFallback = () => <div>正在加载异步组件....</div>;

    return () => (
      <DemoWrapper title="Suspense Test">
        {visible.value && (
          <Suspense
            v-slots={{
              fallback: renderFallback,
            }}
          >
            <AsyncComponent />
          </Suspense>
        )}
        <Button onClick={setTrue}>click to show</Button>
      </DemoWrapper>
    );
  },
});
export default SuspenseTestDemo;
