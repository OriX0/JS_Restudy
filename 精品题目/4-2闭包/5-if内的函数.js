/*
 * @Author: OriX
 * @Date: 2020-07-04 22:49:45
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-04 22:53:02
 * @FilePath: \JS_Restudy\精品题目\4-2闭包\5-if内的函数.js
 */
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi () {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();
