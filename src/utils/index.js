/*
 * @Author: your name
 * @Date: 2022-01-24 21:19:16
 * @LastEditTime: 2022-01-24 21:23:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-jira\src\utils\index.js
 */
const isFalse = (val) => {
  return val === 0 ? false : !val;
};
export const clearObject = (object) => {
  const obj = { ...object };
  Object.keys(obj).forEach((item) => {
    const value = obj[item];
    if (isFalse(value)) {
      delete obj[item];
    }
  });
  return obj;
};
