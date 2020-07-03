/*
 * @Author: OriX
 * @Date: 2020-07-03 22:36:05
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-03 22:38:47
 * @FilePath: \JS_Restudy\04-函数进阶\01-递归和堆栈\斐波那契数.js
 */
/* 斐波那契数 序列有这样的公式：
Fn = Fn - 1 + Fn - 2。换句话说，下一个数字是前两个数字的和。
前两个数字是 1
编写一个函数 fib(n) 返回第 n 个斐波那契数。 */
function fib (n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}