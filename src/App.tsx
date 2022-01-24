/*
 * @Author: your name
 * @Date: 2022-01-24 16:19:21
 * @LastEditTime: 2022-01-24 19:51:48
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-jira\src\App.tsx
 */
import React from "react";

import "./App.css";
import { TodoList } from "./screnns/todoList/index";
function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
