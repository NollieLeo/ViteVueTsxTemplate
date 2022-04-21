<!--
 * @Author: 翁恺敏
 * @Date: 2022-04-17 16:04:55
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-21 15:09:00
 * @FilePath: /vue3-vite-test/src/pages/demos/index.vue
 * @Description: 
 -->
<template>
  <div class="demos">
    <counter />
    <modal-demo />
    <suspense-test-demo />
    <todo-list />
    <emits-test-demo />
    <custom-directives-demo />
  </div>
</template>
<script lang="ts">
import Counter from "./components/counter";
import ModalDemo from "./components/modal-test";
import SuspenseTestDemo from "./components/suspense-test";
import TodoList from "./components/todo-lists";
import EmitsTestDemo from "./components/emits-test/index.vue";
import CustomDirectivesDemo from "./components/custom-directive-test";

export default {
  name: "TestDemo",
  components: {
    Counter,
    ModalDemo,
    SuspenseTestDemo,
    TodoList,
    EmitsTestDemo,
    CustomDirectivesDemo,
  },
};
</script>
<style lang="scss" src="./index.scss"></style>
