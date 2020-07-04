/*
 * @Author: OriX
 * @Date: 2020-07-04 22:48:17
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-04 22:48:49
 * @FilePath: \JS_Restudy\04-函数进阶\02-闭包\4-counter对象.js
 */
function Counter () {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let counter = new Counter();

alert(counter.up()); // ? 1
alert(counter.up()); // ? 2 
alert(counter.down()); // ? 1
/* 正常工作 */