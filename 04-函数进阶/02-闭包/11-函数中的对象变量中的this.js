/*
 * @Author: OriX
 * @Date: 2020-07-08 17:25:53
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-12 18:23:40
 * @FilePath: \JS_Restudy\04-函数进阶\02-闭包\11-函数中的对象变量中的this.js
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
console.log(foo());    // ？ 此时this指向undefined 无法从中读取a 报错
console.log(window.foo());  // ? 40 严格模式不会阻止变量挂载到全局变量中