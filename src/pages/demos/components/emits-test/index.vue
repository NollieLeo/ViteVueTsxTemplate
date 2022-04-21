<!--
 * @Author: 翁恺敏
 * @Date: 2022-04-18 23:27:16
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-19 01:13:52
 * @FilePath: /vue3-vite-test/src/pages/demos/components/emits-test/index.vue
 * @Description: 
 -->

<template>
  <demo-wrapper>
    <template #title>Emits Props</template>
    <emits-test @click="handleClick"></emits-test>
    触发次数：{{ count }}
  </demo-wrapper>
</template>

<script lang="ts">
import DemoWrapper from "@/components/demo-wrapper";
import EmitsTest from "./emits-test.vue";
import useCount from "@/hooks/useCount";
export default {
  name: "EmitsTestDemo",
  components: {
    DemoWrapper,
    EmitsTest,
  },
  setup() {
    const { count, addCount, deleteCount } = useCount({
      defaultCount: 0,
    });
    const handleClick = () => {
      addCount();
      console.log("触发了点击事件");
    };
    return {
      handleClick,
      count,
    };
  },
};
</script>
