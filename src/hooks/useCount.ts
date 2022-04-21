/*
 * @Author: 翁恺敏
 * @Date: 2022-04-19 01:02:33
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-19 01:11:33
 * @FilePath: /vue3-vite-test/src/hooks/useCount.ts
 * @Description: useCount
 */

import { ref } from "vue";

type UseCountType = {
  defaultCount?: number;
  step?: number;
};

const useCount = (props: UseCountType) => {
  const { defaultCount = 0, step = 1 } = props;
  const count = ref<number>(defaultCount);

  const addCount = () => {
    count.value += step;
  };

  const deleteCount = () => {
    count.value -= step;
  };

  return {
    count,
    deleteCount,
    addCount,
  } as const;
};

export default useCount;
