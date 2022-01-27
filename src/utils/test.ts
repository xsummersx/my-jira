/*
 * @Author: your name
 * @Date: 2022-01-26 19:37:22
 * @LastEditTime: 2022-01-27 10:21:08
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-jira\src\utils\test.ts
 */
export const Test = () => {
  //创建数组的方式
  let list1: (number | string | boolean)[] = [1, 2, 3, "str", true];
  let list2: Array<number | string | boolean> = [1, 2, 3, "str", true];
  let list3: any[] = [1, "str", true];
  //topup类型-固定长度固定类型
  let list4: [number, string] = [1, "str"];
  //联合类型
  let union: number | string | boolean | string[] = ["str", "del"];
  //字面量类型
  let literal: 1 | 2 | 3; //只能是数字123
  let literal1: "string" | "str1"; //只能是这两个字符串
  //枚举类型
  enum Color {
    red = "red",
    green = 123,
    blue = 111,
  }
  //any任意类型，unkown不知道类型部分类型使用需要加判断
  //void-函数无返回值，undefined函数返回值为undefined，never函数无法结束的类型
  //type Assertions类型适配，就是改变原来定义的类型
  let message: any;
  <string>message; //方法1
  message as string; //方法2
  //函数类型
  let log = (message: string) => {
    console.log(message);
  };
  log("hellow");
  let log3 = (msg: string, code: number) => {
    console.log(msg, code);
  };
  log3("hellow", 2); //必须传入2个参数
  //?号表示可以不传入该参数，打印结果为undefined,必选参数不能再可选参数后面
  let log4 = (msg: string, code?: number) => {
    console.log(msg, code);
  };
  log4("hellow");
  //设置number默认值为0,变成可不传入的参数
  let log5 = (msg: string, code: number = 0) => {
    console.log(msg);
  };
  log5("hellow");
  //object对象，很少用
  //interface和class,
  //高聚和，低耦合，聚和同样的类放一起，放一起的不同功能
  //   interface Point {
  //     x: number;
  //     y: number;
  //   }
  //类的概念，干同一件事情的对象
  //1-申明类型
  interface IPoint {
    x: number;
    y: number;
    drawPoint: () => void; //打印
    getDistances: (p: IPoint) => number; //方法返回值为number
  }
  //申明一个类
  class Point implements IPoint {
    // x: number = 0;
    // y: number = 0;
    //构造函数，这样可以再初始化实力的时候传入参数
    constructor(public x: number, public y: number) {}
    drawPoint = () => {
      console.log(this.x, this.y);
    };
    getDistances = (p: IPoint) => {
      return 12;
    };
  }
  //实例化一个类
  //acesModeifier访问修饰符，不允许修改实例里的值
  const point = new Point(24, 50);
  point.x = 30;
  point.y = 5;
  point.drawPoint();
  //   point.getDistances(af);
  //public private
};
