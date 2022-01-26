/*
 * @Author: your name
 * @Date: 2022-01-24 19:49:47
 * @LastEditTime: 2022-01-26 10:17:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-jira\src\screnns\todoList\index.jsx
 */
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment, useEffect, useState } from "react";
import { Search } from "./search";
import { List } from "./list";
import * as qs from "qs";
import { clearObject, useDebounce } from "utils/index";
const apiUrl = process.env.REACT_APP_API_URL;
export const TodoList = () => {
  const [peram, setPeram] = useState({
    userID: "",
    typeName: "",
  });
  const [users, setUser] = useState([]);
  const [prolist, setprolist] = useState([]);
  const debounceParam = useDebounce(peram, 2000);
  useEffect(() => {
    fetch(`${apiUrl}/proList?${qs.stringify(clearObject(debounceParam))}`).then(
      async (response) => {
        setprolist(await response.json());
      },
    );
  }, [debounceParam]);
  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      setUser(await response.json());
    });
  }, []);
  return (
    <Fragment>
      <div style={{ width: "70vw", margin: "0 auto" }}>
        <Search Peram={peram} SetPeram={setPeram} Users={users} />
        <List ProList={prolist} Users={users} />
      </div>
    </Fragment>
  );
};
