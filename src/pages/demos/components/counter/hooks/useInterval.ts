/*
 * @Author: 翁恺敏
 * @Date: 2022-04-17 16:17:26
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-17 16:48:42
 * @FilePath: /vue3-vite-test/src/pages/demos/components/Counter/hooks/useInterval.ts
 * @Description: useInterval 定时器
 */
import { ref, onMounted, onUnmounted } from "vue";

type UserIntervalProps = {
  callback: Function;
  duration?: number;
  immediate?: Boolean;
};

const useInterval = (props: UserIntervalProps) => {
  const { callback, duration = 1000, immediate = true } = props;

  const timer = ref<number>(0);

  /**
   * @description: 启动定时
   */
  const trigger = () => {
    timer.value = setInterval(callback, duration);
  };

  /**
   * @description: 清除定时
   */
  const clear = () => {
    clearInterval(timer.value);
  };

  if (immediate) {
    onMounted(() => {
      trigger();
    });
    onUnmounted(() => {
      clear();
    });
  }
  return [trigger, clear] as const;
};

export default useInterval;
