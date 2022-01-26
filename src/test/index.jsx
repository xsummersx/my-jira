/*
 * @Author: your name
 * @Date: 2022-01-25 11:51:53
 * @LastEditTime: 2022-01-25 15:30:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-jira\src\test\index.jsx
 */
import React, { useState, useEffect, useCallback } from "react";
import { List } from "./list";
let cont = 0;
export const Test = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(["6点起床", "7点洗漱", "8点上班"]);
    console.log("获取数据");
  }, []);
  const addItem = useCallback(() => {
    console.log(list);
    const arrList = [...list];
    arrList.push("行程" + cont++);
    setList([...arrList]);
  }, [list]);
  return (
    <div>
      {list.map((li, index) => {
        return <List key={index} Item={li} Index={index} addbtn={addItem} />;
      })}

      <input type="button" onClick={addItem} />
    </div>
  );
};
