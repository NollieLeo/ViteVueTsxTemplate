/*
 * @Author: 翁恺敏
 * @Date: 2022-04-12 17:57:12
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-12 21:19:39
 * @FilePath: /vue3-vite-test/src/utils/https/index.ts
 * @Description: axios的统一封装
 */
import axios, { Axios } from "axios";
import NProgress from "nprogress";
import { BASE_URL } from "./const";
import { HttpInterface } from "./interface";
import { saveAs } from "file-saver";
import { handleRequestError, handleRequestSuccess } from "./requestInterceptor";
import {
  handleResponseError,
  handleResponseSuccess,
} from "./responseInterceptor";

// 设置请求头和请求路径
axios.defaults.baseURL = BASE_URL;
axios.defaults.timeout = 10000;
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";

// 请求拦截
axios.interceptors.request.use(handleRequestSuccess, handleRequestError);

// 响应拦截
axios.interceptors.response.use(handleResponseSuccess, handleResponseError);

const http: HttpInterface = {
  ...new Axios(),
  getUri: axios.getUri,
  delete: axios.delete,
  request: axios.request,
  head: axios.head,
  options: axios.options,
  put: axios.put,
  patch: axios.patch,
  get(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start();
      axios
        .get(url, { params })
        .then((res) => {
          NProgress.done();
          resolve(res.data);
        })
        .catch((error) => {
          NProgress.done();
          reject(error);
        });
    });
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start();
      axios
        .post(url, { params })
        .then((res) => {
          NProgress.done();
          resolve(res.data);
        })
        .catch((error) => {
          NProgress.done();
          reject(error);
        });
    });
  },
  upload(url, file) {
    return new Promise((resolve, reject) => {
      NProgress.start();
      axios
        .post(url, file, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          NProgress.done();
          resolve(res.data);
        })
        .catch((err) => {
          NProgress.done();
          reject(err.data);
        });
    });
  },
  download: saveAs,
};

export { http };
