/*
 * @Author: 翁恺敏
 * @Date: 2022-04-17 16:04:55
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-17 16:55:29
 * @FilePath: /vue3-vite-test/src/pages/demos/index.tsx
 * @Description: demo页面
 */

import { defineComponent } from "vue";

import Counter from "./components/counter";
import TodoList from "./components/todo-lists";

import "./index.scss";

const prefixCls = "demos" as const;

const Demos = defineComponent({
  setup() {
    return () => (
      <div class={prefixCls}>
        <Counter />
        <TodoList />
      </div>
    );
  },
});
export default Demos;
