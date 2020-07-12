/*
 * @Author: OriX
 * @Date: 2020-07-08 17:25:53
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-12 18:22:51
 * @FilePath: \JS_Restudy\精品题目\4-2闭包\11-函数中的对象变量中的this.js
 */
'use strict';
var a = 20;
function foo () {
  var a = 1;
  var obj = {
    a: 10,
    c: this.a + 20,
    fn: function () {
      return this.a;
    }
  }
  return obj.c;
}
var obj2 = {
  a: 200
}
console.log(foo.call(obj2))
console.log(foo());    // ？ 
console.log(window.foo());  // ?