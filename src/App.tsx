/*
 * @Author: 翁恺敏
 * @Date: 2022-04-09 14:59:27
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-12 17:56:05
 * @FilePath: /vue3-vite-test/src/App.tsx
 * @Description:
 */

import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import "./index.scss";

const App = defineComponent({
  setup(props) {
    return () => (
      <div>
        <RouterView />
      </div>
    );
  },
});

export default App;
