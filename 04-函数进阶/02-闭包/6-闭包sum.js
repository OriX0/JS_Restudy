/*
 * @Author: OriX
 * @Date: 2020-07-04 22:53:27
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-04 22:54:18
 * @FilePath: \JS_Restudy\04-函数进阶\02-闭包\6-闭包sum.js
 */
/* 编写一个像 sum(a)(b) = a+b 这样工作的 sum 函数。
是的，就是这种通过双括号的方式（并不是错误）。
举个例子： */

sum(1)(2) = 3
sum(5)(-1) = 4
function sum (a) {
  return function (b) {
    return a + b;
  }
}