/*
 * @Author: 翁恺敏
 * @Date: 2022-04-17 20:37:05
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-17 20:51:57
 * @FilePath: /vue3-vite-test/src/hooks/useBoolean.ts
 * @Description: useBoolean
 */

import { ref } from "vue";

const useBoolean = () => {
  const bool = ref<boolean>(false);

  const setTrue = () => {
    bool.value = true;
  };
  const setFalse = () => {
    bool.value = false;
  };
  const toggle = () => {
    bool.value = !bool.value;
  };
  return {
    bool,
    setTrue,
    setFalse,
    toggle,
  };
};

export default useBoolean;
