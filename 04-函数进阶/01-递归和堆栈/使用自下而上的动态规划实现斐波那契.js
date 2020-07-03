/*
 * @Author: OriX
 * @Date: 2020-07-03 22:39:43
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-03 22:42:57
 * @FilePath: \JS_Restudy\04-函数进阶\01-递归和堆栈\使用自下而上的动态规划实现斐波那契.js
 */
/* 斐波那契数 序列有这样的公式：
Fn = Fn - 1 + Fn - 2。换句话说，下一个数字是前两个数字的和。
前两个数字是 1
编写一个函数 fib(n) 返回第 n 个斐波那契数。 */
function fib (n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}