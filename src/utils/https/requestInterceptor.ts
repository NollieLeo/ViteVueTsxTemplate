/*
 * @Author: 翁恺敏
 * @Date: 2022-04-12 19:37:12
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-12 19:43:54
 * @FilePath: /vue3-vite-test/src/utils/https/requestInterceptor.ts
 * @Description: 请求拦截器 成功/失败
 */

import type { AxiosRequestConfig, AxiosError } from "axios";

function handleRequestSuccess(config: AxiosRequestConfig<any>) {
  return config;
}

function handleRequestError(error: AxiosError) {
  return error;
}

export { handleRequestError, handleRequestSuccess };
