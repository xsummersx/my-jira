import React, { Fragment } from "react";
export const List = () => {
  return (
    <Fragment>
      <h2>以下是表格</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <td>序号</td>
            <td>类型名称</td>
            <td>所属组织</td>
            <td>负责人</td>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </Fragment>
  );
};
