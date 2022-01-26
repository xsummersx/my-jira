/*
 * @Author: your name
 * @Date: 2022-01-25 11:57:10
 * @LastEditTime: 2022-01-25 15:28:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-jira\src\test\list.jsx
 */
import React, { useEffect } from "react";
export const List = React.memo(({ Item, Index, addbtn }) => {
  useEffect(() => {
    console.log("子组件ListItem 加载" + Index);
  }, [Item]);
  useEffect(() => {
    console.log("子组件render" + Index);
  });

  return <div onClick={addbtn}>{Item}</div>;
});
