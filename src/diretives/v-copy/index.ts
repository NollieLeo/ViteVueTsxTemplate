/*
 * @Author: 翁恺敏
 * @Date: 2022-04-21 16:11:45
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-21 16:36:50
 * @FilePath: /vue3-vite-test/src/diretives/v-copy/index.ts
 * @Description: v-copy
 */

import type { Directive } from "vue";
import { message } from "ant-design-vue";

interface CopyElement extends HTMLElement {
  copyData?: string;
}

const handleClick = (el: CopyElement) => {
  return () => {
    if (!el.copyData) {
      return message.warn("没有需要复制的目标内容");
    }
    // 创建textarea标签
    const textarea = document.createElement("textarea");
    // 设置相关属性
    textarea.readOnly = true;
    textarea.style.position = "fixed";
    textarea.style.top = "-99999px";
    // 把目标内容赋值给它的value属性
    textarea.value = el.copyData;
    // 插入到页面
    document.body.appendChild(textarea);
    // 调用onselect()方法
    textarea.select();
    // 把目标内容复制进剪贴板, 该API会返回一个Boolean
    const res = document.execCommand("Copy");
    res && message.success("复制成功，剪贴板内容：" + el.copyData);
    // 移除textarea标签
    document.body.removeChild(textarea);
  };
};

const VCopy: Directive<CopyElement, string> = {
  beforeMount(el, binding) {
    el.copyData = binding.value;
    if (!el.copyData) {
      return;
    }
    el.addEventListener("click", handleClick(el));
  },
  updated(el, binding) {
    // 实时更新最新的目标内容
    el.copyData = binding.value;
  },
  unmounted(el) {
    el.removeEventListener("click", handleClick(el));
  },
};

export default VCopy;
