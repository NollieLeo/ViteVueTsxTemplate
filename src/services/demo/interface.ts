/*
 * @Author: 翁恺敏
 * @Date: 2022-04-12 21:50:31
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-12 21:53:37
 * @FilePath: /vue3-vite-test/src/services/demo/interface.ts
 * @Description: 接口类型定义
 */

interface LoginParams {
  userName: string;
  password: number | string;
}

export interface LoginApi {
  login: (params: LoginParams) => Promise<any>;
}
