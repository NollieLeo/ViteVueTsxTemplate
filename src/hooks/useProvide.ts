/*
 * @Author: 翁恺敏
 * @Date: 2022-04-10 16:11:32
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-18 22:53:39
 * @FilePath: /vue3-vite-test/src/hooks/useProvide.ts
 * @Description: provide （observerable provide）
 */
import { provide, readonly, ref, isReactive } from "vue";
import forEach from "lodash/forEach";

const useProvide = (shouldReactive: Boolean = true) => {
  const handleProvide = (providers: Record<string, any>): void => {
    forEach(providers, (value, key) => {
      let provideValue;
      const isFunction = typeof value === "function";
      if (!isFunction) {
        provideValue =
          shouldReactive && !isReactive(value) ? ref(value) : value;
      }
      provide(key, isFunction ? provideValue : readonly(provideValue));
    });
  };

  return handleProvide;
};

export default useProvide;
