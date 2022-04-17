/*
 * @Author: 翁恺敏
 * @Date: 2022-04-12 21:22:28
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-12 21:55:17
 * @FilePath: /vue3-vite-test/src/services/demo/index.ts
 * @Description: 模拟请求
 */

import http from "@/utils/http";
import * as T from "./interface";

const _loginApi: T.LoginApi = {
  login(params) {
    return http.post("/login", params);
  },
};

export { _loginApi };
