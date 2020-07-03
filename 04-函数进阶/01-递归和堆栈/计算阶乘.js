/*
 * @Author: OriX
 * @Date: 2020-07-03 22:28:24
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-03 22:30:12
 * @FilePath: \JS_Restudy\04-函数进阶\01-递归和堆栈\计算阶乘.js
 */
/* 自然数的 阶乘 是指，一个数乘以 数字减去 1，然后乘以 数字减去 2，以此类推直到乘以 1。n 的阶乘被记作 n!
编写一个函数 factorial(n) 使用递归调用计算 n! */
function factorial (n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}