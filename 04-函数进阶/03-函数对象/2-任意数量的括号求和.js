/*
 * @Author: OriX
 * @Date: 2020-07-12 23:02:46
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-12 23:06:53
 * @FilePath: \JS_Restudy\04-函数进阶\03-函数对象\2-任意数量的括号求和.js
 */
/* 写一个函数 sum，它有这样的功能： */
function sum () {
  let currentSum = a;
  function f (b) {
    currentSum += b;
    return f;
  }
  f.toString = function () {
    return currentSum;
  }
  return f;
}
sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15