<!--
 * @Author: 翁恺敏
 * @Date: 2022-04-18 23:14:49
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-21 13:52:11
 * @FilePath: /vue3-vite-test/src/pages/demos/components/emits-test/emits-test.vue
 * @Description: 
 -->
<template lang="">
  <div @click="$emit('click')">点击测试组件</div>
</template>
<script lang="ts">
export default {
  name: "EmitsTest",
  emits: ["click"],
};
</script>
<style lang=""></style>
