/*
 * @Author: your name
 * @Date: 2022-01-24 19:49:47
 * @LastEditTime: 2022-01-24 20:24:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-jira\src\screnns\todoList\index.jsx
 */
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment } from "react";
import { Search } from "./search";
import { List } from "./list";

export const TodoList = () => {
  return (
    <Fragment>
      <div style={{ width: "70vw", margin: "0 auto" }}>
        <Search />
        <List />
      </div>
    </Fragment>
  );
};
