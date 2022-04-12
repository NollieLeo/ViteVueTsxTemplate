/*
 * @Author: 翁恺敏
 * @Date: 2022-04-09 14:59:27
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-12 15:38:56
 * @FilePath: /vue3-vite-test/src/App.tsx
 * @Description:
 */

import { defineComponent } from "vue";
import TodoList from "./components/TodoList";
import "./index.less";

const App = defineComponent({
  setup(props) {
    return () => (
      <div>
        <TodoList />
      </div>
    );
  },
});

export default App;
