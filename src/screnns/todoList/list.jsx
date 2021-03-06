import React, { Fragment } from "react";
export const List = ({ ProList, Users }) => {
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
        <tbody>
          {ProList.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.typeName}</td>
                <td>{item.organization}</td>
                <td>{Users.find((us) => us.ID === item.userID)?.userName || "未知"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};
