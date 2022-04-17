/*
 * @Author: 翁恺敏
 * @Date: 2022-04-12 18:01:38
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-12 21:17:20
 * @FilePath: /vue3-vite-test/src/utils/https/interface.ts
 * @Description: http类
 */

import type { AxiosInstance } from "axios";

// 需要和后台商量好
interface ResType<T> {
  code: number;
  data?: T;
  msg: string;
  err?: string;
}

interface HttpInterface extends Omit<AxiosInstance, "get" | "post"> {
  get<T>(url: string, params?: unknown): Promise<ResType<T>>;
  post<T>(url: string, params?: unknown): Promise<ResType<T>>;
  download(url: string): void;
  upload<T>(url: string, params: unknown): Promise<ResType<T>>;
}

export type { ResType, HttpInterface };
