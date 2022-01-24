/*
 * @Author: your name
 * @Date: 2022-01-24 19:50:05
 * @LastEditTime: 2022-01-24 20:32:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-jira\src\screnns\todoList\search.jsx\
 */
import React, { Fragment } from "react";
export const Search = () => {
  return (
    <Fragment>
      <h2>搜索功能</h2>
      <div
        className="form-group"
        style={{ overflow: "hidden", display: "flex", justifyContent: "center" }}>
        <input
          type="text"
          style={{ width: "20vw" }}
          value=""
          className="form-control"
          placeholder="请输入搜索内容"
        />
        <select value="" style={{ width: "10vw" }} className="form-control">
          <option>负责人</option>
        </select>
      </div>
    </Fragment>
  );
};
