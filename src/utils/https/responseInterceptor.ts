/*
 * @Author: 翁恺敏
 * @Date: 2022-04-12 19:39:17
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-12 19:41:27
 * @FilePath: /vue3-vite-test/src/utils/https/responseInterceptor.ts
 * @Description: 响应拦截器
 */
import type { AxiosError, AxiosResponse } from "axios";

function handleResponseSuccess(response: AxiosResponse) {
  return response;
}

function handleResponseError(error: AxiosError) {
  return error;
}

export { handleResponseError, handleResponseSuccess };
