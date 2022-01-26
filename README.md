<!--
 * @Author: your name
 * @Date: 2022-01-24 16:19:21
 * @LastEditTime: 2022-01-25 15:35:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-jira\README.md
-->

# 从创建开始

1. npx create-react-app myreact --template typescript
2. 修改 tsconfig 的 baseUrl 为根目录
3. 引入 json-server ：npm i -g json-server
4. 引入 import 'bootstrap/dist/css/bootstrap.min.css'
5. qs 的安装，npm add qs

## Test 文件夹

1. 主要学习了 useCallback 和 React.memo 搭配使用，使得子组件不重复渲染
2. 对 useMemo 和 useCallback 的理解是：
   - useMemo 相当于计算属性，用于本组件作用区
   - useCallback 用做绑定点击事件需要传给子组件时使用
