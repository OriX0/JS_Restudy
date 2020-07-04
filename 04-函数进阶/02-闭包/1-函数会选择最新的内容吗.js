/*
 * @Author: OriX
 * @Date: 2020-07-04 22:41:30
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-04 22:43:34
 * @FilePath: \JS_Restudy\04-函数进阶\02-闭包\1-函数会选择最新的内容吗.js
 */
let name = "John";

function sayHi () {
  alert("Hi, " + name);
}

name = "Pete";

sayHi(); // 会显示什么："John" 还是 "Pete"？
/*
  显示Pete
  函数之上而下的运行 获取运行时最新的值
 */