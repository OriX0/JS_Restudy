/*
 * @Author: OriX
 * @Date: 2020-07-04 22:49:45
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-04 22:50:04
 * @FilePath: \JS_Restudy\04-函数进阶\02-闭包\5-if内的函数.js
 */
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi () {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();
/*
报错
sayHi只在if内部 外部无法调用

*/