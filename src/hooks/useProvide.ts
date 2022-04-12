/*
 * @Author: 翁恺敏
 * @Date: 2022-04-10 16:11:32
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-12 15:31:38
 * @FilePath: /vue3-vite-test/src/hooks/useProvide.ts
 * @Description: provide （observerable provide）
 */
import { provide, readonly, ref, isReactive } from "vue";
import forEach from "lodash/forEach";

const useProvide = (shouldReactive: Boolean) => {
  const handleProvide = (providers: Record<string, any>) => {
    forEach(providers, (value, key) => {
      const tempValue =
        shouldReactive && !isReactive(value) ? ref(value) : value;
      provide(key, readonly(tempValue));
    });
  };

  return handleProvide;
};

export default useProvide;
