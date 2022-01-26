/*
 * @Author: your name
 * @Date: 2022-01-24 21:19:16
 * @LastEditTime: 2022-01-26 10:26:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-jira\src\utils\index.js
 */
import { useState, useEffect } from "react";
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

const debounce = (func, delay) => {
  let timeout;
  return () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func, delay);
  };
};

export const useDebounce = (value, delay) => {
  const [peramValue, setPeramValue] = useState(value);
  useEffect(() => {
    //每次在value变化以后，设置一个定时器
    const timeout = setTimeout(() => {
      setPeramValue(value);
    }, delay);
    //每次在上一个UseEffect处理完之后再运行
    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);
  return peramValue;
};
