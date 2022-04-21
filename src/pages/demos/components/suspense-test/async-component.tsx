/*
 * @Author: 翁恺敏
 * @Date: 2022-04-18 23:01:30
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-18 23:05:32
 * @FilePath: /vue3-vite-test/src/pages/demos/components/suspense-test/async-component.tsx
 * @Description: 异步组件
 */

import { defineComponent } from "vue";

const AsyncComponent = defineComponent({
  async setup(props) {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(null);
      }, 2000);
    });
    return () => <div>这是一个异步组件</div>;
  },
});

export default AsyncComponent;
