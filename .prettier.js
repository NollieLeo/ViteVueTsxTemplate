/*
 * @Author: 翁恺敏
 * @Date: 2022-04-12 14:56:53
 * @LastEditors: 翁恺敏
 * @LastEditTime: 2022-04-12 15:39:04
 * @FilePath: /vue3-vite-test/.prettier.js
 * @Description:
 */
module.exports = {
  tabWidth: 2,
  jsxSingleQuote: true,
  jsxBracketSameLine: true,
  printWidth: 100,
  singleQuote: false,
  semi: false,
  overrides: [
    {
      files: "*.json",
      options: {
        printWidth: 200,
      },
    },
  ],
  arrowParens: "always",
};
