/*
 * @Author: 翁恺敏
 * @Date: 2022-04-17 16:50:58
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-17 16:52:30
 * @FilePath: /vue3-vite-test/src/pages/home/index.tsx
 * @Description: home
 */

import { defineComponent } from "vue";
import "./index.scss";

const Home = defineComponent({
  setup() {
    return () => <div>home</div>;
  },
});

export default Home;
