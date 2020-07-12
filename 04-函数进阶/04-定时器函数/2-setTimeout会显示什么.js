/*
 * @Author: OriX
 * @Date: 2020-07-13 00:24:42
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-13 00:25:52
 * @FilePath: \JS_Restudy\04-函数进阶\04-定时器函数.\2-setTimeout会显示什么.js
 */
/* 下面代码中使用 setTimeout 调度了一个调用，然后需要运行一个计算量很大的 for 循环，这段运算耗时超过 100 毫秒。
调度的函数会在何时运行？
循环执行完成后。
循环执行前。
循环刚开始时。
alert 会显示什么？ */

let i = 0;

setTimeout(() => alert(i), 100); // ?

// 假设这段代码的运行时间 >100ms
for (let j = 0; j < 100000000; j++) {
  i++;
}
// 调度的函数在循环执行完成后的100ms后执行
// 输出 100000000