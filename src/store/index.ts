/*
 * @Author: 翁恺敏
 * @Date: 2022-04-17 14:32:08
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-17 14:47:16
 * @FilePath: /vue3-vite-test/src/store/index.ts
 * @Description: store
 */

import { defineStore } from "pinia";

export const useMainStore = defineStore({
  id: "mian",
  state: () => ({
    name: "Mr.Weng",
  }),
  getters: {
    nameLength: (state) => state.name.length,
  },
  actions: {
    changeName(data: string) {
      this.name = data;
    },
  },
});

export type StoreTypes = ReturnType<typeof useMainStore>;
