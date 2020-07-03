/*
 * @Author: OriX
 * @Date: 2020-07-03 22:20:44
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-03 22:30:56
 * @FilePath: \JS_Restudy\04-函数进阶\01-递归和堆栈\三种方式数字就和.js
 */
/* 编写一个函数 sumTo(n) 计算 1 + 2 + ... + n 的和。
使用循环。
使用递归，对 n > 1 执行 sumTo(n) = n + sumTo(n-1)。
使用 等差数列 求和公式. */

// 使用循环。
function sumTo1 (n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}
// 使用递归
function sumTo2 (n) {
  return (n != 1) ? n + sumTo2(n - 1) : 1;
}
// 使用等差数列
function sumTo3 (n) {
  return (1 + n) * n / 2
}