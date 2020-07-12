/*
 * @Author: OriX
 * @Date: 2020-07-13 00:12:35
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-13 00:23:56
 * @FilePath: \JS_Restudy\04-函数进阶\04-定时器函数.\1-每秒输出一次.js
 */
/* 编写一个函数 printNumbers(from, to)，使其每秒输出一个数字，数字从 from 开始，到 to 结束。
使用以下两种方法来实现。

使用 setInterval。
使用嵌套的 setTimeout。 */
function printNumbers (from, to) {
  let current = from;
  let timeId = setInterval(() => {
    console.log(current);
    current < to ? current++ : clearInterval(timeId);

  }, 1000)
};
// 嵌套的setTimeout
function printNumbers2 (from, to) {
  let current = from;
  setTimeout(function go () {
    console.log(current);
    if (current < to) {
      setTimeout(go, 1000)
    }
    current++;
  }, 1000)
}

printNumbers(3, 6)

